function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r);var n=r("8zd4h"),d=r("3qFPV");const f=document.querySelector(".feedback-form"),l=document.querySelector('[name="email"]'),c=document.querySelector('[name="message"]'),u={};(0,d.load)("feedback-form-state")&&(l.value=(0,d.load)("feedback-form-state").email,c.value=(0,d.load)("feedback-form-state").message),f.addEventListener("input",e(n)((function(e){new FormData(f).forEach(((e,t)=>{u[t]=e,(0,d.save)("feedback-form-state",u)}))}),500)),f.addEventListener("submit",(function(e){e.preventDefault(),(0,d.load)("feedback-form-state")&&console.log((0,d.load)("feedback-form-state"));localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.05c62ee2.js.map