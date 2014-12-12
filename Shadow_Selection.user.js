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
// Change the "text-shadow" property to change the Shadow Position and color. Syntax is give below.
// text-shadow: <X-position>px <Y-position>px <Shadow-Depth>px <color-hex-code>
// #352E7E (Blue Color) is used as default Shadow Selection color.
// Use #328DFB to make it a light blue color.
// Use #EA4200 (Ubuntu's orange color) for Ubuntu's firefox. 

//For Firefox (Gecko) Browser
    style.innerHTML = "::-moz-selection { color: #000; background: none repeat scroll 100% 0% transparent;text-shadow: 0px 0px 2px #3356C6;}";
//For Chrome (Blink) Browser
    style.innerHTML +=" ::selection { color: #000; background: none repeat scroll 0% 0% transparent;text-shadow: 0px 0px 2px #352E7E;}  input::selection { color: #328DFB; background: none repeat scroll 0% 0% transparent;} a::selection { color: #000; background: none repeat scroll 0% 0% transparent;text-shadow: 2px 0px 2px #352E7E;}";
//For WebKit Browser
    style.innerHTML +=" ::-webkit-selection { color: #000; background: none repeat scroll 0% 0% transparent;text-shadow: 0px 0px 2px #352E7E;}";
//For Other Browsers
    style.innerHTML +=" ::-ms-selection { color: #000; background: none repeat scroll 0% 0% transparent;text-shadow: 0px 0px 2px #352E7E;}";
    style.innerHTML +=" ::-o-selection { color: #000; background: none repeat scroll 0% 0% transparent;text-shadow: 0px 0px 2px #352E7E;}";

document.body.appendChild(style); 
