// ==UserScript==
// @name        Shadow Selection
// @namespace   Anveshak
// @description Use this script to change your Browser's boring text selection color to a "Shadow based selection style"
// @include     *
// @version     1
// @grant       none
// ==/UserScript==
 var style=document.createElement("style");
// edit the text-shadow property to change the Selection color and Shadow radius
    style.innerHTML ="/*Firefox Browser*/ ::-moz-selection { color: #16A; background: none repeat scroll 0% 0% transparent;text-shadow: 2px 0px 2px #000;}";
    style.innerHTML +="/* WebKit/Blink Browsers */ ::selection { color: #16A; background: none repeat scroll 0% 0% transparent;text-shadow: 2px 0px 2px #000;}";
    
document.body.appendChild(style); 
