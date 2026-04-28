document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('akan-form');
    const display = document.getElementById('result-display');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get and parse date
        const dateInput = document.getElementById('birthdate').value;
        if (!dateInput) return alert("Please select a date.");
        
        const [yyyy, mm, dd] = dateInput.split('-').map(Number);
        const gender = document.getElementById('gender').value;

        // Display result
        display.textContent = `Your Akan name is: ${getAkanName(dd, mm, yyyy, gender)}`;
    });
});

function getAkanName(dd, mm, yyyy, gender) {
    // Adjustment for January and February
    const month = (mm <= 2) ? mm + 12 : mm;
    const year = (mm <= 2) ? yyyy - 1 : yyyy;

    const CC = Math.floor(year / 100);
    const YY = year % 100;

    // Formula provided
    const d = (
        (Math.floor(CC / 4) - (2 * CC) - 1) +
        Math.floor((5 * YY) / 4) +
        Math.floor((26 * (month + 1)) / 10) +
        dd
    ) % 7;

    const dayIndex = (d + 7) % 7;

    const names = {
        male: ["Kwame", "Kwasi", "Kojo", "Kwabena", "Kwaku", "Yaw", "Kofi"],
        female: ["Ama", "Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afia"]
    };

    return names[gender][dayIndex];
}