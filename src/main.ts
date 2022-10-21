import anchor from "markdown-it-anchor";

var md: markdownit = require('markdown-it')({html:true})
            .use(require('markdown-it-multimd-table'))
            .use(require("markdown-it-abbr"))
            .use(require("markdown-it-anchor"),{permalink: anchor.permalink})
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
const queryString = window.location.search;




async function getMarkDownDocument() { //Most compact way to return a fetch
    const url = "https://srv.daytheipc.com/" + atob(queryString.replace("?p=",""))
    const response = await fetch(url, {mode:"cors",method:"GET",cache:'reload',
    headers: {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Cretendials': 'true'
      },referrerPolicy: "unsafe-url" 
    }); 
    const markdownfile = await response.blob();
    console.log("oi");
    
    return markdownfile; //do here wathever with your json if you want to return
}				//a specific part of it.

getMarkDownDocument().then(async resp => {
    const content = await resp.text()
    document.getElementsByClassName("md")[0].innerHTML = md.render(content);
});
