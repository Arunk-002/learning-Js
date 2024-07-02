//   DOM Manipulation

const div = document.createElement("div");
const main = document.getElementById("m-div");
div.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quam delectus sunt magnam voluptatem dolore iste doloribus nulla nam accusamus consequatur,quos dolorem voluptatum quidem aspernatur sit error voluptates animi rem?"
main.append(div);

// -----------Finding html elements------
console.log(document.getElementById("heading"));// return the element with id="heading"
console.log(document.getElementsByClassName("head"));// return the element with class="head",but retruns
// as a array like objects with all elements with the specified class name.
console.log(document.getElementsByTagName("div"));// return the element with tagname="div",but retruns
// as a array like objects with all elements with the specified tag name.

// -----------------Changing html elemtents-----------
const aLink = document.createElement("a");
aLink.href="www.w3schools.com"
aLink.target="blank"
aLink.innerHTML="click me";//inserts the given value  to the element's html
main.append(aLink);
console.log(aLink.innerHTML);//gets the value in the element's html
console.log(document.getElementById("heading").attributes);//Returns all the properties of the specified node as a NodeMap.
aLink.style.color="red";//Changes the specified style property of the element. 
main.append(aLink)
//set attribuute
function changeBg(){
    main.setAttribute("class","night")//the setAttribute method creates a new specified attribute if not present, if present updates it.
}
function removeBg(){
    main.removeAttribute("class","night")//the removeAttribute method removes the specified attribute.
}

//-------------------------Adding and Deleting html elements------------------

const p = document.createElement("p");// Creates a new specified element.
p.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, numquam! Sequi tempora eum a architecto minima maxime temporibus laboriosam."
p.style.color="green"
main.append(p)
const cDiv = main.firstElementChild;
main.removeChild(main.firstElementChild)//removes the child elements in the specified way.
console.log(main.firstElementChild)//return the first elementchild of the specified entity
console.log(main.lastElementChild)//return the last elementchild of the specified entity

main.appendChild(cDiv)//adds the specified elements to the node.
// const rChild  = document.createTextNode("HI Hello  how are You")
// cDiv.replaceChild(cDiv,rChild);

console.log(cDiv.innerHTML)
console.log(cDiv.textContent)

// -----------------------------------------------------------------------------
const listItem=document.getElementById("myList");
const liNd=document.createElement("li")
liNd.appendChild(document.createTextNode("Cappucino"));
listItem.appendChild(liNd)
console.log(listItem.removeChild(listItem.children[1]))