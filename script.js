window.onload = function() {
    document.getElementById('popup').style.display = 'flex';
};

document.querySelector('.name1').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

document.getElementById('switchToLogin').addEventListener('click', function(event) {
    event.preventDefault();
    showTab('loginForm');
});

document.getElementById('switchToSignup').addEventListener('click', function(event) {
    event.preventDefault();
    showTab('signupForm');
});

document.getElementById('forgotPasswordFormElem').addEventListener('submit', function(event) {
    event.preventDefault(); 
    showTab('loginForm');
});


document.getElementById('backToLogin').addEventListener('click', function(event) {
    event.preventDefault();
    showTab('loginForm');
});

document.getElementById('adminSignupSubmit').addEventListener('click', function(event) {
    event.preventDefault();
    showTab('adminLoginForm');
    alert('Admin signed up successfully! Please log in.');
});

document.getElementById('adminLoginSubmit').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'Insert_Product.html';
});

document.getElementById('signupSubmit').addEventListener('click', function(event) {
    event.preventDefault();
    showTab('loginForm');
    alert('Signed up successfully! Please log in.');
});


document.getElementById('loginSubmit').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'Profile-Section.html';
});
document.getElementById('forgotPasswordLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('forgotPasswordForm').classList.add('active');
});

