let who = ['The dog','My granma','His turtle','My bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

whorandom = Math.floor(Math.random() * who.length);
whatrandom = Math.floor(Math.random() * what.length);
whenrandom = Math.floor(Math.random() * when.length);

var aleat = who[whorandom] + " " + what[whatrandom] + " " + when[whenrandom];

document.querySelector("#excuse").innerHTML = aleat;