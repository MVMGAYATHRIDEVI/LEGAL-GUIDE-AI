
/* =========================================================
   LEGALGUIDE AI
   SMART LEGAL KNOWLEDGE DATABASE
   India-focused | Client-side | No API required
========================================================= */

const LEGAL_DATABASE = [

    /* =====================================================
       1. LOST / STOLEN MOBILE PHONE
    ===================================================== */

    {
        id: "mobile-lost-stolen",

        keywords: [
            "mobile lost",
            "phone lost",
            "lost phone",
            "lost mobile",
            "mobile stolen",
            "phone stolen",
            "stolen phone",
            "stolen mobile",
            "my phone was stolen",
            "my mobile was stolen",
            "ceir",
            "cier portal",
            "imei blocked",
            "imei",
            "lost device"
        ],

        area: "Lost / Stolen Mobile Phone",

        law: "Applicable police procedures, Bharatiya Nagarik Suraksha Sanhita, 2023 and CEIR procedures; Bharatiya Nyaya Sanhita, 2023 may apply where theft or another offence is involved.",

        section: "The applicable procedure depends on whether the device was lost, stolen or involved in another offence.",

        analysis:
            "A lost or stolen mobile phone can be reported to the police and, where applicable, its IMEI can be submitted through the Central Equipment Identity Register (CEIR) system for blocking and related action. Where the device was stolen, the facts may also involve an offence under applicable criminal law. The progress of a complaint depends on the police report, device information, network status and other facts.",

        remedy:
            "Keep the police complaint or acknowledgement, CEIR request ID, IMEI number, purchase invoice and identification details. Check the complaint and CEIR status and follow up with the concerned police authority if there is no progress. Do not attempt to recover the device through unsafe or unlawful methods.",

        previous:
            "Similar lost or stolen-device matters commonly involve a police complaint, preservation of the IMEI and purchase records, CEIR registration or blocking, and follow-up with the investigating police authority."
    },


    /* =====================================================
       2. LAPTOP / COMPUTER / ELECTRONIC DEVICE THEFT
    ===================================================== */

    {
        id: "electronic-theft",

        keywords: [
            "laptop stolen",
            "laptop theft",
            "laptop was stolen",
            "my laptop was theft",
            "my laptop was stolen",
            "computer stolen",
            "computer theft",
            "pc stolen",
            "desktop stolen",
            "tablet stolen",
            "ipad stolen",
            "electronic device stolen",
            "my device was stolen",
            "someone stole my laptop"
        ],

        area: "Theft / Stolen Electronic Device",

        law: "Bharatiya Nyaya Sanhita, 2023 (BNS) and applicable criminal procedure under the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS).",

        section: "The applicable theft provision depends on the facts, manner of taking, location, possession and other circumstances.",

        analysis:
            "Taking another person's laptop or electronic device without consent, with the legally required intention and circumstances, may constitute theft. The precise offence and applicable provision depend on how the device was taken, where it was taken, who possessed it and what evidence is available.",

        remedy:
            "Preserve the purchase invoice, serial number, photographs, CCTV footage, device location information, messages and witness details. Report the theft to the police and retain the complaint or FIR acknowledgement. If the device contains sensitive accounts or personal information, change passwords and secure the affected accounts.",

        previous:
            "Similar stolen-electronics matters commonly involve a police complaint followed by investigation using purchase records, serial numbers, CCTV footage, witnesses and available device-location information."
    },


    /* =====================================================
       3. GENERAL THEFT
    ===================================================== */

    {
        id: "theft",

        keywords: [
            "someone stole",
            "stolen my",
            "stole my",
            "theft",
            "my things were stolen",
            "my property was stolen",
            "valuable stolen",
            "robbed",
            "stolen property"
        ],

        area: "Theft / Stolen Property",

        law: "Bharatiya Nyaya Sanhita, 2023 (BNS), together with applicable criminal procedure under the BNSS.",

        section: "The applicable provision depends on the nature and circumstances of the alleged theft.",

        analysis:
            "Unlawfully taking movable property belonging to another person may amount to theft when the legal ingredients of the offence are satisfied. The exact legal classification depends on the circumstances, intention, possession and evidence.",

        remedy:
            "Preserve photographs, bills, ownership records, CCTV footage, messages and witness information. Report the incident to the appropriate police authority and retain the complaint or FIR details.",

        previous:
            "Similar theft complaints commonly proceed through police reporting, collection of ownership evidence, witness statements, CCTV or other available evidence and investigation."
    },


    /* =====================================================
       4. SALARY / WAGES
    ===================================================== */

    {
        id: "salary",

        keywords: [
            "salary not paid",
            "salary unpaid",
            "salary pending",
            "salary delayed",
            "employer has not paid",
            "employer not paying",
            "wages not paid",
            "wages unpaid",
            "monthly salary",
            "salary for two months",
            "salary for 2 months",
            "salary for last month",
            "my employer has not given salary"
        ],

        area: "Employment / Salary Dispute",

        law: "Code on Wages, 2019 and other applicable labour laws, employment terms and rules depending on the nature of employment.",

        section: "The applicable wage-payment provisions depend on the employment relationship, wage structure, establishment and circumstances.",

        analysis:
            "Employees generally have legal protections concerning payment of wages and salary. The exact rights, timelines and remedies depend on the nature of employment, applicable labour laws, the employment agreement and the facts of the dispute.",

        remedy:
            "Keep salary slips, appointment or employment records, attendance records, bank statements and communications with the employer. Make a written request for payment and, where appropriate, approach the competent labour authority or seek advice from a qualified legal professional.",

        previous:
            "Similar unpaid-salary disputes commonly involve written demands to the employer, preservation of employment and payment records, and escalation through the appropriate labour authority or legal process."
    },


    /* =====================================================
       5. EMPLOYMENT TERMINATION
    ===================================================== */

    {
        id: "wrongful-termination",

        keywords: [
            "fired without reason",
            "terminated from job",
            "wrongfully terminated",
            "wrongful termination",
            "unfair dismissal",
            "dismissed from job",
            "removed from job",
            "employer fired me",
            "job termination",
            "terminated without notice"
        ],

        area: "Employment / Termination",

        law: "Applicable labour and employment laws, employment agreement, standing orders and service conditions depending on the nature of employment.",

        section: "The applicable rights depend on the employment relationship, notice terms, applicable labour legislation and circumstances of termination.",

        analysis:
            "The legality of termination depends on the employee's status, contract, applicable labour law, notice requirements and the reason and procedure for termination. Different rules may apply to different categories of employees.",

        remedy:
            "Keep the appointment letter, termination letter, salary records, attendance records and communications. Review the employment agreement and applicable grievance or labour mechanisms before taking further action.",

        previous:
            "Similar employment disputes commonly involve reviewing the appointment terms, documenting the termination, making a written representation and using the appropriate labour or employment dispute mechanism."
    },


    /* =====================================================
       6. CYBER FRAUD / ONLINE SCAM
    ===================================================== */

    {
        id: "cyber-fraud",

        keywords: [
            "online scam",
            "online fraud",
            "cyber fraud",
            "cyber crime",
            "money stolen online",
            "upi fraud",
            "upi scam",
            "online payment fraud",
            "bank fraud",
            "otp fraud",
            "phishing",
            "scammed online",
            "fraudulent transaction",
            "money deducted fraud",
            "someone hacked my account"
        ],

        area: "Cyber Crime / Online Financial Fraud",

        law: "Information Technology Act, 2000, Bharatiya Nyaya Sanhita, 2023 and applicable banking/payment rules depending on the facts.",

        section: "The applicable provisions depend on the type of cyber offence, transaction, deception, access and evidence.",

        analysis:
            "Online financial fraud may involve unauthorised transactions, deception, impersonation, unauthorised access or other cyber offences. The applicable legal provisions depend on exactly what happened and how the transaction or access occurred.",

        remedy:
            "Immediately contact the bank or payment service provider, preserve transaction IDs, screenshots, messages, phone numbers and other evidence, and report the incident through the appropriate cyber-crime reporting mechanism. Change compromised passwords and secure affected accounts.",

        previous:
            "Similar cyber-fraud matters commonly involve immediate reporting to the bank or payment provider, preservation of transaction evidence and reporting to the appropriate cyber-crime or police authority."
    },


    /* =====================================================
       7. HACKING / ACCOUNT ACCESS
    ===================================================== */

    {
        id: "hacking",

        keywords: [
            "hacked",
            "my account hacked",
            "instagram hacked",
            "facebook hacked",
            "email hacked",
            "account compromised",
            "unauthorized access",
            "someone accessed my account",
            "password changed by hacker"
        ],

        area: "Cyber Crime / Unauthorised Access",

        law: "Information Technology Act, 2000 and applicable criminal law depending on the conduct and circumstances.",

        section: "The relevant provisions depend on the nature of unauthorised access, data interference, identity misuse or other conduct.",

        analysis:
            "Unauthorised access to an account or computer resource may attract legal consequences depending on the conduct, intention, damage and evidence. The exact legal classification requires the specific facts.",

        remedy:
            "Secure the account immediately, change passwords, enable two-factor authentication, preserve login alerts and screenshots, and report the incident through the relevant platform and cyber-crime authority where appropriate.",

        previous:
            "Similar account-compromise matters commonly involve securing the account, preserving digital evidence, reporting the compromise and investigating the source of unauthorised access."
    },


    /* =====================================================
       8. FIR NOT REGISTERED
    ===================================================== */

    {
        id: "fir",

        keywords: [
            "police not registering fir",
            "fir not registered",
            "police refused fir",
            "police refusing complaint",
            "police did not register",
            "complaint not registered",
            "police not taking complaint",
            "fir complaint"
        ],

        area: "Police Complaint / FIR",

        law: "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) and applicable police and criminal procedure.",

        section: "The procedure for recording information and escalating a police complaint depends on the nature of the alleged offence and applicable procedural provisions.",

        analysis:
            "Where a person approaches the police regarding a cognizable offence and the complaint is not properly acted upon, procedural remedies may be available. The appropriate route depends on the facts and nature of the offence.",

        remedy:
            "Keep a copy of the written complaint, acknowledgement and supporting evidence. Where appropriate, escalate the complaint to the senior police authority and consider other lawful procedural remedies.",

        previous:
            "Similar matters commonly involve preserving the original complaint, obtaining proof of submission and escalating through the appropriate police or judicial procedure."
    },


    /* =====================================================
       9. ASSAULT / HURT
    ===================================================== */

    {
        id: "assault",

        keywords: [
            "assaulted me",
            "someone attacked me",
            "physical attack",
            "beaten",
            "hit me",
            "beat me",
            "assault",
            "physical assault",
            "injured me",
            "someone hurt me"
        ],

        area: "Criminal Law / Assault",

        law: "Bharatiya Nyaya Sanhita, 2023 and applicable criminal procedure.",

        section: "The applicable provision depends on the nature of the assault, injury, intention, weapons used and surrounding circumstances.",

        analysis:
            "Physical violence may constitute an offence depending on the nature and seriousness of the conduct and resulting injury. Medical evidence and other facts can be important in determining the appropriate legal provision.",

        remedy:
            "Seek appropriate medical attention, preserve medical records, photographs and witness details, and report the incident to the police where appropriate.",

        previous:
            "Similar assault matters commonly involve medical documentation, witness evidence, photographs or other proof and a police complaint."
    },


    /* =====================================================
       10. DOMESTIC VIOLENCE
    ===================================================== */

    {
        id: "domestic-violence",

        keywords: [
            "domestic violence",
            "husband beating wife",
            "husband beats me",
            "wife beaten",
            "violence by husband",
            "violence by in laws",
            "in laws harassing",
            "domestic abuse",
            "husband harassment",
            "marital violence"
        ],

        area: "Family Law / Domestic Violence",

        law: "Protection of Women from Domestic Violence Act, 2005 and other applicable laws depending on the facts.",

        section: "Available protections and remedies depend on the type of domestic violence and circumstances.",

        analysis:
            "Domestic violence can include physical, emotional, verbal, sexual or economic abuse as recognised by applicable law. The available protections depend on the facts and circumstances.",

        remedy:
            "Preserve messages, medical records, photographs and other evidence. Where safety is at risk, seek immediate assistance from appropriate authorities and consider remedies available under the Domestic Violence Act.",

        previous:
            "Similar matters may involve protection orders, residence-related relief, monetary relief and other remedies depending on the circumstances."
    },


    /* =====================================================
       11. DIVORCE
    ===================================================== */

    {
        id: "divorce",

        keywords: [
            "divorce",
            "want divorce",
            "husband wants divorce",
            "wife wants divorce",
            "mutual divorce",
            "divorce petition",
            "marriage dissolution",
            "end my marriage"
        ],

        area: "Family Law / Divorce",

        law: "Applicable personal marriage and divorce law, including the Hindu Marriage Act, 1955 where applicable.",

        section: "The applicable grounds and procedure depend on the parties' personal law, marriage status and circumstances.",

        analysis:
            "Divorce proceedings depend on the applicable personal law and whether the parties seek mutual consent or contest the matter. Issues such as maintenance, custody and property may also arise.",

        remedy:
            "Collect marriage documents, identity records and relevant evidence. Consider obtaining advice from a family-law professional before filing or responding to proceedings.",

        previous:
            "Similar divorce matters commonly involve determining the applicable personal law, deciding between mutual-consent and contested proceedings and addressing related maintenance or custody issues."
    },


    /* =====================================================
       12. MAINTENANCE
    ===================================================== */

    {
        id: "maintenance",

        keywords: [
            "maintenance from husband",
            "wife maintenance",
            "husband not giving maintenance",
            "maintenance case",
            "monthly maintenance",
            "spousal maintenance",
            "child maintenance",
            "financial support after divorce"
        ],

        area: "Family Law / Maintenance",

        law: "Applicable family and personal laws, including relevant provisions of criminal procedure and matrimonial statutes depending on the circumstances.",

        section: "The applicable maintenance provision depends on the relationship, personal law, financial circumstances and nature of proceedings.",

        analysis:
            "Maintenance claims depend on factors such as the relationship, income, financial needs, applicable personal law and circumstances of the parties.",

        remedy:
            "Maintain records of income, expenses, marriage documents and financial communications. Seek advice regarding the appropriate maintenance proceeding.",

        previous:
            "Similar maintenance matters commonly involve disclosure of income and expenses and consideration of the financial needs and circumstances of the parties."
    },


    /* =====================================================
       13. CHILD CUSTODY
    ===================================================== */

    {
        id: "custody",

        keywords: [
            "child custody",
            "custody of child",
            "take custody",
            "father wants custody",
            "mother wants custody",
            "child with father",
            "child with mother",
            "custody case"
        ],

        area: "Family Law / Child Custody",

        law: "Applicable guardianship and family laws, including the Guardians and Wards Act, 1890 where applicable.",

        section: "Custody and guardianship decisions depend on the facts and the welfare of the child.",

        analysis:
            "In custody matters, the welfare and best interests of the child are central considerations. Courts consider the circumstances of the child and the parents.",

        remedy:
            "Keep relevant school, medical, financial and caregiving records and obtain appropriate family-law advice regarding the proper proceeding.",

        previous:
            "Similar custody matters commonly involve evidence concerning the child's welfare, education, health, living arrangements and parental care."
    },


    /* =====================================================
       14. PROPERTY DISPUTE
    ===================================================== */

    {
        id: "property",

        keywords: [
            "property dispute",
            "land dispute",
            "land problem",
            "property stolen",
            "property ownership",
            "land ownership",
            "property boundary",
            "boundary dispute",
            "my land",
            "my property",
            "illegal possession",
            "encroachment"
        ],

        area: "Property Law / Land Dispute",

        law: "Applicable property, civil, registration and land laws depending on the nature and location of the property.",

        section: "The relevant provisions depend on ownership, possession, title documents, registration records and the nature of the dispute.",

        analysis:
            "Property disputes can concern title, possession, boundaries, inheritance, registration or encroachment. The appropriate legal remedy depends on the documents and circumstances.",

        remedy:
            "Collect sale deeds, title documents, registration records, tax receipts, survey records and other evidence. Obtain a title and document review before taking legal action.",

        previous:
            "Similar property disputes commonly involve examination of title documents, registration records, survey information and possession evidence."
    },


    /* =====================================================
       15. RENT / LANDLORD
    ===================================================== */

    {
        id: "rent",

        keywords: [
            "landlord",
            "tenant",
            "rent dispute",
            "rent agreement",
            "landlord not returning deposit",
            "security deposit",
            "tenant eviction",
            "owner asking me to vacate",
            "house rent",
            "rental dispute"
        ],

        area: "Rent / Landlord-Tenant Dispute",

        law: "Applicable state rent laws, transfer of property principles and the rental agreement, depending on the circumstances and location.",

        section: "Rights concerning rent, eviction and security deposits depend on the applicable state law and agreement.",

        analysis:
            "Landlord-tenant disputes may concern rent, possession, eviction, repairs, notice or security deposits. The applicable rules vary by state and by the terms of the tenancy.",

        remedy:
            "Keep the rental agreement, payment receipts, bank records, messages and photographs of the property. Review the applicable notice and dispute-resolution requirements.",

        previous:
            "Similar rental disputes commonly involve reviewing the tenancy agreement, payment records, notices and communications between landlord and tenant."
    },


    /* =====================================================
       16. CONSUMER COMPLAINT
    ===================================================== */

    {
        id: "consumer",

        keywords: [
            "consumer complaint",
            "consumer court",
            "defective product",
            "defective product complaint",
            "service not provided",
            "bad service",
            "refund not given",
            "product damaged",
            "online shopping complaint",
            "company not refunding",
            "consumer protection"
        ],

        area: "Consumer Protection",

        law: "Consumer Protection Act, 2019 and applicable consumer dispute procedures.",

        section: "The appropriate remedy depends on the product or service, deficiency, defect, loss and evidence.",

        analysis:
            "Consumers may have remedies where goods are defective or services are deficient, subject to the requirements of applicable consumer law.",

        remedy:
            "Keep invoices, order details, warranty documents, photographs, payment records, communications and complaint numbers. First use the seller or service provider's grievance mechanism where appropriate and consider the consumer dispute process.",

        previous:
            "Similar consumer disputes commonly involve invoices, warranty records, communications, complaint numbers and evidence of defect or deficiency."
    },


    /* =====================================================
       17. CHEQUE BOUNCE
    ===================================================== */

    {
        id: "cheque-bounce",

        keywords: [
            "cheque bounced",
            "cheque bounce",
            "check bounced",
            "check bounce",
            "dishonoured cheque",
            "cheque dishonour",
            "cheque returned",
            "payment cheque bounced"
        ],

        area: "Cheque Dishonour",

        law: "Negotiable Instruments Act, 1881, particularly the provisions relating to dishonour of cheques, subject to the statutory requirements.",

        section: "The applicable provision and procedure depend on the cheque, transaction, notice and statutory timelines.",

        analysis:
            "Dishonour of a cheque may give rise to legal proceedings when the statutory conditions are satisfied. Important issues include presentation, dishonour, notice and prescribed timelines.",

        remedy:
            "Keep the cheque, bank return memo, transaction documents and communications. Obtain professional advice promptly because statutory timelines can be important.",

        previous:
            "Similar cheque-dishonour matters commonly depend on the cheque, bank return memo, underlying transaction and timely statutory notice and proceedings."
    },


    /* =====================================================
       18. ROAD ACCIDENT
    ===================================================== */

    {
        id: "accident",

        keywords: [
            "road accident",
            "car accident",
            "bike accident",
            "vehicle accident",
            "motor accident",
            "hit by car",
            "hit by bike",
            "accident compensation",
            "road crash",
            "traffic accident"
        ],

        area: "Motor Vehicle / Road Accident",

        law: "Motor Vehicles Act, 1988, applicable insurance rules and other relevant criminal or civil laws depending on the circumstances.",

        section: "The applicable remedy depends on the accident, injuries, vehicle, insurance and circumstances.",

        analysis:
            "Road accidents may involve compensation, insurance claims and, depending on the facts, criminal or traffic proceedings. Medical evidence and accident records are important.",

        remedy:
            "Preserve medical records, photographs, vehicle documents, insurance details, witness information and police records. Notify the insurer and follow the appropriate claim procedure.",

        previous:
            "Similar accident claims commonly rely on medical records, police documents, insurance information, photographs and witness evidence."
    },


    /* =====================================================
       19. DEFAMATION
    ===================================================== */

    {
        id: "defamation",

        keywords: [
            "defamation",
            "defamed me",
            "false allegations",
            "false accusations",
            "false statement about me",
            "reputation damaged",
            "posted false information about me",
            "social media defamation"
        ],

        area: "Defamation",

        law: "Bharatiya Nyaya Sanhita, 2023 and applicable civil remedies, depending on the facts.",

        section: "The applicable provision depends on the statement, publication, intention, context and available defences.",

        analysis:
            "A false statement affecting a person's reputation may raise issues of defamation, but liability depends on the exact statement, publication, circumstances and applicable exceptions or defences.",

        remedy:
            "Preserve screenshots, URLs, messages, recordings and information identifying the publisher. Avoid retaliatory statements and obtain legal advice regarding appropriate civil or criminal remedies.",

        previous:
            "Similar defamation disputes commonly rely on the exact statement, evidence of publication, identification of the publisher and evidence of reputational harm."
    },


    /* =====================================================
       20. EDUCATION / COLLEGE
    ===================================================== */

    {
        id: "education",

        keywords: [
            "college problem",
            "university problem",
            "college fee",
            "college admission",
            "exam issue",
            "student complaint",
            "marks problem",
            "degree certificate",
            "college harassment",
            "education dispute"
        ],

        area: "Education / Student Dispute",

        law: "Applicable education regulations, university rules, institutional policies and other laws depending on the issue.",

        section: "The appropriate procedure depends on the institution, university regulations and nature of the complaint.",

        analysis:
            "Student disputes may involve admissions, fees, examinations, certificates, disciplinary proceedings or institutional grievances. The applicable remedy depends on the specific issue and governing rules.",

        remedy:
            "Keep admission records, fee receipts, academic records, notices and communications. Follow the institution's grievance and appeal process and escalate where appropriate.",

        previous:
            "Similar student disputes commonly begin with written representations to the institution and may proceed through university grievance or appeal mechanisms."
    },


    /* =====================================================
       21. BANKING DISPUTE
    ===================================================== */

    {
        id: "banking",

        keywords: [
            "bank complaint",
            "bank account problem",
            "bank not responding",
            "bank blocked account",
            "bank transaction issue",
            "wrong bank transaction",
            "bank deducted money",
            "banking complaint",
            "atm dispute",
            "atm cash not received"
        ],

        area: "Banking / Financial Dispute",

        law: "Applicable banking regulations, contractual terms, payment-system rules and grievance mechanisms.",

        section: "The applicable remedy depends on the type of banking transaction and dispute.",

        analysis:
            "Banking disputes may involve unauthorised transactions, service failures, account restrictions, ATM issues or other financial problems. The appropriate remedy depends on the transaction and evidence.",

        remedy:
            "Keep transaction records, account statements, complaint numbers, screenshots and bank communications. Raise a formal complaint with the bank and use the applicable escalation or grievance mechanism if unresolved.",

        previous:
            "Similar banking disputes commonly involve a formal bank complaint followed by escalation through the applicable banking grievance mechanism when necessary."
    },


    /* =====================================================
       22. GOVERNMENT COMPLAINT / PENDING APPLICATION
    ===================================================== */

    {
        id: "government",

        keywords: [
            "government complaint",
            "government application pending",
            "government office not responding",
            "government service delayed",
            "department not responding",
            "official complaint pending",
            "government grievance",
            "application not processed",
            "government portal complaint"
        ],

        area: "Government Service / Administrative Issue",

        law: "Applicable administrative law, departmental rules and grievance mechanisms depending on the government service or department.",

        section: "The applicable procedure depends on the department, service, application and applicable administrative rules.",

        analysis:
            "Where a government application or complaint remains pending, available remedies depend on the department, service and applicable procedure. Records of the application and previous representations are important.",

        remedy:
            "Keep the application number, acknowledgement, dates, copies of representations and communication records. Follow the department's grievance or escalation mechanism and consider other lawful remedies where appropriate.",

        previous:
            "Similar pending-government-service matters commonly involve preserving acknowledgement records, submitting follow-up representations and using the department's formal grievance or escalation mechanism."
    },


    /* =====================================================
       23. GENERAL CRIMINAL MATTER
    ===================================================== */

    {
        id: "criminal-general",

        keywords: [
            "criminal case",
            "criminal complaint",
            "crime",
            "offence",
            "police case",
            "criminal matter"
        ],

        area: "Criminal Law",

        law: "Bharatiya Nyaya Sanhita, 2023 (BNS), Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) and other applicable criminal laws.",

        section: "The applicable provision depends on the specific offence, facts, evidence and circumstances.",

        analysis:
            "Criminal liability depends on the exact conduct, intention, circumstances, evidence and applicable law. The same incident may involve more than one offence.",

        remedy:
            "Preserve relevant evidence, identify witnesses, keep documents and communications, and report the matter to the appropriate authority where appropriate. For serious offences, consult a qualified legal professional.",

        previous:
            "Similar criminal matters generally depend on the exact facts, available evidence, police investigation and applicable statutory provisions."
    }

];


