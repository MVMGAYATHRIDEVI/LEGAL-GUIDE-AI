/* =========================================================
   LEGALGUIDE AI
   ASK.JS
   Multilingual Legal Analysis
   English + Telugu + Hindi
========================================================= */

let currentAnalysis = null;
let currentQuestion = "";
let analysisAlreadySaved = false;


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const analyzeBtn =
        document.getElementById("analyzeBtn");

    const downloadPdfBtn =
        document.getElementById("downloadPdfBtn");

    const newQuestionBtn =
        document.getElementById("newQuestionBtn");

    const legalQuestion =
        document.getElementById("legalQuestion");

    const language =
        document.getElementById("language");

    if (analyzeBtn) {
        analyzeBtn.addEventListener(
            "click",
            analyzeCase
        );
    }

    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener(
            "click",
            downloadPDF
        );
    }

    if (newQuestionBtn) {
        newQuestionBtn.addEventListener(
            "click",
            resetForm
        );
    }


    /* CHARACTER COUNTER */

    if (legalQuestion) {

        legalQuestion.addEventListener(
            "input",
            updateCharacterCount
        );

        updateCharacterCount();
    }


    /* ENTER LANGUAGE CHANGE */

    if (language) {

        language.addEventListener(
            "change",
            () => {

                if (
                    currentAnalysis &&
                    currentQuestion
                ) {

                    const translated =
                        translateAnalysis(
                            currentAnalysis,
                            language.value
                        );

                    displayAnalysis(
                        translated
                    );
                }

            }
        );

    }

});


/* =========================================================
   CHARACTER COUNT
========================================================= */

function updateCharacterCount() {

    const question =
        document.getElementById(
            "legalQuestion"
        );

    const counter =
        document.getElementById(
            "characterCount"
        );

    if (!question || !counter) return;

    counter.textContent =
        question.value.length +
        " / 10000 characters";
}


/* =========================================================
   ANALYZE CASE
========================================================= */

