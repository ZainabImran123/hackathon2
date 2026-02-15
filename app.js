document.addEventListener('DOMContentLoaded', () => {

    // Toggle Logic
    const studentRadio = document.getElementById('student');
    const adminRadio = document.getElementById('admin');
    const studentLabel = document.querySelector('label[for="student"]');
    const adminLabel = document.querySelector('label[for="admin"]');

    function updateToggle() {
        // Reset both
        studentLabel.classList.remove('active-role', 'shadow-sm');
        adminLabel.classList.remove('active-role', 'shadow-sm');

        // Apply to checked
        if (studentRadio.checked) {
            studentLabel.classList.add('active-role', 'shadow-sm');
        } else {
            adminLabel.classList.add('active-role', 'shadow-sm');
        }
    }

    studentRadio.addEventListener('change', updateToggle);
    adminRadio.addEventListener('change', updateToggle);

    // Form Submit
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const role = studentRadio.checked ? "Student" : "Admin";
            alert(`Login attempt as ${role}`);
        });
    }

});
