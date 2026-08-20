```javascript id="xf9q2l"
// ====================================
// LEGALGUIDE AI - MAIN JAVASCRIPT
// ====================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("LegalGuide AI Loaded Successfully");

    initializeNavbar();
    initializeScrollAnimations();
    initializeCardEffects();
    initializeHeroButton();
    initializeTypingEffect();

});

// ====================================
// NAVBAR SCROLL EFFECT
// ====================================

function initializeNavbar() {

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(9,27,66,0.98)";

            navbar.style.boxShadow =
                "0 5px 20px rgba(0,0,0,0.2)";

        } else {

            navbar.style.background =
                "rgba(13,37,89,0.95)";

            navbar.style.boxShadow =
                "none";
        }
    });
}

// ====================================
// SCROLL ANIMATION
// ====================================

function initializeScrollAnimations() {

    const elements = document.querySelectorAll(
        ".card, .category-card, .ready-section"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0px)";
                }
            });

        },
        {
            threshold: 0.1
        }
    );

    elements.forEach((element) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(40px)";

        element.style.transition =
            "all 0.8s ease";

        observer.observe(element);
    });

}

// ====================================
// CARD HOVER EFFECT
// ====================================

function initializeCardEffects() {

    const cards = document.querySelectorAll(
        ".card, .category-card"
    );

    cards.forEach((card) => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
                "translateY(-12px) scale(1.02)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0px) scale(1)";
        });

    });

}

// ====================================
// HERO BUTTON EFFECT
// ====================================

function initializeHeroButton() {

    const buttons =
        document.querySelectorAll(".hero-btn");

    buttons.forEach((button) => {

        button.addEventListener("mouseenter", () => {

            button.style.transform =
                "translateY(-5px)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform =
                "translateY(0px)";

        });

    });

}

// ====================================
// TYPING EFFECT
// ====================================

function initializeTypingEffect() {

    const heading =
        document.querySelector(".hero h1");

    if (!heading) return;

    const originalText = heading.innerHTML;

    heading.innerHTML = "";

    let i = 0;

    const typing = setInterval(() => {

        heading.innerHTML =
            originalText.slice(0, i);

        i++;

        if (i > originalText.length) {

            clearInterval(typing);
        }

    }, 20);

}

// ====================================
// SMOOTH SCROLL
// ====================================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if(target){

            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        }

    });

});

// ====================================
// LOADING ANIMATION
// ====================================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    document.body.style.transition =
        "opacity 0.8s ease";

    setTimeout(() => {

        document.body.style.opacity = "1";

    }, 100);

});

// ====================================
// FUTURE LEGAL SEARCH
// ====================================

const legalDatabase = {

    "article 14":
        "Article 14 guarantees equality before law.",

    "article 19":
        "Article 19 guarantees freedom of speech and expression.",

    "article 21":
        "Article 21 protects life and personal liberty.",

    "fir":
        "FIR stands for First Information Report.",

    "contract":
        "A contract is a legally enforceable agreement.",

    "consumer":
        "Consumers can file complaints in consumer commissions.",

    "cyber crime":
        "Cyber crimes include hacking, phishing and online fraud."

};

// ====================================
// LEGAL SEARCH FUNCTION
// ====================================

function getLegalAnswer(question) {

    question = question.toLowerCase();

    for (let key in legalDatabase) {

        if (question.includes(key)) {

            return legalDatabase[key];
        }

    }

    return "Sorry, no legal information was found in the current database.";

}

// ====================================
// CONSOLE MESSAGE
// ====================================

console.log(
`
========================================
      LEGALGUIDE AI
========================================
Version : 1.0
Developer : Gayathri Devi
Status : Running Successfully
========================================
`
);
```
