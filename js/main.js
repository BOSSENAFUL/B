/* ===================================
   VPS CyberVault - main.js
=================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("VPS CyberVault Loaded Successfully");

    // ===============================
    // Hero Buttons
    // ===============================

    const heroButtons = document.querySelectorAll(".hero-buttons button");

    heroButtons.forEach(button => {

        button.addEventListener("mouseenter", () => {
            button.style.transform = "translateY(-4px)";
            button.style.boxShadow = "0 0 25px #a020ff";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "translateY(0)";
            button.style.boxShadow = "none";
        });

    });

    // ===============================
    // Feature Cards Hover
    // ===============================

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });

    });

    // ===============================
    // Pricing Plans Hover
    // ===============================

    const plans = document.querySelectorAll(".plan");

    plans.forEach(plan => {

        plan.addEventListener("mouseenter", () => {
            plan.style.transform = "scale(1.05)";
        });

        plan.addEventListener("mouseleave", () => {
            plan.style.transform = "scale(1)";
        });

    });

    // ===============================
    // Scroll Animation
    // ===============================

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.15
    });

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {

        section.style.opacity = "0";
        section.style.transform = "translateY(60px)";
        section.style.transition = "all .8s ease";

        observer.observe(section);

    });

    // ===============================
    // Navbar Shadow on Scroll
    // ===============================

    window.addEventListener("scroll", () => {

        const navbar = document.querySelector(".navbar");

        if (window.scrollY > 40) {

            navbar.style.background = "#0d0d18";
            navbar.style.boxShadow = "0 0 30px rgba(160,32,255,.45)";

        } else {

            navbar.style.background = "#11111b";
            navbar.style.boxShadow = "0 0 35px rgba(170,0,255,.18)";

        }

    });

});
