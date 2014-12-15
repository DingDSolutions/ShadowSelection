// ==UserScript==
// @name        Shadow Selection
// @namespace   Anveshak
// @description Switch to an Awesome Shadow based text selection style for your browser. Works perfectly with almost all popular browsers. Easily edit the shadow color to any color of your choice.
// @include     *
// @version     2.0.3
// @copyright	 2014, Anveshak
// @supportURL  https://github.com/niwinnm/ShadowSelection/issues
// @homepageURL https://github.com/niwinnm/ShadowSelection
// @icon    http://imageshack.com/a/img910/9717/tlnJGD.png
// @oujs:author Anveshak
// @grant       none
// ==/UserScript==
 var style=document.createElement("style");
// Change the "text-shadow" property to change the Shadow Position and color. Syntax is give below.
// text-shadow: <X-position>px <Y-position>px <Shadow-Depth>px <color-hex-code>.
// #0048FF (Blue Color) is used as default Shadow Selection color.
// Use #352E7E to make it a dark blue color.
// Use #EA4200 (Ubuntu's orange color) for Ubuntu's firefox.

//For Firefox (Gecko) Browser
    style.innerHTML = "::-moz-selection { color: #000; background: none repeat scroll 100% 0% transparent;text-shadow: 0px 0px 2px #0048FF;} a::selection { color: #000; background: none repeat scroll 0% 0% transparent;text-shadow: 2px 2px 2px #0048FF;}";
//For Chrome (Blink) Browser
    style.innerHTML +=" ::selection { color: #000; background: none repeat scroll 0% 0% transparent;text-shadow: 2px 0px 2px #0048FF;}  input::selection { color: #3356C6; background: none repeat scroll 0% 0% transparent;} a::selection { color: #000; background: none repeat scroll 0% 0% transparent;text-shadow: 2px 0px 2px #0048FF;}";
//For WebKit Browser
    style.innerHTML +=" ::-webkit-selection { color: #000; background: none repeat scroll 0% 0% transparent;text-shadow: 0px 0px 2px #0048FF;} a::selection { color: #000; background: none repeat scroll 0% 0% transparent;text-shadow: 2px 2px 2px #0048FF;}";
//For Other Browsers
    style.innerHTML +=" ::-ms-selection { color: #000; background: none repeat scroll 0% 0% transparent;text-shadow: 0px 0px 2px #0048FF;} a::selection { color: #000; background: none repeat scroll 0% 0% transparent;text-shadow: 2px 2px 2px #0048FF;}";
    style.innerHTML +=" ::-o-selection { color: #000; background: none repeat scroll 0% 0% transparent;text-shadow: 0px 0px 2px #0048FF;} a::selection { color: #000; background: none repeat scroll 0% 0% transparent;text-shadow: 2px 2px 2px #0048FF;}";

document.body.appendChild(style); 
