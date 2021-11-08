// console.dir(document);
// console.log(typeof(document));
// document.title = "hi DOM";
// console.log(document.all);
// for(let element of document.all){
//     console.log(element);
// }


// 1.Method=> GET ELEMENT BY ID
// let headerElement = document.getElementById("header");

// console.log(heardElement.textContent);/
//# HTML jeta lekhe thakbe shubo shu setai dekhabe.
// console.log(headerElement.innerText); 
//# Website lekha ta jemon thakbe ai jaga tyo sei vabe show korbe 
// console.log(headerElement.innerHTML);
//# HTML code ta ke text akare show kore
// headerElement.style.fontSize = '15px';
//# Aita diy Website ar style change kora jay


// 2.Method=> GET ELEMENT BY CLASS

//# aita diy joto gulo intem ace shob ghulor color change kore dibe.
// let items = document.getElementsByClassName('item');
// for(let i = 0; i<items.length; i++) {
//     items[i].style.color = 'red';
// }

//# ai jagay GET ELEMENT BY jinis ta sudu document ar upor nir vor kroe na. ai code tay sudu UL ar vitor items ar color cnahge korbe.
// let itemUL = document.getElementById('items');
// let items = itemUL.getElementsByClassName('item');
// for(i=0; i<items.length; i++){
//     items[i].style.color = 'red';
// }

// 3.Method=> GET ELEMENT BY TAGNAME
//# tag name diy jekono proker tag ber kora jabe
// let items = document.getElementsByTagName('h2');
// console.log(items);

// 4.Method=> QUERY SELECTOR
//# query selector ar madhome amra jquary ar kaj ta shohoje kore felte pari. query diy amra kono kisu select kore seta ke modify korty pari. ID jonno '#' ar class ar jonno '.' use kora hoy
// let newTask = document.querySelector('#new-task');
// console.log(newTask);

//# querySelector diy sudu je ta select kora hobe sudu seta k niy kaj korbe. 
// let lastItem = document.querySelector('.item:last-child');
// lastItem.style.color = 'red';

//# querySelectorAll diy shob gulo ke ak saty dhore kaj korbe
// let lastItem = document.querySelectorAll('.item:last-child');
// for(let element of lastItem) {
//     element.style.color = 'red'
// }

// 5.Method=> PARENT/CHILD relation

//# ai vage grandparent ba parent ar under a jodi children thake tahole amra se gulo ke select kore kaj korty parbo.
// const grandparent = document.querySelector('.to-list');
// const parent = grandparent.children;
// const children = parent[1].children;
// console.log(children);

//# ai ta diy amra grandparent teke shora shori children ke select kore kaj korety pari. a khet re parent ar kono help lagbe na.
// const grandparent = document.querySelector('.todo-list');
// const children = document.querySelectorAll('.item');
// console.log(children); 

//# a khetre amra nicy teke uporer dike jabo. mane hosce children teke parent ar dike jabo.
// const children = document.querySelector('.item');
// const parent = children.parentElement;
// console.log(parent); 

//# 'queryselectior' kaj hosce upor teke nicy r dike jay ar 'closest' kaj hosce nicy teke upore jaoa.
// const children = document.querySelector('.item');
// const grandparent = children.closest('.todo-list');
// console.log(grandparent);

//# ai khetre akti parent ar under a duiti childern niy kaj korar jonno and upor teke nicy jabar jonno 'nextElementSibling' use kora hoy
// const childrenOne = document.querySelector('.item');
// const childrenTwo = childrenOne.nextElementSibling;
// childrenTwo.style.color = 'red'; 

//# ai khetry nicy teke upore jabar jonno 'previousElementSibling' use kora hoy.
// const childrenTwo = document.querySelector('.item');
// const childrenOne = childrenTwo.previousElementSibling;
// childrenOne.style.color = 'red';

// 6.Method => CREATING AN ELEMENT
//# akta div element creat. 
const divElement = document.createElement('div');
//# class name add. 
divElement.className = 'red';
//# ID attrebute add. 
divElement.setAttribute('id', 'red');
divElement.setAttribute('title', 'Red Div');

const container = document.querySelector('.todo-list');
// const h2Element = container.querySelector('h2');
//# 'insertBefore' ar kaj holo html ar vitore, kono akta line ar agy notun kono line add kora. '(1st a hobe ki add korty cai, 2nd hobe kar agy add korty cai)'
// container.insertBefore(divElement, h2Element);

//# jodi amra same parent ar ses child ar agy jodi line add korty cai. 
// container.appendChild(divElement);

//# 'appendChild' HTML Element cara kaj korebe na.
// const a = container.appendChild(divElement);
//# 'append' normal text diyo kaj kora jay Exe: 'Hello World'.
// const b = container.append(divElement);

//# 'append' a shob kisu show korbe je koy ta input dya hobe.
// container.append(divElement, document.createElement('p'),'Hello World');
//# 'appendChild' ar khetry sudu 1st a jeta thakbe setai add korbe.
// container.appendChild(divElement,document.createElement('p'), 'hello world');

// 6.Method=> event listeners

//# 'event listeners' ar mane hosce website ar kono kisur upor jodi action ghoty, jokhoni kono action hoy tokhoni akta event dy je ta amra listen korty pari.
// const headerElement = document.querySelector('#header');

// headerElement.addEventListener('click',(event) => {
//     console.log(event);
// })

// const inputElement = document.querySelector('input[type="text"]');
// inputElement.addEventListener('keyup', (event) => {
//     console.log(event);
// })

let newTask = document.querySelector('#new-task');
 let form = document.querySelector('form');
 let todoUl = document.querySelector('#items');
 let completeUl = document.querySelector('.complete-list ul');


// functions
let createTask = function(task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function(event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";
    // bind the new list item to the incomplete list
    bindInCompleteItems(listItem, completeTask);
}

let completeTask = function() {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindInCompleteItems = function(taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}

let bindCompleteItems = function(taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

for(let i=0; i< todoUl.children.length; i++ ) {
    bindInCompleteItems(todoUl.children[i], completeTask);
}

for(let i=0; i< completeUl.children.length; i++ ) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);