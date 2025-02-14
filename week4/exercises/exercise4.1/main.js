// select empty div and assign to variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");

//put an h1 inside of div
//create new element
const heading = document.createElement('h1');

heading.innerHTML = 'Hello class! Llama llama red pajama is a fun book by Anna Dewdney';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick(){
	console.log('Heading has been clicked');
	document.body.style.backgroundColor = 'orange';
}