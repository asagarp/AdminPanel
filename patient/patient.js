
async function fetchPatients() {
    const URL = 'http://localhost:3000/api/medplus/admin/home/userlist'; 

    try {
        const response = await fetch(URL);
        const result = await response.json();

        if (result.success) {
            const patients = result.data;
            const tableBody = document.querySelector('#patientTable tbody');

            // Clear any existing rows in the table
            tableBody.innerHTML = '';

            // Loop through the patient data and add rows to the table
            patients.forEach(patient => {
                const row = document.createElement('tr');

                const cellName = document.createElement('td');
                cellName.textContent = patient.name;
                row.appendChild(cellName);

                const cellEmail = document.createElement('td');
                cellEmail.textContent = patient.email;
                row.appendChild(cellEmail);

                const cellGender = document.createElement('td');
                cellGender.textContent = patient.gender;
                row.appendChild(cellGender);

                const cellContact = document.createElement('td');
                cellContact.textContent = patient.contact;
                row.appendChild(cellContact);

                const cellDOB = document.createElement('td');
                cellDOB.textContent = new Date(patient.date_of_birth).toLocaleDateString(); 
                row.appendChild(cellDOB);

                // Append the row to the table body
                tableBody.appendChild(row);
            });
        } else {
            alert('Error fetching patients');
        }
    } catch (error) {
        console.error('Error fetching patients:', error);
        alert('Error fetching patients');
    }
}

// Fetch patients when the page loads
window.onload = fetchPatients;

