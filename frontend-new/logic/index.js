import axios from 'axios';

console.log('tie is working!');

// username, email, password, confirmPassword
const usernameBox = document.getElementById('userName');
const emailBox = document.getElementById('UserEmail');
const passwordBox = document.getElementById('UserPassword');
const confirmPasswordBox = document.getElementById('UserConfirmPassword');

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click',async function (e) {
    e.preventDefault();
    const email = emailBox.value; //
    const password = passwordBox.value;
    const confirmPassword = confirmPasswordBox.value;
    const username = usernameBox.value;

    console.log({ email, password, confirmPassword, username });
    console.log('submit button clicked');

    // await fetch('http://localhost:8080/register', {
    //     method: 'POST', // Specify the request method
    //     headers: {
    //         'Content-Type': 'application/json', // Specify the content type as JSON
    //         'Access-Control-Allow-Origin': '*'
    //     },
    //     body: JSON.stringify({
    //         name: username, email, password
    //     }),
    //     mode: 'no-cors'
    // });

    await axios.post('http://localhost:8080/register', {
        name: username, email, password
    });

    console.log("user registered successfully!")
});
