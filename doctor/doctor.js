document.getElementById('add-doctor-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = {
        DoctorName: document.getElementById('doctor-name').value,
        Email: document.getElementById('doctor-email').value,
        Password: document.getElementById('doctor-password').value,
        Contact: document.getElementById('doctor-contact').value,
        Gender: document.getElementById('doctor-gender').value,
        Speciality: document.getElementById('doctor-speciality').value,
        Fees: document.getElementById('doctor-fees').value
    };

    const CreatedAt = new Date().toDateString();
    let table = document.getElementById('doctors-table');

    // Check if the doctor already exists in the table based on the email
    let isDoctorExist = false;
    for (let i = 1; i < table.rows.length; i++) {
        let rowEmail = table.rows[i].cells[1].innerText; // Email is in the second column (index 1)
        if (rowEmail === data.Email) {
            isDoctorExist = true;
            break;
        }
    }

    if (isDoctorExist) {
        alert('Doctor with this email already exists in the table.');
        return; // Exit if doctor already exists
    }

    // Insert the new row since doctor does not exist
    let newRow = table.insertRow(1); // Insert at the second row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);
    let cell8 = newRow.insertCell(7);

    cell1.innerHTML = data.DoctorName;
    cell2.innerHTML = data.Email;
    cell3.innerHTML = data.Password;
    cell4.innerHTML = data.Contact;
    cell5.innerHTML = data.Gender;
    cell6.innerHTML = data.Speciality;
    cell7.innerHTML = data.Fees;
    cell8.innerHTML = CreatedAt;

    const URL = 'http://localhost:3000/api/medplus/admin/home/addDoctor';

    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log('Success:', result);
        alert(result.message);
    } catch (error) {
        console.error('Error:', error);
    }
});
