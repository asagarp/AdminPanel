async function doctorCount() {
    const URL = 'http://localhost:3000/api/medplus/admin/home/doclist'; 

    try {
        const response = await fetch(URL);
        const result = await response.json();
        console.log(result)
        if (result.success) {
            // Display the total number of users
            document.getElementById('totalDoctor').innerText = result.total;
            console.log("total", result.total)
        } else {
            // If no data is found or API returns error
            document.getElementById('totalDoctor').innerText = 'No users found';
        }
    } catch (error) {
        console.error('Error fetching user count:', error);
        document.getElementById('totalDoctor').innerText = 'Error fetching data';
    }
}

// Fetch user count on page load




async function UserCount() {
    const URL = 'http://localhost:3000/api/medplus/admin/home/userlist'; 

    try {
        const response = await fetch(URL);
        const result = await response.json();

        if (result.success) {
            // Display the total number of users
            document.getElementById('totalPatient').innerText = result.total;
        } else {
            // If no data is found or API returns error
            document.getElementById('totalPatient').innerText = 'No users found';
        }
    } catch (error) {
        console.error('Error fetching user count:', error);
        document.getElementById('totalPatient').innerText = 'Error fetching data';
    }
}

// Fetch user count on page load
window.onload = function(){
    UserCount()
    doctorCount()
}