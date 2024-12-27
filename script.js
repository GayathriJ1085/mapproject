// Login functionality
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Predefined credentials
    const correctUsername = "gayathri";
    const correctPassword = "password";

    const message = document.getElementById('message');
    const loginContainer = document.querySelector('.login-container');
    const successPage = document.getElementById('successPage');
    const searchContainer = document.querySelector('.search-container');

    if (username === correctUsername && password === correctPassword) {
        // Hide login form and show success page
        loginContainer.classList.add('hidden');
        successPage.classList.remove('hidden');

        // Enable the search functionality
        searchContainer.classList.remove('disabled');
    } else {
        // Display warning message
        message.textContent = "Invalid username or password!";
    }
});

// Faculty Search Feature
const facultyList = [
    "Dr. John Mathew",
    "Dr. Priya Sharma",
    "Prof. David Raj",
    "Dr. Susan Philip",
    "Prof. Michael Kumar"
];

document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('facultySearch').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Filter and display results
    const results = facultyList.filter(faculty => faculty.toLowerCase().includes(query));

    if (results.length > 0) {
        results.forEach(faculty => {
            const listItem = document.createElement('li');
            listItem.textContent = faculty;
            resultsContainer.appendChild(listItem);
        });
    } else {
        resultsContainer.innerHTML = '<li>No matching faculty found.</li>';
    }
});
