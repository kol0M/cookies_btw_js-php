var click = 999;
var click2 = 'click2';

// document.cookie=encodeURIComponent("click");
// console.log(document.cookie);

function setCookie(name, value){
    const opts = {
        path: "/"
}

if (navigator.cookieEnabled) { //czy ciasteczka są włączone
    const cookieName = encodeURIComponent(name);
    const cookieVal = encodeURIComponent(value);
    let cookieText = cookieName + "=" + cookieVal;

    if (opts.days && opts.days === "number") {
        const data = new Date();
        data.setTime(data.getTime() + (opts.days * 24*60*60*1000));
        cookieText += "; expires=" + data.toUTCString();
    }

    if (opts.path) {
        cookieText += "; path=" + opts.path;
    }
    if (opts.domain) {
        cookieText += "; domain=" + opts.domain;
    }
    if (opts.secure) {
        cookieText += "; secure";
    }

    document.cookie = cookieText;
}
}

setCookie("mojeCiasteczko", click);
setCookie("mojeCiasteczko2", click2);

function getCookie(name) {
    if (document.cookie !== "") {
        const cookies = document.cookie.split(/; */);

        for (let cookie of cookies) {
            const [ cookieName, cookieVal ] = cookie.split("=");
            if (cookieName === decodeURIComponent(name)) {
                return decodeURIComponent(cookieVal);
            }
        }
    }

    return undefined;
}
console.log("z JS: " + getCookie("mojeCiasteczko"));
console.log("z JS: " + getCookie("mojeCiasteczko2"));


console.log("z PHP w JS: " + getCookie("phpCiastko"));
console.log("z PHP w JS: " + getCookie("phpCiastko2"));

var x = Number(getCookie("phpCiastko"));
var wynik = x+10;
console.log(wynik);