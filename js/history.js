/* =========================================================
   LEGALGUIDE AI
   HISTORY.JS
   Complete History + Search + Filters + View Analysis
   + Delete + Clear History + PDF
   ========================================================= */

let historyData = [];
let filteredHistory = [];
let selectedCase = null;


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    loadHistory();

    setupSearch();

    setupFilters();

    setupModal();

    setupDeleteModal();

    document
        .getElementById("resetSearchBtn")
        ?.addEventListener("click", resetSearch);

});


/* =========================================================
   LOAD HISTORY
   ========================================================= */

function loadHistory() {

    try {

        historyData =
            JSON.parse(
                localStorage.getItem("legalGuideHistory")
            ) || [];

    } catch (error) {

        console.error(
            "Could not load history:",
            error
        );

        historyData = [];

    }


    filteredHistory = [...historyData];

    updateStatistics();

    renderHistory();

}


/* =========================================================
   UPDATE STATISTICS
   ========================================================= */

function updateStatistics() {

    const totalCases =
        document.getElementById("totalCases");

    const totalAreas =
        document.getElementById("totalAreas");

    const latestDate =
        document.getElementById("latestDate");


    if (totalCases) {

        totalCases.textContent =
            historyData.length;

    }


    const areas =
        new Set(
            historyData
                .map(item => item.area)
                .filter(Boolean)
        );


    if (totalAreas) {

        totalAreas.textContent =
            areas.size;

    }


    if (latestDate) {

        if (historyData.length === 0) {

            latestDate.textContent = "—";

        } else {

            const latest =
                historyData[0];

            latestDate.textContent =
                formatDate(
                    latest.date ||
                    latest.timestamp ||
                    latest.createdAt
                );

        }

    }

}


/* =========================================================
   RENDER HISTORY
   ========================================================= */

function renderHistory() {

    const list =
        document.getElementById("historyList");

    const emptyState =
        document.getElementById("emptyState");

    const noResults =
        document.getElementById("noResults");

    const resultCount =
        document.getElementById("resultCount");


    if (!list) return;


    list.innerHTML = "";


    /* -----------------------------------------------------
       NO HISTORY
       ----------------------------------------------------- */

    if (historyData.length === 0) {

        list.style.display = "none";

        if (emptyState) {

            emptyState.style.display = "block";

        }

        if (noResults) {

            noResults.style.display = "none";

        }

        if (resultCount) {

            resultCount.textContent =
                "0 cases";

        }

        return;

    }


    /* -----------------------------------------------------
       HISTORY EXISTS
       ----------------------------------------------------- */

    list.style.display = "grid";


    if (emptyState) {

        emptyState.style.display = "none";

    }


    /* -----------------------------------------------------
       SEARCH / FILTER RESULT
       ----------------------------------------------------- */

    if (filteredHistory.length === 0) {

        list.style.display = "none";

        if (noResults) {

            noResults.style.display = "block";

        }

        if (resultCount) {

            resultCount.textContent =
                "0 cases";

        }

        return;

    }


    if (noResults) {

        noResults.style.display = "none";

    }


    if (resultCount) {

        resultCount.textContent =
            filteredHistory.length === 1
                ? "1 case"
                : `${filteredHistory.length} cases`;

    }


    /* -----------------------------------------------------
       CREATE CARDS
       ----------------------------------------------------- */

    filteredHistory.forEach((item) => {

        const originalIndex =
            historyData.indexOf(item);


        const card =
            document.createElement("article");

        card.className =
            "history-card";


        const area =
            escapeHTML(
                item.area ||
                "Legal Issue"
            );


        const question =
            escapeHTML(
                item.question ||
                "No question recorded."
            );


        const analysis =
            escapeHTML(
                item.analysis ||
                "No analysis available."
            );


        const date =
            escapeHTML(
                formatDate(
                    item.date ||
                    item.timestamp ||
                    item.createdAt
                )
            );


        const confidence =
            escapeHTML(
                item.confidence ||
                "Low"
            );


        card.innerHTML = `

            <div class="history-header">

                <span class="history-area">

                    <i class="fa-solid fa-scale-balanced"></i>

                    ${area}

                </span>


                <span class="history-date">

                    <i class="fa-regular fa-calendar"></i>

                    ${date}

                </span>

            </div>


            <h3>
                ${question}
            </h3>


            <p>
                ${analysis}
            </p>


            <div class="history-card-footer">

                <span class="history-confidence">

                    ${confidence} Confidence

                </span>


                <div class="history-actions">

                    <button
                        type="button"
                        class="view-analysis-btn"
                        data-index="${originalIndex}"
                    >

                        <i class="fa-solid fa-eye"></i>

                        View Analysis

                    </button>


                    <button
                        type="button"
                        class="delete-history-btn"
                        data-index="${originalIndex}"
                    >

                        <i class="fa-solid fa-trash"></i>

                        Delete

                    </button>

                </div>

            </div>

        `;


        list.appendChild(card);

    });


    /* -----------------------------------------------------
       CONNECT BUTTONS
       ----------------------------------------------------- */

    list
        .querySelectorAll(".view-analysis-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.index
                        );

                    openCase(index);

                }
            );

        });


    list
        .querySelectorAll(".delete-history-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.index
                        );

                    deleteHistory(index);

                }
            );

        });

}


