const div = document.createElement("div");
const body = document.body;
div.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quam delectus sunt magnam voluptatem dolore iste doloribus nulla nam accusamus consequatur,quos dolorem voluptatum quidem aspernatur sit error voluptates animi rem?"
body.append(div);
// -----------Finding html elements------
console.log(document.getElementById("heading"));// return the element with id="heading"
console.log(document.getElementsByClassName("head"));// return the element with class="head",but retruns
// as a array like objects with all elements with the specified class name.
console.log(document.getElementsByTagName("div"));// return the element with tagname="div",but retruns
// as a array like objects with all elements with the specified tag name.

