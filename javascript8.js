const form = document.querySelector('.form-container');
        const registerButton = document.querySelector('.register-button');
        const errorMessageElements = document.querySelectorAll('.error-message');

        registerButton.addEventListener('click', function(event) {
            event.preventDefault();

            // Reset error messages
            errorMessageElements.forEach(function(errorMessage) {
                errorMessage.textContent = 'POOR';
            });

            // Validate form inputs
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const rePassword = document.getElementById('rePassword').value.trim();
            const declaration = document.getElementById('declaration').checked;

            if (firstName === '') {
                document.getElementById('firstNameError').textContent = 'POOR';
            }

            if (lastName === '') {
                document.getElementById('lastNameError').textContent = 'POOR';
            }

            if (email === '') {
                document.getElementById('emailError').textContent = 'POOR';
            } else if (!isValidEmail(email)) {
                document.getElementById('emailError').textContent = 'POOR';
            }

            if (password === '') {
                document.getElementById('passwordError').textContent = 'POOR';
            }

            if (rePassword === '' || rePassword !== password) {
                document.getElementById('rePasswordError').textContent = 'POOR';
            }
        });

        function isValidEmail(email) {
            // Basic email validation, you can use a more sophisticated regex if needed
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }