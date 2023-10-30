const loginPoint = "http://panganku.kakashispiritnews.my.id/get-token/";


document.getElementById('loginButton').addEventListener('click', () => {
    const username = 'rahman'; // Retrieve the username input value
    const password = 'rahman'; // Retrieve the password input value

    // Data to be sent to the API
    const loginData = {
        username: username,
        password: password
    };

    // URL endpoint for login // Replace with your actual API login endpoint

    // Perform a POST request to the API
    fetch(loginPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to login');
            }
            return response.json();
        })
        .then(data => {
            const token = data.token; // Assuming the token is returned in the response
            // Check if the token exists and save it to local storage
            console.log(token);
            if (token) {
                localStorage.setItem('token', token);
                console.log('Login successful. Token saved in local storage.');
            } else {
                console.error('Token not received in the response.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});


//   made me code when button clicked, do request to API and  check if the username and password is correct
//   if correct, save the token to local storage