const form = document.getElementById('student-form');
const output = document.getElementById('output');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const name = document.getElementById('name').value;
	const address = document.getElementById('address').value;
	const age = document.getElementById('age').value;
	const gender = document.getElementById('gender').value;
	const dateOfBirth = document.getElementById('date_of_birth').value;
	const phoneNo = document.getElementById('phone_no').value;
	
	document.getElementById('student-name').innerText = `Student name: ${name}`;
	document.getElementById('student-address').innerText = `Student address: ${address}`;
	document.getElementById('student-age').innerText = `Student age: ${age}`;
	document.getElementById('student-gender').innerText = `Student gender: ${gender}`;
	document.getElementById('student-date-of-birth').innerText = `Student date of birth: ${dateOfBirth}`;
	document.getElementById('student-phone-no').innerText = `Student phone_no: ${phoneNo}`;
});