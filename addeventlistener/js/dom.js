//onclick function
function makeRed(){
    document.body.style.backgroundColor = "red";
}


//onclick by calling Id
const greenButton = document.getElementById('make-green');
greenButton.onclick = makeGreen;
function makeGreen(){
    document.body.style.backgroundColor = 'Green';
}

// handle by anonymous function
const makeBlue = document.getElementById("make-blue");
//anonymous function
makeBlue.onclick = function(){
    document.body.style.backgroundColor = 'blue';
}

//handdle by addeventlistener
const makeGolden = document.getElementById('make-Goldenrod');
makeGolden .addEventListener('click', changeGolden);
function changeGolden(){
    document.body.style.backgroundColor = 'goldenrod';
}


//handdle addeventlistener using derectly function
const hotPink = document.getElementById('make-Hotpink');
hotPink.addEventListener('click', function(){
    document.body.style.backgroundColor = 'hotpink';
})


//addeventlistener derectly
document.getElementById('make-lightblue').addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightblue';
})


//styling a div by javascript
const addEvent = document.getElementById("adding-event");
addEvent.style.width = '500px';
addEvent.style.height = '500px';
addEvent.style.backgroundColor = 'rgb(19 2 2 / 6%)';
addEvent.style.margin = '50px auto';
addEvent.style.padding = '100px';


// adding text by addeventlistener directly with update
document.getElementById('update-text').addEventListener('click', function(){
    const inputUpdate = document.getElementById('update');
    const p = document.getElementById('clicking-mathod');
    p.innerText = inputUpdate.value;//input value nite hobe
    inputUpdate.value = ''; 
})
//adding text by addeventlistener with function
function pushText(){
    const p = document.getElementById('clicking-mathod');
    p.innerText = 'Set by function';
}
//adding text by addeventlistener directly
document.getElementById('add-directly').addEventListener('click', function(){
    const p = document.getElementById('clicking-mathod');
    p.innerText = 'set up by directly function';
})