/* =========================================================
   OPEN CASE
   ========================================================= */

function openCase(index) {

    const item =
        historyData[index];


    if (!item) {

        console.error(
            "History item not found:",
            index
        );

        return;

    }


    selectedCase = item;


    /* -----------------------------------------------------
       MODAL ELEMENTS
       ----------------------------------------------------- */

    const modal =
        document.getElementById("caseModal");


    if (!modal) {

        alert(
            "Analysis window could not be opened."
        );

        return;

    }


    setText(
        "modalTitle",
        "Case Analysis"
    );


    setText(
        "modalDate",
        formatDate(
            item.date ||
            item.timestamp ||
            item.createdAt
        )
    );


    setText(
        "modalArea",
        item.area ||
        "Not Identified"
    );


    setText(
        "modalConfidence",
        item.confidence
            ? `${item.confidence} Confidence`
            : "Low Confidence"
    );


    setText(
        "modalQuestion",
        item.question ||
        "No question recorded."
    );


    setText(
        "modalLaw",
        item.law ||
        "Not Identified"
    );


    setText(
        "modalSection",
        item.section ||
        "Not Identified"
    );


    setText(
        "modalAnalysis",
        item.analysis ||
        "No analysis available."
    );


    setText(
        "modalRemedy",
        item.remedy ||
        "No remedy available."
    );


    /* -----------------------------------------------------
       SHOW MODAL
       ----------------------------------------------------- */

    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );


    /* -----------------------------------------------------
       IMPORTANT:
       START MODAL AT TOP
       ----------------------------------------------------- */

    const modalContainer =
        modal.querySelector(
            ".modal-container"
        );


    const modalBody =
        modal.querySelector(
            ".modal-body"
        );


    if (modalContainer) {

        modalContainer.scrollTop = 0;

    }


    if (modalBody) {

        modalBody.scrollTop = 0;

    }

}


/* =========================================================
   SET TEXT SAFELY
   ========================================================= */

function setText(id, value) {

    const element =
        document.getElementById(id);


    if (element) {

        element.textContent =
            value;

    }

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeCaseModal() {

    const modal =
        document.getElementById("caseModal");


    if (!modal) return;


    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );


    selectedCase = null;

}


/* =========================================================
   MODAL EVENTS
   ========================================================= */

function setupModal() {

    const closeButton =
        document.getElementById(
            "closeModalBtn"
        );


    const bottomCloseButton =
        document.getElementById(
            "modalCloseBottomBtn"
        );


    const overlay =
        document.querySelector(
            "#caseModal .modal-overlay"
        );


    closeButton?.addEventListener(
        "click",
        closeCaseModal
    );


    bottomCloseButton?.addEventListener(
        "click",
        closeCaseModal
    );


    overlay?.addEventListener(
        "click",
        closeCaseModal
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeCaseModal();

            }

        }
    );


    document
        .getElementById("modalPdfBtn")
        ?.addEventListener(
            "click",
            downloadCasePDF
        );

}


/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {

    const search =
        document.getElementById(
            "historySearch"
        );


    if (!search) return;


    search.addEventListener(
        "input",
        applyFilters
    );

}


/* =========================================================
   FILTERS
   ========================================================= */

