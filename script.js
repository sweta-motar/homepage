let storedUsername = 'dhiraj';
let storedPassword = '12345';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (username === storedUsername && password === storedPassword) {
        window.location = "navbar.html";
      //  alert('Login successful!');
        // errorMessage.style.display = 'none';
        // window.location.assign('landing.html');
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
    }
});

document.getElementById('signInLink').addEventListener('click', function() {
    document.getElementById('loginContainer').classList.add('hidden');
    document.getElementById('signInContainer').classList.remove('hidden');
});

document.getElementById('forgotPasswordLink').addEventListener('click', function() {
    document.getElementById('loginContainer').classList.add('hidden');
    document.getElementById('forgotPasswordContainer').classList.remove('hidden');
});

document.getElementById('backToLoginFromSignIn').addEventListener('click', function() {
    document.getElementById('signInContainer').classList.add('hidden');
    document.getElementById('loginContainer').classList.remove('hidden');
});

document.getElementById('backToLoginFromForgot').addEventListener('click', function() {
    document.getElementById('forgotPasswordContainer').classList.add('hidden');
    document.getElementById('loginContainer').classList.remove('hidden');
});

document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    
    storedUsername = newUsername;
    storedPassword = newPassword;
    
    alert('Sign In successful! You can now log in with your new credentials.');
    document.getElementById('signInContainer').classList.add('hidden');
    document.getElementById('loginContainer').classList.remove('hidden');
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const resetPassword = document.getElementById('resetPassword').value;
    
    storedPassword = resetPassword;
    
    alert('Password reset successful! You can now log in with your new password.');
    document.getElementById('forgotPasswordContainer').classList.add('hidden');
    document.getElementById('loginContainer').classList.remove('hidden');
});

