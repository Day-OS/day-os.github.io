var md: markdownit = require('markdown-it')()
            .use(require('markdown-it-multimd-table'))
            .use(require("markdown-it-abbr"))
            .use(require("markdown-it-anchor"))
            .use(require("markdown-it-attrs"))
            .use(require("markdown-it-checkbox"))
            .use(require("markdown-it-container"))
            .use(require("markdown-it-deflist"))
            .use(require("markdown-it-footnote"))
            .use(require("markdown-it-html5-embed"))
            .use(require("markdown-it-kbd"))
            .use(require("markdown-it-mark"))
            .use(require("markdown-it-sub"))
            .use(require("markdown-it-sup"))
            .use(require("markdown-it-table-of-contents"))
            .use(require("markdown-it-toc"))
            .use(require("markdown-it-underline"))
//document.getElementsByTagName("body")[0].innerHTML = md.render("# {color: red} Oi {color}");
console.log("a");



async function getMarkDownDocument() { //Most compact way to return a fetch
    const url = "http://srv.daytheipc.com/HeliClt.md"
    const response = await fetch(url, {mode:"cors",
    headers: {
        'Access-Control-Allow-Origin':'*'
      }
    }); 
    const json = await response.text();
    return json; //do here wathever with your json if you want to return
}				//a specific part of it.

getMarkDownDocument().then(resp => {
    console.log(resp); //Here you get the function response and print it
});