function analyzeCase() {

    const questionElement =
        document.getElementById(
            "legalQuestion"
        );

    const languageElement =
        document.getElementById(
            "language"
        );

    if (!questionElement) return;

    const question =
        questionElement.value.trim();

    const selectedLanguage =
        languageElement
            ? languageElement.value
            : "english";


    if (!question) {

        alert(
            selectedLanguage === "telugu"
                ? "దయచేసి మీ న్యాయ ప్రశ్నను నమోదు చేయండి."
                : selectedLanguage === "hindi"
                    ? "कृपया अपना कानूनी प्रश्न दर्ज करें।"
                    : "Please enter your legal question."
        );

        questionElement.focus();

        return;
    }


    if (question.length < 5) {

        alert(
            selectedLanguage === "telugu"
                ? "దయచేసి మీ సమస్యను కొంచెం వివరంగా వివరించండి."
                : selectedLanguage === "hindi"
                    ? "कृपया अपनी समस्या को थोड़ा विस्तार से बताएं।"
                    : "Please describe your legal issue in a little more detail."
        );

        return;
    }


    showLoading(true);


    /*
       Small delay makes the interface feel natural
       while keeping everything client-side.
    */

    setTimeout(() => {

        let result;


        try {

            /*
             * DATABASE ANALYSIS
             */

            if (
                typeof analyzeLegalQuestion ===
                "function"
            ) {

                result =
                    analyzeLegalQuestion(
                        question
                    );

            } else {

                result =
                    fallbackAnalysis();

            }


        } catch (error) {

            console.error(
                "Legal database error:",
                error
            );

            result =
                fallbackAnalysis();

        }


        /*
         * TRANSLATE RESULT
         */

        const translatedResult =
            translateAnalysis(
                result,
                selectedLanguage
            );


        currentQuestion =
            question;

        currentAnalysis =
            translatedResult;

        analysisAlreadySaved =
            false;


        /*
         * DISPLAY
         */

        displayAnalysis(
            translatedResult
        );


        /*
         * SAVE HISTORY
         */

        saveHistory(
            question,
            translatedResult,
            selectedLanguage
        );


        analysisAlreadySaved =
            true;


        showLoading(false);


        /*
         * SHOW RESULT
         */

        const resultSection =
            document.getElementById(
                "resultSection"
            );

        if (resultSection) {

            resultSection.style.display =
                "block";

            setTimeout(() => {

                resultSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 100);

        }

    }, 450);

}


/* =========================================================
   DISPLAY ANALYSIS
========================================================= */

function displayAnalysis(result) {

    if (!result) return;


    setText(
        "legalArea",
        result.area ||
        "Not Identified"
    );


    setText(
        "lawResult",
        result.law ||
        "Legal Consultation Required"
    );


    setText(
        "sectionResult",
        result.section ||
        "Not Identified"
    );


    setText(
        "analysisResult",
        result.analysis ||
        "No analysis available."
    );


    setText(
        "remedyResult",
        result.remedy ||
        "No specific remedy available."
    );


    setText(
        "questionPreview",
        currentQuestion
    );


    const confidenceBadge =
        document.getElementById(
            "confidenceBadge"
        );

    if (confidenceBadge) {

        confidenceBadge.textContent =
            (
                result.confidence ||
                "Medium"
            ) +
            " Confidence";

    }


    /*
     * SIMILAR PREVIOUS SITUATIONS
     */

    displaySimilarCases(
        result
    );
}


/* =========================================================
   SAFE TEXT
========================================================= */

function setText(
    id,
    value
) {

    const element =
        document.getElementById(id);

    if (!element) return;

    element.textContent =
        value;
}


/* =========================================================
   SIMILAR CASES
========================================================= */

function displaySimilarCases(result) {

    /*
     * If HTML already contains a similar-cases
     * element, use it.
     */

    const element =
        document.getElementById(
            "similarCasesResult"
        );

    if (!element) return;


    element.textContent =
        result.similarCases ||
        result.similar ||
        "No sufficiently similar example was identified.";
}


/* =========================================================
   LOADING
========================================================= */

function showLoading(show) {

    const loading =
        document.getElementById(
            "loadingMessage"
        );

    const button =
        document.getElementById(
            "analyzeBtn"
        );

    const buttonText =
        document.getElementById(
            "analyzeBtnText"
        );

    const icon =
        document.getElementById(
            "analyzeIcon"
        );


    if (loading) {

        loading.style.display =
            show
                ? "flex"
                : "none";

    }


    if (button) {

        button.disabled =
            show;

    }


    if (buttonText) {

        buttonText.textContent =
            show
                ? "Analyzing..."
                : "Analyze Case";

    }


    if (icon) {

        icon.className =
            show
                ? "fa-solid fa-spinner fa-spin"
                : "fa-solid fa-arrow-right";

    }

}


/* =========================================================
   MULTILINGUAL TRANSLATION
========================================================= */

function translateAnalysis(
    result,
    language
) {

    if (!result) {

        return fallbackAnalysis();

    }


    /*
     * English
     */

    if (
        language === "english" ||
        !language
    ) {

        return {
            ...result
        };

    }


    /*
     * TELUGU
     */

    if (language === "telugu") {

        return {

            ...result,

            area:
                translateAreaTelugu(
                    result.area
                ),

            law:
                translateLawTelugu(
                    result.law
                ),

            section:
                translateSectionTelugu(
                    result.section
                ),

            analysis:
                translateAnalysisTelugu(
                    result
                ),

            remedy:
                translateRemedyTelugu(
                    result
                ),

            similarCases:
                translateSimilarTelugu(
                    result
                )

        };

    }


    /*
     * HINDI
     */

    if (language === "hindi") {

        return {

            ...result,

            area:
                translateAreaHindi(
                    result.area
                ),

            law:
                translateLawHindi(
                    result.law
                ),

            section:
                translateSectionHindi(
                    result.section
                ),

            analysis:
                translateAnalysisHindi(
                    result
                ),

            remedy:
                translateRemedyHindi(
                    result
                ),

            similarCases:
                translateSimilarHindi(
                    result
                )

        };

    }


    return {
        ...result
    };

}


/* =========================================================
   TELUGU - AREA
========================================================= */

function translateAreaTelugu(area) {

    const map = {

        "Employment / Salary Dispute":
            "ఉద్యోగం / జీతం వివాదం",

        "Criminal Law":
            "క్రిమినల్ న్యాయం",

        "Civil Law":
            "సివిల్ న్యాయం",

        "Cyber Crime":
            "సైబర్ నేరం",

        "Family Law":
            "కుటుంబ న్యాయం",

        "Property Law":
            "ఆస్తి న్యాయం",

        "Consumer Protection":
            "వినియోగదారుల రక్షణ",

        "Motor Vehicle / Road Accident":
            "మోటార్ వాహనం / రోడ్డు ప్రమాదం",

        "Lost / Stolen Mobile Phone":
            "పోగొట్టుకున్న / దొంగిలించబడిన మొబైల్ ఫోన్",

        "Government Service / Administrative Issue":
            "ప్రభుత్వ సేవ / పరిపాలనా సమస్య",

        "Police Complaint":
            "పోలీస్ ఫిర్యాదు",

        "Constitutional Law":
            "రాజ్యాంగ న్యాయం",

        "Contract Dispute":
            "ఒప్పంద వివాదం",

        "Banking / Financial Dispute":
            "బ్యాంకింగ్ / ఆర్థిక వివాదం",

        "Education / Student Issue":
            "విద్య / విద్యార్థి సమస్య",

        "Medical / Hospital Issue":
            "వైద్య / ఆసుపత్రి సమస్య",

        "Not Identified":
            "గుర్తించబడలేదు"

    };

    return map[area] || area;
}


/* =========================================================
   HINDI - AREA
========================================================= */

function translateAreaHindi(area) {

    const map = {

        "Employment / Salary Dispute":
            "रोजगार / वेतन विवाद",

        "Criminal Law":
            "आपराधिक कानून",

        "Civil Law":
            "सिविल कानून",

        "Cyber Crime":
            "साइबर अपराध",

        "Family Law":
            "पारिवारिक कानून",

        "Property Law":
            "संपत्ति कानून",

        "Consumer Protection":
            "उपभोक्ता संरक्षण",

        "Motor Vehicle / Road Accident":
            "मोटर वाहन / सड़क दुर्घटना",

        "Lost / Stolen Mobile Phone":
            "खोया / चोरी हुआ मोबाइल फोन",

        "Government Service / Administrative Issue":
            "सरकारी सेवा / प्रशासनिक समस्या",

        "Police Complaint":
            "पुलिस शिकायत",

        "Constitutional Law":
            "संवैधानिक कानून",

        "Contract Dispute":
            "अनुबंध विवाद",

        "Banking / Financial Dispute":
            "बैंकिंग / वित्तीय विवाद",

        "Education / Student Issue":
            "शिक्षा / छात्र समस्या",

        "Medical / Hospital Issue":
            "चिकित्सा / अस्पताल समस्या",

        "Not Identified":
            "पहचान नहीं हुई"

    };

    return map[area] || area;
}


/* =========================================================
   TELUGU - LAW
========================================================= */

function translateLawTelugu(law) {

    if (!law) return "";

    if (
        law.includes("Code on Wages")
    ) {

        return "వేతనాల కోడ్, 2019 మరియు వర్తించే కార్మిక చట్టాలు";

    }

    if (
        law.includes("CEIR") ||
        law.includes("Bharatiya Nagarik Suraksha")
    ) {

        return "భారతీయ నాగరిక్ సురక్షా సంహిత, 2023, పోలీసు విధానాలు మరియు CEIR విధానాలు";

    }

    if (
        law.includes("Cyber")
    ) {

        return "సమాచార సాంకేతిక చట్టం, 2000 మరియు వర్తించే క్రిమినల్ చట్టాలు";

    }

    if (
        law.includes("Consumer")
    ) {

        return "వినియోగదారుల రక్షణ చట్టం, 2019";

    }

    return law;
}


/* =========================================================
   HINDI - LAW
========================================================= */

function translateLawHindi(law) {

    if (!law) return "";

    if (
        law.includes("Code on Wages")
    ) {

        return "वेतन संहिता, 2019 और लागू श्रम कानून";

    }

    if (
        law.includes("CEIR") ||
        law.includes("Bharatiya Nagarik Suraksha")
    ) {

        return "भारतीय नागरिक सुरक्षा संहिता, 2023, पुलिस प्रक्रिया और CEIR प्रक्रिया";

    }

    if (
        law.includes("Cyber")
    ) {

        return "सूचना प्रौद्योगिकी अधिनियम, 2000 और लागू आपराधिक कानून";

    }

    if (
        law.includes("Consumer")
    ) {

        return "उपभोक्ता संरक्षण अधिनियम, 2019";

    }

    return law;
}


/* =========================================================
   TELUGU - SECTION
========================================================= */

function translateSectionTelugu(section) {

    if (!section) return "";

    if (
        section.includes("Wage")
    ) {

        return "వేతనాల రక్షణకు సంబంధించిన నిబంధనలు";

    }

    if (
        section.includes("procedure")
    ) {

        return "వర్తించే విధానం మరియు సంబంధిత అధికారుల ప్రక్రియ";

    }

    return section;
}


/* =========================================================
   HINDI - SECTION
========================================================= */

function translateSectionHindi(section) {

    if (!section) return "";

    if (
        section.includes("Wage")
    ) {

        return "वेतन सुरक्षा से संबंधित प्रावधान";

    }

    if (
        section.includes("procedure")
    ) {

        return "लागू प्रक्रिया और संबंधित अधिकारियों की प्रक्रिया";

    }

    return section;
}


/* =========================================================
   TELUGU - ANALYSIS
========================================================= */

function translateAnalysisTelugu(result) {

    const area =
        result.area || "";


    if (
        area.includes("Employment") ||
        area.includes("Salary")
    ) {

        return "ఉద్యోగులకు జీతాలు మరియు వేతనాలు సకాలంలో చెల్లించబడేలా చట్టపరమైన రక్షణలు ఉన్నాయి. వర్తించే హక్కులు, గడువులు మరియు పరిహారాలు ఉద్యోగ స్వభావం, వర్తించే కార్మిక చట్టాలు, ఉద్యోగ ఒప్పందం మరియు కేసు వాస్తవాలపై ఆధారపడి ఉంటాయి.";

    }


    if (
        area.includes("Mobile") ||
        area.includes("Lost")
    ) {

        return "మొబైల్ ఫోన్ పోయినప్పుడు లేదా దొంగిలించబడినప్పుడు పోలీసులకు ఫిర్యాదు చేయవచ్చు. అవసరమైన సందర్భంలో IMEI వివరాలను CEIR వ్యవస్థలో నమోదు చేసి పరికరాన్ని బ్లాక్ చేయడానికి మరియు సంబంధిత చర్యలకు ప్రయత్నించవచ్చు. ఫిర్యాదు పురోగతి పోలీసు రికార్డులు, పరికర వివరాలు, నెట్‌వర్క్ సమాచారం మరియు ఇతర వాస్తవాలపై ఆధారపడి ఉంటుంది.";

    }


    if (
        area.includes("Cyber")
    ) {

        return "సైబర్ సంబంధిత సమస్యలకు వర్తించే చట్టాలు, సంఘటన స్వభావం మరియు అందుబాటులో ఉన్న ఆధారాలపై ఆధారపడి చట్టపరమైన చర్యలు మారవచ్చు. ఫిర్యాదు సంఖ్య, సందేశాలు, లావాదేవీ రికార్డులు మరియు ఇతర డిజిటల్ ఆధారాలను భద్రపరచడం ముఖ్యమైనది.";

    }


    return "మీ కేసుకు వర్తించే చట్టం మరియు విధానం సంఘటనకు సంబంధించిన పూర్తి వివరాలు, తేదీలు, వ్యక్తులు లేదా సంస్థలు, అందుబాటులో ఉన్న పత్రాలు మరియు సంబంధిత పరిస్థితులపై ఆధారపడి ఉంటుంది.";
}


/* =========================================================
   HINDI - ANALYSIS
========================================================= */

function translateAnalysisHindi(result) {

    const area =
        result.area || "";


    if (
        area.includes("Employment") ||
        area.includes("Salary")
    ) {

        return "कर्मचारियों को वेतन और मजदूरी के भुगतान के संबंध में कानूनी संरक्षण प्राप्त है। लागू अधिकार, समय-सीमा और उपाय रोजगार की प्रकृति, लागू श्रम कानूनों, रोजगार समझौते और मामले के तथ्यों पर निर्भर करते हैं।";

    }


    if (
        area.includes("Mobile") ||
        area.includes("Lost")
    ) {

        return "मोबाइल फोन खो जाने या चोरी होने की स्थिति में पुलिस में शिकायत की जा सकती है। जहां लागू हो, IMEI विवरण CEIR प्रणाली में दर्ज करके डिवाइस को ब्लॉक करने और संबंधित कार्रवाई का अनुरोध किया जा सकता है। शिकायत की प्रगति पुलिस रिकॉर्ड, डिवाइस की जानकारी, नेटवर्क स्थिति और अन्य तथ्यों पर निर्भर करती है।";

    }


    if (
        area.includes("Cyber")
    ) {

        return "साइबर संबंधित मामलों में कानूनी कार्रवाई घटना की प्रकृति, लागू कानून और उपलब्ध साक्ष्यों पर निर्भर करती है। शिकायत संख्या, संदेश, लेन-देन के रिकॉर्ड और अन्य डिजिटल साक्ष्यों को सुरक्षित रखना महत्वपूर्ण है।";

    }


    return "आपके मामले में लागू कानून और प्रक्रिया घटना के पूरे विवरण, तारीखों, संबंधित व्यक्तियों या संस्थाओं, उपलब्ध दस्तावेजों और अन्य परिस्थितियों पर निर्भर करती है।";
}


/* =========================================================
   TELUGU - REMEDY
========================================================= */

function translateRemedyTelugu(result) {

    const area =
        result.area || "";


    if (
        area.includes("Employment") ||
        area.includes("Salary")
    ) {

        return "జీతం స్లిప్‌లు, నియామక పత్రాలు, హాజరు రికార్డులు, బ్యాంక్ స్టేట్‌మెంట్‌లు మరియు యజమానితో జరిగిన కమ్యూనికేషన్‌లను భద్రపరచండి. యజమానికి జీతం చెల్లించాలని లిఖితపూర్వకంగా అభ్యర్థించండి. అవసరమైతే సంబంధిత కార్మిక అధికారిని సంప్రదించండి లేదా న్యాయ నిపుణుడి సలహా తీసుకోండి.";

    }


    if (
        area.includes("Mobile") ||
        area.includes("Lost")
    ) {

        return "పోలీసు ఫిర్యాదు లేదా రసీదు, CEIR అభ్యర్థన సంఖ్య, IMEI నంబర్, కొనుగోలు రికార్డులు మరియు గుర్తింపు వివరాలను భద్రపరచండి. CEIR మరియు పోలీసు ఫిర్యాదు స్థితిని తనిఖీ చేయండి. పురోగతి లేకపోతే సంబంధిత పోలీసు అధికారులను సంప్రదించండి. ఫోన్‌ను స్వయంగా లేదా చట్టవిరుద్ధంగా తిరిగి పొందడానికి ప్రయత్నించవద్దు.";

    }


    if (
        area.includes("Cyber")
    ) {

        return "ఫిర్యాదు సంఖ్య, స్క్రీన్‌షాట్‌లు, సందేశాలు, లావాదేవీ వివరాలు మరియు ఇతర డిజిటల్ ఆధారాలను భద్రపరచండి. సంబంధిత సైబర్ క్రైమ్ అధికారులను సంప్రదించి ఫిర్యాదు పురోగతిని అనుసరించండి.";

    }


    return "సంబంధిత పత్రాలు, రసీదులు, కమ్యూనికేషన్‌లు మరియు ఇతర ఆధారాలను భద్రపరచండి. అవసరమైనప్పుడు సంబంధిత అధికారులను సంప్రదించండి మరియు కేసు ప్రత్యేకమైన న్యాయ సలహా కోసం అర్హత కలిగిన న్యాయ నిపుణుడిని సంప్రదించండి.";
}


/* =========================================================
   HINDI - REMEDY
========================================================= */

function translateRemedyHindi(result) {

    const area =
        result.area || "";


    if (
        area.includes("Employment") ||
        area.includes("Salary")
    ) {

        return "वेतन पर्ची, नियुक्ति पत्र, उपस्थिति रिकॉर्ड, बैंक स्टेटमेंट और नियोक्ता के साथ हुई बातचीत को सुरक्षित रखें। नियोक्ता से वेतन भुगतान के लिए लिखित अनुरोध करें। आवश्यकता होने पर संबंधित श्रम अधिकारी से संपर्क करें या योग्य कानूनी पेशेवर की सलाह लें।";

    }


    if (
        area.includes("Mobile") ||
        area.includes("Lost")
    ) {

        return "पुलिस शिकायत या रसीद, CEIR अनुरोध संख्या, IMEI नंबर, खरीद रिकॉर्ड और पहचान संबंधी विवरण सुरक्षित रखें। CEIR और पुलिस शिकायत की स्थिति जांचें। प्रगति न होने पर संबंधित पुलिस अधिकारी से संपर्क करें। फोन को स्वयं या गैरकानूनी तरीके से वापस पाने का प्रयास न करें।";

    }


    if (
        area.includes("Cyber")
    ) {

        return "शिकायत संख्या, स्क्रीनशॉट, संदेश, लेन-देन का विवरण और अन्य डिजिटल साक्ष्य सुरक्षित रखें। संबंधित साइबर अपराध अधिकारियों से संपर्क करें और शिकायत की प्रगति का पालन करें।";

    }


    return "संबंधित दस्तावेज, रसीदें, संचार और अन्य साक्ष्य सुरक्षित रखें। आवश्यकता होने पर संबंधित अधिकारियों से संपर्क करें और मामले के लिए योग्य कानूनी पेशेवर की सलाह लें।";
}


/* =========================================================
   SIMILAR CASES - TELUGU
========================================================= */

function translateSimilarTelugu(result) {

    if (
        result.similarCases ||
        result.similar
    ) {

        return "ఇలాంటి కేసుల్లో సాధారణంగా సంబంధిత వ్యక్తులు ఫిర్యాదు రసీదులు, పత్రాలు మరియు ఇతర ఆధారాలను భద్రపరచి, సంబంధిత అధికారులను సంప్రదించి ఫిర్యాదు పురోగతిని అనుసరిస్తారు. తీసుకున్న చట్టపరమైన చర్యలు కేసు వాస్తవాలు మరియు వర్తించే చట్టాలపై ఆధారపడి ఉంటాయి.";

    }

    return "ఇలాంటి పరిస్థితుల్లో సాధారణంగా ఫిర్యాదు రికార్డులు మరియు ఆధారాలను భద్రపరచి సంబంధిత అధికారులను సంప్రదిస్తారు. తుది చట్టపరమైన చర్యలు కేసు వాస్తవాలు మరియు వర్తించే చట్టాలపై ఆధారపడి ఉంటాయి.";
}


/* =========================================================
   SIMILAR CASES - HINDI
========================================================= */

function translateSimilarHindi(result) {

    if (
        result.similarCases ||
        result.similar
    ) {

        return "ऐसी समान परिस्थितियों में लोग आमतौर पर शिकायत की रसीद, दस्तावेज और अन्य साक्ष्य सुरक्षित रखते हैं तथा संबंधित अधिकारियों से संपर्क करके शिकायत की प्रगति का पालन करते हैं। की गई कानूनी कार्रवाई मामले के तथ्यों और लागू कानूनों पर निर्भर करती है।";

    }

    return "ऐसी परिस्थितियों में सामान्यतः शिकायत के रिकॉर्ड और साक्ष्य सुरक्षित रखकर संबंधित अधिकारियों से संपर्क किया जाता है। अंतिम कानूनी कार्रवाई मामले के तथ्यों और लागू कानूनों पर निर्भर करती है।";
}


/* =========================================================
   FALLBACK
========================================================= */

function fallbackAnalysis() {

    return {

        area:
            "Not Identified",

        law:
            "Legal Consultation Required",

        section:
            "Not Identified",

        analysis:
            "The available legal database could not identify a sufficiently clear legal category from the question. Additional facts may be necessary to determine the applicable law.",

        remedy:
            "Provide relevant facts such as what happened, when it happened, the people or organisations involved, available documents and the location. For case-specific advice, consult a qualified legal professional.",

        similarCases:
            "No sufficiently similar example was identified.",

        confidence:
            "Low"

    };

}


/* =========================================================
   SAVE HISTORY
========================================================= */

function saveHistory(
    question,
    result,
    language
) {

    let history = [];

    try {

        history =
            JSON.parse(
                localStorage.getItem(
                    "legalGuideHistory"
                )
            ) || [];

    } catch (error) {

        history = [];

    }


    const historyItem = {

        id:
            Date.now(),

        date:
            new Date().toISOString(),

        displayDate:
            new Date().toLocaleString(),

        question:
            question,

        language:
            language,

        area:
            result.area || "",

        law:
            result.law || "",

        section:
            result.section || "",

        analysis:
            result.analysis || "",

        remedy:
            result.remedy || "",

        similarCases:
            result.similarCases ||
            result.similar ||
            "",

        confidence:
            result.confidence ||
            "Low"

    };


    history.unshift(
        historyItem
    );


    /*
     * Keep latest 100 cases.
     */

    if (history.length > 100) {

        history =
            history.slice(0, 100);

    }


    localStorage.setItem(
        "legalGuideHistory",
        JSON.stringify(history)
    );

}


/* =========================================================
   RESET FORM
========================================================= */

function resetForm() {

    const question =
        document.getElementById(
            "legalQuestion"
        );

    const resultSection =
        document.getElementById(
            "resultSection"
        );

    const language =
        document.getElementById(
            "language"
        );


    if (question) {

        question.value = "";

    }


    if (resultSection) {

        resultSection.style.display =
            "none";

    }


    if (language) {

        language.value =
            "english";

    }


    updateCharacterCount();


    currentAnalysis =
        null;

    currentQuestion =
        "";

    analysisAlreadySaved =
        false;


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================================
   PDF
========================================================= */

function downloadPDF() {

    if (!currentAnalysis) {

        alert(
            "Please analyze a case first."
        );

        return;

    }


    if (
        typeof window.jspdf ===
        "undefined"
    ) {

        alert(
            "PDF library is not loaded."
        );

        return;

    }


    const {
        jsPDF
    } =
        window.jspdf;


    const doc =
        new jsPDF();


    const language =
        document.getElementById(
            "language"
        )?.value ||
        "english";


    let y = 20;


    /*
     * HEADER
     */

    doc.setFontSize(20);

    doc.text(
        "LEGALGUIDE AI",
        20,
        y
    );


    y += 10;


    doc.setFontSize(14);

    doc.text(
        "Legal Analysis Report",
        20,
        y
    );


    y += 12;


    doc.setFontSize(10);

    doc.text(
        "Language: " +
        language,
        20,
        y
    );


    y += 12;


    addPdfSection(
        doc,
        "Legal Area",
        currentAnalysis.area,
        y
    );

    y +=
        getPdfHeight(
            currentAnalysis.area
        );


    addPdfSection(
        doc,
        "Applicable Law",
        currentAnalysis.law,
        y
    );

    y +=
        getPdfHeight(
            currentAnalysis.law
        );


    addPdfSection(
        doc,
        "Relevant Section",
        currentAnalysis.section,
        y
    );

    y +=
        getPdfHeight(
            currentAnalysis.section
        );


    addPdfSection(
        doc,
        "Legal Analysis",
        currentAnalysis.analysis,
        y
    );

    y +=
        getPdfHeight(
            currentAnalysis.analysis
        );


    addPdfSection(
        doc,
        "Suggested Remedy",
        currentAnalysis.remedy,
        y
    );

    y +=
        getPdfHeight(
            currentAnalysis.remedy
        );


    if (
        currentAnalysis.similarCases
    ) {

        addPdfSection(
            doc,
            "Similar Previous Situations",
            currentAnalysis.similarCases,
            y
        );

    }


    doc.save(
        "LegalGuideAI_Report.pdf"
    );

}


/* =========================================================
   PDF HELPERS
========================================================= */

function addPdfSection(
    doc,
    title,
    text,
    y
) {

    if (y > 260) {

        doc.addPage();

        y = 20;

    }


    doc.setFontSize(12);

    doc.text(
        title,
        20,
        y
    );


    y += 7;


    doc.setFontSize(10);


    const lines =
        doc.splitTextToSize(
            String(text || ""),
            170
        );


    doc.text(
        lines,
        20,
        y
    );

}


function getPdfHeight(text) {

    const length =
        String(text || "").length;

    return Math.max(
        15,
        Math.ceil(
            length / 75
        ) * 6 +
        12
    );

}