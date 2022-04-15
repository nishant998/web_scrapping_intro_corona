const request = require("request") ;
const cheerio = require("cheerio") ;
console.log("before") ;
request('https://www.worldometers.info/coronavirus',(error , response , html)=>{
    if(error){
        console.error("error : ",error) ;
    }else{
        handleHtml(html) ;
    }
})
function handleHtml(html){
    let selTool = cheerio.load(html) ;
    let content_array = selTool("#maincounter-wrap span") ;
    let total = selTool(content_array[0]).text() ;
    let death = selTool(content_array[1]).text() ;
    let recovery = selTool(content_array[2]).text() ;
    console.log("total cases : ",total);
    console.log("total death : ",death);
    console.log("total recovered : ",recovery);
}