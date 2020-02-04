var buttonNext = document.getElementsByClassName("buttonNext")[0];
var buttonFarther = document.getElementsByClassName("buttonFarther")[0];
var image = document.getElementsByClassName("image");
var viewElement = document.getElementsByClassName("viewElement")[0];
var area = document.getElementsByClassName("area​Visibility")[0];
var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var radio3 = document.getElementById("radio3");

var settingElement = 450;
var firstSetting = settingElement - 450;
var secondSetting = settingElement;
var thirdSetting = settingElement + 450;

function testElement(settingElement){
    if(settingElement === firstSetting){
        firstButtonChange()
    }
    if(settingElement === secondSetting){
        secondButtonChange()
    }
    if(settingElement === thirdSetting){
        thirdButtonChange()
    }
}

function elementShift(image,settingElement){
    for(let i = 0; i < image.length; i++)
    {   
        image[i].style.right = settingElement + "px";
    }
}

function firstButtonChange(){
    radio1.checked = true;
    radio2.checked = false;
    radio3.checked = false;
}

function secondButtonChange(){
    radio1.checked = false;
    radio2.checked = true;
    radio3.checked = false;
}

function thirdButtonChange(){
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = true;
}

secondButtonChange();

buttonNext.addEventListener('click', () =>{
    if(settingElement < 900){
        settingElement+=450;
        elementShift(image,settingElement);
    } else {
        settingElement =  0 ;
        elementShift(image,settingElement);    
    }

    testElement(settingElement);
},false);

buttonFarther.addEventListener('click',()=>{
    if(settingElement > 0 ){
        settingElement -= 450;

        elementShift(image,settingElement);
    } else {
        settingElement = 900;

       elementShift(image,settingElement);
    }
    testElement(settingElement);
}, false);

radio1.addEventListener('click',() =>{
    firstButtonChange()
    settingElement = 0;
    elementShift(image,settingElement);
},false);

radio2.addEventListener('click',() =>{
    secondButtonChange()
    settingElement = 450;
    elementShift(image,settingElement);
},false);

radio3.addEventListener('click',() =>{
    thirdButtonChange()
    settingElement = 900;
    elementShift(image,settingElement);
},false);