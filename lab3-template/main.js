
"use strict";

const $ = selector => document.querySelector(selector);

/**
 * Show content
 * @param {*} _id 
 * @param {*} value - show or hide string 
 */
const showContent = (_id, value) => {
    let x = $(_id);
    if (value === "show") {
        x.style.display = "block";
    } else if (value === "hide") {
        x.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {    
    $("#about-me").addEventListener("click", (e) => {        
        console.log("test");
        showContent("#about-me-content", "show");
        showContent("#contact-us-content", "hide");
    });
    $("#contact-us").addEventListener("click", (e) => {        
        console.log("test");
        showContent("#about-me-content", "hide");
        showContent("#contact-us-content", "show");
    });
    showContent("#about-me-content", "hide");
    showContent("#contact-us-content", "hide");
});