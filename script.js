/**Number generation and their sum */
for(var i=1; i<=4 ; i++){
    var a = Math.floor(Math.random()*10);
    var b = Math.floor(Math.random()*10);
   
    document.getElementById(`q${i}`).innerHTML = `${a} + ${b}`;
    document.getElementById(`ans${i}`).innerHTML = `${a+b}`;
}

/** Shuffle the div elements of answer container*/
$(function(){
    var parent = $('#answer-container');
    var divs = parent.children();
    while(divs.length){
        parent.append(divs.splice(Math.floor(Math.random()*divs.length),1)[0]);
    }
});

/** Drag and Drop Functionality */
function allowDrop(ev) {
    ev.preventDefault();
}

function drag1(ev) {
    ev.dataTransfer.setData("t1", ev.target.id);
}

function drop1(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("t1");
    ev.target.appendChild(document.getElementById(data));
}

function drag2(ev) {
    ev.dataTransfer.setData("t2", ev.target.id);
}

function drop2(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("t2");
    ev.target.appendChild(document.getElementById(data));
}

function drag3(ev) {
    ev.dataTransfer.setData("t3", ev.target.id);
}

function drop3(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("t3");
    ev.target.appendChild(document.getElementById(data));
}

function drag4(ev) {
    ev.dataTransfer.setData("t4", ev.target.id);
}

function drop4(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("t4");
    ev.target.appendChild(document.getElementById(data));
}

/** If all the answers placed correctly */
$(function(){
    var parent = $('#answer-container');
    var divs = parent.children();
    if(divs.length===0){
        document.getElementById('answer-container').innerHTML = "WOW, You are so brilliant!";
    }
})