const myImage = document.querySelector('img');

myImage.onclick = () => {
	const mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/My test image.jpg') {
		myImage.setAttribute('src', 'images/2023Z.jpg');
	}
	else {
		myImage.setAttribute('src', 'images/My test image.jpg')
	}
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
	const myName = prompt('Please enter your name');
	if (!myName) {
		setUserName()
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = `Nissans are cool! ${myName}`;
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	const storedName = localStorage.getItem('name');
	myHeading.textContent = `Nissans are cool! ${storedName}`
}

myButton.onclick = () => {
	setUserName();
}