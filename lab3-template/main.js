
"use strict";

const $ = selector => {
    console.log('selector', selector)
    console.log('document.querySelector(selector)', selector)
    return (
        document.querySelector(selector)
    )
};

/**
 * Show content
 * @param {*} _id 
 * @param {*} value - show or hide string 
 */
const showContent = (_id, value) => {
    let x = $(_id);
    if (value === "show") {
        x.style.display = "flex";
    } else if (value === "hide") {
        x.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {   
    console.log('DOMContentLoaded')
    $("#home").addEventListener("click", (e) => {        
        console.log("click on home");
        showContent("#homeContent", "show");
        showContent("#contactUsContent", "hide");
        showContent("#aboutMeContent", "hide");
        showContent("#contactUsConfirmContent", "hide");
    });
    $("#aboutMe").addEventListener("click", (e) => {        
        console.log("click on aboutMe");
        showContent("#homeContent", "hide");
        showContent("#aboutMeContent", "show");
        showContent("#contactUsContent", "hide");
        showContent("#contactUsConfirmContent", "hide");
    });
    $("#contactUs").addEventListener("click", (e) => {        
        console.log("click on contactUs");
        showContent("#homeContent", "hide");
        showContent("#aboutMeContent", "hide");
        showContent("#contactUsContent", "show");
        showContent("#contactUsConfirmContent", "hide");
    });
    $("#submit").addEventListener("click", (e) => {        
        console.log("click on submit");
        showContent("#homeContent", "hide");
        showContent("#aboutMeContent", "hide");
        showContent("#contactUsContent", "hide");
        showContent("#contactUsConfirmContent", "show");
    });
    $("#backHome").addEventListener("click", (e) => {        
        console.log("click on backHome");
        showContent("#homeContent", "show");
        showContent("#aboutMeContent", "hide");
        showContent("#contactUsContent", "hide");
        showContent("#contactUsConfirmContent", "hide");
    });
    showContent("#aboutMeContent", "hide");
    showContent("#contactUsContent", "hide");
    showContent("#contactUsConfirmContent", "hide");
});
