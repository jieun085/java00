const monthNames = ["Jan", "Fed", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function generateCalendar(month, year) {
    const daysContainer = document.getElementById('days');
    daysContainer.innerHTML = '';
    const monthYear = document.getElementById('month-year');
    monthYear.innerHTML = `${monthNames[month]} ${year}`;
    
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();
    
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('empty');
        daysContainer.appendChild(emptyCell);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.innerHTML = day;
        daysContainer.appendChild(dayCell);
    }
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
}

document.addEventListener('DOMContentLoaded', () => {
    generateCalendar(currentMonth, currentYear);
});
