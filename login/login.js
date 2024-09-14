document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const URl = 'http://localhost:3000/api/medplus/admin/login'
    
    const response = await fetch(URl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const result = await response.json();

    if (response.status === 200) {
        alert(result.message);
        window.location.replace('../dashboard/dashboard.html')
    } else {
        alert(result.message);
    }
});