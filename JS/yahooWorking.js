var brushBtn = document.getElementById("brushBtn");
var brushImg = document.getElementById("brushImg");
var changeBrushBtn = document.getElementById("brushChangeBtn");
var imgPaths = [ ["100","200","300"],["400","500","600"],["700","800","900"]];
 
var brushTech = 0;
var brushStep = 0;
var theValue = 1;

function doStep ()
{
    brushStep = brushStep + theValue;
    if(brushStep==3 || brushStep==-1)
        {
            theValue = theValue * (-1);
            brushStep = brushStep + 2*theValue;
        }
}

function brushClick()
{
    var unuAcum = brushTech, altuAcum = brushStep;
    doStep();
    brushImg.src=imgPaths[brushTech][brushStep];
}

function changeSide()
{
    brushTech = brushTech +1 ;
    brushTech = brushTech % 3;
}

function changeClick()
{
    changeSide();
    brushStep=0;
    brushImg.src=imgPaths[brushTech][brushStep];
}

/* END BRUSH */

/* Start FARM*/
var puiPlus;
var puiMinus;
var tarcPui;
var fermaPui;

var datePui = ["puiDeDinte","50px","../Poze/shiny_thooth.png"];

function addPui (){
    var newImg = document.createElement("img");
    newImg.style.height=datePui[1];
    newImg.src=datePui[2];
    
    var newButt = document.createElement("button");
    newButt.className = datePui[0];
    
    newButt.appendChild(newImg);
    
    if(fermaPui.length % 7 == 0) tarcPui.appendChild(document.createElement("br"));
    
    tarcPui.appendChild(newButt);
    fermaPui = document.getElementsByClassName(datePui[0]);
}

/* SAY HELLO */




window.onload = function(){

for(var i=1;i<=3;i++)
        for(var j=1;j<=3;j++)
            imgPaths[i-1][j-1]="../Poze/Brush/mode"+i+"_"+j+".png";
    
    brushBtn = document.getElementById("brushBtn");
    brushImg = document.getElementById("brushImg");
    changeBrushBtn = document.getElementById("brushChangeBtn");
    
    brushBtn.onclick=brushClick;
    changeBrushBtn.onclick=changeClick;
    
/* VAMA */
    
    puiPlus =   document.getElementById("puiPlus");
    puiMinus=document.getElementById("puiMinus");
    tarcPui=document.getElementById("tarcPui");
    fermaPui=document.getElementsByClassName("puiDeDinte");
    
    puiPlus.onclick = addPui;
    puiMinus.onclick = function(){
        tarcPui.removeChild(tarcPui.childNodes[fermaPui.length-1]);}
    
/* ALTA VAMA */
    
    var helloField = document.getElementById("helloField");
    var helloBtn = document.getElementById("helloBtn");
    
    helloBtn.onclick = function (){
        alert(helloField.value);
    }
    
}