function setupFilters() {

    document
        .querySelectorAll(".filter-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(
                            ".filter-btn"
                        )
                        .forEach(btn =>
                            btn.classList.remove(
                                "active"
                            )
                        );


                    button.classList.add(
                        "active"
                    );


                    applyFilters();

                }
            );

        });

}


/* =========================================================
   APPLY SEARCH + FILTER
   ========================================================= */

function applyFilters() {

    const searchInput =
        document.getElementById(
            "historySearch"
        );


    const searchText =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";


    const activeFilter =
        document.querySelector(
            ".filter-btn.active"
        );


    const filter =
        activeFilter
            ? activeFilter.dataset.filter
            : "all";


    filteredHistory =
        historyData.filter(item => {


            /* ------------------------------------------------
               SEARCH
               ------------------------------------------------ */

            const searchableText = [

                item.question,

                item.area,

                item.law,

                item.section,

                item.analysis,

                item.remedy

            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();


            const matchesSearch =
                !searchText ||
                searchableText.includes(
                    searchText
                );


            /* ------------------------------------------------
               FILTER
               ------------------------------------------------ */

            const area =
                (item.area || "")
                    .toLowerCase();


            let matchesFilter = true;


            if (filter !== "all") {

                if (filter === "criminal") {

                    matchesFilter =
                        area.includes("criminal");

                }

                else if (filter === "cyber") {

                    matchesFilter =
                        area.includes("cyber");

                }

                else if (filter === "family") {

                    matchesFilter =
                        area.includes("family") ||
                        area.includes("domestic");

                }

                else if (filter === "employment") {

                    matchesFilter =
                        area.includes("employment") ||
                        area.includes("salary");

                }

                else if (filter === "property") {

                    matchesFilter =
                        area.includes("property") ||
                        area.includes("landlord");

                }

                else if (filter === "civil") {

                    matchesFilter =
                        !area.includes("criminal") &&
                        !area.includes("cyber") &&
                        !area.includes("family") &&
                        !area.includes("employment");

                }

            }


            return (
                matchesSearch &&
                matchesFilter
            );

        });


    renderHistory();

}


/* =========================================================
   RESET SEARCH
   ========================================================= */

function resetSearch() {

    const search =
        document.getElementById(
            "historySearch"
        );


    if (search) {

        search.value = "";

    }


    document
        .querySelectorAll(".filter-btn")
        .forEach(button =>
            button.classList.remove(
                "active"
            )
        );


    document
        .querySelector(
            '.filter-btn[data-filter="all"]'
        )
        ?.classList.add("active");


    filteredHistory =
        [...historyData];


    renderHistory();

}


/* =========================================================
   DELETE ONE CASE
   ========================================================= */

function deleteHistory(index) {

    if (
        index < 0 ||
        index >= historyData.length
    ) {

        return;

    }


    const confirmed =
        confirm(
            "Delete this legal analysis?"
        );


    if (!confirmed) return;


    historyData.splice(
        index,
        1
    );


    localStorage.setItem(
        "legalGuideHistory",
        JSON.stringify(
            historyData
        )
    );


    filteredHistory =
        [...historyData];


    updateStatistics();

    applyFilters();

}


/* =========================================================
   DELETE MODAL SETUP
   ========================================================= */

function setupDeleteModal() {

    const clearButton =
        document.getElementById(
            "clearHistoryBtn"
        );


    const cancelButton =
        document.getElementById(
            "cancelDeleteBtn"
        );


    const confirmButton =
        document.getElementById(
            "confirmDeleteBtn"
        );


    clearButton?.addEventListener(
        "click",
        openDeleteModal
    );


    cancelButton?.addEventListener(
        "click",
        closeDeleteModal
    );


    confirmButton?.addEventListener(
        "click",
        clearAllHistory
    );


    const overlay =
        document.querySelector(
            "#deleteModal .confirm-overlay"
        );


    overlay?.addEventListener(
        "click",
        closeDeleteModal
    );

}


/* =========================================================
   OPEN DELETE MODAL
   ========================================================= */

function openDeleteModal() {

    if (historyData.length === 0) {

        return;

    }


    const modal =
        document.getElementById(
            "deleteModal"
        );


    if (!modal) {

        clearAllHistory();

        return;

    }


    modal.classList.add(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );

}


/* =========================================================
   CLOSE DELETE MODAL
   ========================================================= */

function closeDeleteModal() {

    const modal =
        document.getElementById(
            "deleteModal"
        );


    if (!modal) return;


    modal.classList.remove(
        "active"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =========================================================
   CLEAR ALL HISTORY
   ========================================================= */

function clearAllHistory() {

    localStorage.removeItem(
        "legalGuideHistory"
    );


    historyData = [];

    filteredHistory = [];


    closeDeleteModal();

    updateStatistics();

    renderHistory();

}


/* =========================================================
   PDF FOR SELECTED CASE
   ========================================================= */

function downloadCasePDF() {

    if (!selectedCase) {

        alert(
            "Please open an analysis first."
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
    } = window.jspdf;


    const doc =
        new jsPDF();


    const pageWidth =
        doc.internal.pageSize.getWidth();


    const margin = 20;

    const contentWidth =
        pageWidth -
        margin * 2;


    let y = 20;


    /* -----------------------------------------------------
       HEADER
       ----------------------------------------------------- */

    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.setFontSize(20);


    doc.text(
        "LEGALGUIDE AI",
        margin,
        y
    );


    y += 10;


    doc.setFontSize(14);


    doc.text(
        "Legal Analysis Report",
        margin,
        y
    );


    y += 12;


    doc.setFont(
        "helvetica",
        "normal"
    );


    doc.setFontSize(10);


    doc.text(
        "General legal information and educational guidance.",
        margin,
        y
    );


    y += 12;


    /* -----------------------------------------------------
       DETAILS
       ----------------------------------------------------- */

    addPDFSection(
        "Date",
        formatDate(
            selectedCase.date ||
            selectedCase.timestamp ||
            selectedCase.createdAt
        )
    );


    addPDFSection(
        "Legal Area",
        selectedCase.area ||
        "Not Identified"
    );


    addPDFSection(
        "Confidence",
        selectedCase.confidence
            ? `${selectedCase.confidence} Confidence`
            : "Low Confidence"
    );


    addPDFSection(
        "Your Question",
        selectedCase.question ||
        "Not available"
    );


    addPDFSection(
        "Applicable Law",
        selectedCase.law ||
        "Not Identified"
    );


    addPDFSection(
        "Relevant Section",
        selectedCase.section ||
        "Not Identified"
    );


    addPDFSection(
        "Legal Analysis",
        selectedCase.analysis ||
        "Not available"
    );


    addPDFSection(
        "Suggested Remedy",
        selectedCase.remedy ||
        "Not available"
    );


    /* -----------------------------------------------------
       DISCLAIMER
       ----------------------------------------------------- */

    if (y > 250) {

        doc.addPage();

        y = 20;

    }


    doc.setFontSize(9);

    doc.setFont(
        "helvetica",
        "italic"
    );


    const disclaimer =
        "This report is generated for general informational and educational purposes only. It does not constitute legal advice. Laws and procedures may vary depending on the facts and jurisdiction.";


    const disclaimerLines =
        doc.splitTextToSize(
            disclaimer,
            contentWidth
        );


    doc.text(
        disclaimerLines,
        margin,
        y
    );


    doc.save(
        "LegalGuideAI_Analysis_Report.pdf"
    );


    function addPDFSection(
        title,
        text
    ) {

        if (y > 260) {

            doc.addPage();

            y = 20;

        }


        doc.setFont(
            "helvetica",
            "bold"
        );


        doc.setFontSize(11);


        doc.text(
            title,
            margin,
            y
        );


        y += 6;


        doc.setFont(
            "helvetica",
            "normal"
        );


        doc.setFontSize(10);


        const lines =
            doc.splitTextToSize(
                String(text),
                contentWidth
            );


        doc.text(
            lines,
            margin,
            y
        );


        y +=
            lines.length * 5 +
            8;

    }

}


/* =========================================================
   FORMAT DATE
   ========================================================= */

function formatDate(value) {

    if (!value) {

        return "Unknown date";

    }


    const date =
        new Date(value);


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return String(value);

    }


    return date.toLocaleString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }
    );

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   GLOBAL FUNCTIONS
   ========================================================= */

window.openCase =
    openCase;

window.deleteHistory =
    deleteHistory;

window.clearAllHistory =
    clearAllHistory;

window.closeCaseModal =
    closeCaseModal;


/* =========================================================
   READY
   ========================================================= */

console.log(
    "LegalGuide AI History System loaded successfully."
);