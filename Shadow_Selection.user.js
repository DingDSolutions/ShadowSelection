// ==UserScript==
// @name        Shadow Selection
// @namespace   Anveshak
// @description Use this script to change your Browser's boring text selection color to a "Shadow based selection style"
// @include     *
// @version     1
// @copyright	 2014, Anveshak
// @supportURL  https://github.com/niwinnm/ShadowSelection/issues
// @homepageURL https://github.com/niwinnm/ShadowSelection
// @icon    http://imageshack.com/a/img910/9717/tlnJGD.png
// @oujs:author Anveshak
// @grant       none
// ==/UserScript==
 var style=document.createElement("style");
// edit the text-shadow property to change the Selection color and Shadow radius
// #328DFB is used as default Shadow Selection style.
// Use #F07746 for Ubuntu's firefox selection style. 

    style.innerHTML ="/*Firefox Browser*/ ::-moz-selection { color: #000; background: none repeat scroll 100% 0% transparent;text-shadow: 2px 0px 2px #328DFB;}";
    style.innerHTML +="/* WebKit/Blink Browsers */ ::selection { color: #000; background: none repeat scroll 0% 0% transparent;text-shadow: 2px 0px 2px #328DFB;}";
    
document.body.appendChild(style); 
