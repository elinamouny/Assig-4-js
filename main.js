let currentUser = null;

        function showSignUpForm() {
            document.getElementById('loginPage').style.display = 'none';
            document.getElementById('signupPage').style.display = 'block';
        }

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Simulate user authentication (replace this with server-side logic)
            if (authenticateUser(email, password)) {
                currentUser = email;
                showHomePage();
            } else {
                alert('Invalid email or password. Please try again.');
            }
        });

        document.getElementById('signupForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const newEmail = document.getElementById('newEmail').value;
            const newPassword = document.getElementById('newPassword').value;

            // Simulate user registration (replace this with server-side logic)
            if (registerUser(newEmail, newPassword)) {
                alert('Registration successful. You can now log in.');
                showLoginPage();
            } else {
                alert('Email already exists. Please choose another email.');
            }
        });

        function authenticateUser(email, password) {
            // Simulate user authentication logic (replace this with server-side logic)
            return email === 'user@example.com' && password === 'password';
        }

        function registerUser(email, password) {
            // Simulate user registration logic (replace this with server-side logic)
            if (email === 'user@example.com') {
                return false; // Email already exists
            }

            // Store user data (for simplicity, we are not storing data in this example)
            localStorage.setItem(email, password);
            return true;
        }

        function showHomePage() {
            document.getElementById('loginPage').style.display = 'none';
            document.getElementById('signupPage').style.display = 'none';
            document.getElementById('homePage').style.display = 'block';
            document.getElementById('userName').innerText = currentUser;
        }

        function showLoginPage() {
            document.getElementById('loginPage').style.display = 'block';
            document.getElementById('signupPage').style.display = 'none';
            document.getElementById('homePage').style.display = 'none';
        }

        function logout() {
            currentUser = null;
            showLoginPage();
        }