/* =========================================================
   TEXT NORMALIZATION
========================================================= */

function normalizeLegalText(text) {

    return String(text || "")
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]/gu, " ")
        .replace(/\s+/g, " ")
        .trim();
}


/* =========================================================
   WORD MATCHING
========================================================= */

function keywordMatches(question, keyword) {

    const q = normalizeLegalText(question);
    const k = normalizeLegalText(keyword);

    if (!q || !k) return false;

    return q.includes(k);
}


/* =========================================================
   SMART ANALYSIS
========================================================= */

function analyzeLegalQuestion(question) {

    const normalizedQuestion =
        normalizeLegalText(question);

    let bestMatch = null;
    let bestScore = 0;

    LEGAL_DATABASE.forEach(entry => {

        let score = 0;

        entry.keywords.forEach(keyword => {

            if (keywordMatches(normalizedQuestion, keyword)) {

                /*
                 * Longer / more specific phrases
                 * receive higher scores.
                 */

                const words =
                    normalizeLegalText(keyword)
                        .split(" ")
                        .length;

                score += words * 10;

                /*
                 * Exact phrase gets an additional bonus.
                 */

                if (
                    normalizedQuestion.includes(
                        normalizeLegalText(keyword)
                    )
                ) {
                    score += 15;
                }
            }

        });


        if (score > bestScore) {

            bestScore = score;
            bestMatch = entry;

        }

    });


    /* =====================================================
       CONFIDENCE
    ===================================================== */

    let confidence = "Low";

    if (bestScore >= 60) {

        confidence = "High";

    } else if (bestScore >= 30) {

        confidence = "Medium";

    }


    /* =====================================================
       FALLBACK
    ===================================================== */

    if (!bestMatch) {

        return {

            area: "Legal Issue — Further Facts Required",

            law:
                "The applicable Indian law cannot be reliably identified from the information provided.",

            section:
                "Additional facts are required to determine the relevant legal provision.",

            analysis:
                "The question does not contain enough specific information to safely identify a particular legal category. Different facts can lead to completely different legal provisions and remedies.",

            remedy:
                "Please provide what happened, when it happened, who was involved, the location, relevant documents or evidence, and what action has already been taken. For case-specific advice, consult a qualified legal professional.",

            previous:
                "No sufficiently similar situation could be identified from the available legal database.",

            confidence: "Low"

        };

    }


    return {

        area: bestMatch.area,

        law: bestMatch.law,

        section: bestMatch.section,

        analysis: bestMatch.analysis,

        remedy: bestMatch.remedy,

        previous: bestMatch.previous,

        confidence

    };

}


/* =========================================================
   EXPORT FOR ASK.JS
========================================================= */

if (typeof window !== "undefined") {

    window.LEGAL_DATABASE = LEGAL_DATABASE;
    window.analyzeLegalQuestion = analyzeLegalQuestion;
}