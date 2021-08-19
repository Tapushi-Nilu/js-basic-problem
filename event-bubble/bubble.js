//second item clicked
document.getElementById('second-item').addEventListener('click', function(event){
    console.log('second item clicked')
    event.stopPropagation();

})
//ul clicked
document.getElementById('list-container').addEventListener('click', function(event){
    console.log('ul clicked')
    //event.stopPropagation();
})
//section clicked
document.getElementById('section-container').addEventListener('click', function(){
    console.log('section clicked')
})


//remove child
// const items = document.getElementsByClassName('item');
// for(const item of items){
//     item.addEventListener('click', function(){
//         document.getElementById('list-container').removeChild(item);

//     })
// }


//add item
document.getElementById('add-item').addEventListener('click', function(){
    const li = document.createElement('li');

    li.innerText= "new item";
    const parent = document.getElementById('list-container');
    parent.appendChild(li);
})

//remove All items
document.getElementById('list-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})
