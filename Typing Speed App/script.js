var timerElement = document.getElementById("time");
var errorElement = document.getElementById("error");
var accuracyElement = document.getElementById("accuracy");
var buttonElement = document.getElementById("startButton");
var inputDiv = document.getElementById("thirdDiv");
var createInput = document.createElement("input");
var createDiv = document.createElement("div");
var getFirstDiv = document.getElementById("firstDiv");
var wpm = document.querySelector("#wpm");
var lpm = document.querySelector("#lpm");
var restartElement = document.querySelector("#restartButton");

var time = 10; 
var max = 9, min = 0;
var randomNumber1 = Math.random();
var randomNumber2 = Math.floor(randomNumber1*(max - min) + min);
var compareNum = 0;

const arraySentence = [
    "The soft old lady elegantly killed because some old lady proudly died",
    "The lovely duck passionately ran because some plastic quickly dodged",
    "The lazy boy precisely breathed because some clock elegantly ran",
    "The hot boy proudly dodged because some professor shockingly breathed",
    "The beautiful duck quickly kicked because some bird slowly kicked down ",
    "Lazy hamster which, became a dumb, beautiful old lady",
    "A slimy bird which, became a rough, lovely hamster.",
    "A rough bird calmly flew because some teacher humbly rolled",
    "some bird slowly kicked down a dumb hamster which became a hot duck",
    "S rough plastic which, became a rough, vibrating bird.",
];

var stringValue = arraySentence[randomNumber2];
var inputValue;


var buttonListener = buttonElement.addEventListener("click", ()=>{
    buttonElement.innerText = stringValue;
    inputDiv.appendChild(createInput).setAttribute('id', "inputEle");
    inputDiv.appendChild(createInput).setAttribute('oninput', "mainFunction()");

    var myInterval = setInterval( ()=>{
        if(time>1){
            timerElement.innerHTML = `${time}  S`;
            time = time - 1;
        }
        else if(time=1){
            time = time - 1;
            timerElement.innerHTML = `${time}  S`;
            wpm.style.display = "inline";
            lpm.style.display = "inline";
            restartElement.style.display ="inline-block";
            clearInterval(myInterval);
        }
        
    }, 1000);




}, {once : true});

function mainFunction(){
    if(time!=0){
        var inputElement = document.getElementById("inputEle");
        inputValue = inputElement.value;
        var compareNum = 0;
        var spaceCount = 0;
    
        for(let i=0; i<inputValue.length; i++){
            if(inputValue.charAt(i) !== stringValue.charAt(i)){
                compareNum++;
            }
            else if(inputValue.charAt(i)===" "){
                spaceCount++;
            }
        }
        errorElement.innerText = compareNum;
        accuracyElement.innerText = (100 - ((compareNum/stringValue.length)*100)).toFixed(2);
        lpmCount.innerText = inputValue.length;
        wpmCount.innerText = spaceCount + 1;
    }

    else{
        window.alert("Time's up!")
    }
}

function restartButton(){
    time = 10;
    compareNum = 0;
    spaceCount = 0;
    wpm.style.display = "none";
    lpm.style.display = "none";
    restartElement.style.display ="none";
    window.location = window.location;
}