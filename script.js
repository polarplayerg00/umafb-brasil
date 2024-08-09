function toggleMenu() {
    const navLinks = document.querySelector('header nav');
    const menuIcon = document.querySelector('.menu-icon');

    if (navLinks.style.display === 'flex') {
        navLinks.style.animation = 'slideUp 0.5s forwards';
        setTimeout(() => {
            navLinks.style.display = 'none';
        }, 500);
        menuIcon.classList.remove('open');
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.animation = 'slideDown 0.5s forwards';
        menuIcon.classList.add('open');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const events = [
        { name: "Giro Bíblico", day: "Terça-feira", time: "19:10" },
        { name: "Célula", day: "Quarta-feira", time: "18:30" },
        { name: "Giro Bíblico", day: "Sexta-feira", time: "19:20" }
    ];

    const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    const today = new Date();
    const currentDay = daysOfWeek[today.getDay()];
    const currentTime = `${today.getHours()}:${String(today.getMinutes()).padStart(2, '0')}`;

    const eventList = document.querySelector('.events ul');
    const eventItems = eventList.querySelectorAll('li');

    eventItems.forEach(item => item.classList.remove('current-event'));

    events.forEach(event => {
        if (event.day === currentDay && event.time === currentTime) {
            eventList.querySelectorAll('li').forEach(li => {
                if (li.textContent.includes(event.name)) {
                    li.classList.add('current-event');
                }
            });
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const events = [
        { name: "Giro Bíblico", day: "Terça-feira", time: "19:10" },
        { name: "Célula", day: "Quarta-feira", time: "18:30" },
        { name: "Giro Bíblico", day: "Sexta-feira", time: "19:20" }
    ];

    const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    // Define manualmente o dia e a hora para teste
    const currentDay = "Terça-feira"; // Ajuste para testar
    const currentTime = "19:10"; // Ajuste para testar

    const eventList = document.querySelector('.events ul');
    const eventItems = eventList.querySelectorAll('li');

    eventItems.forEach(item => item.classList.remove('current-event'));

    events.forEach(event => {
        if (event.day === currentDay && event.time === currentTime) {
            eventList.querySelectorAll('li').forEach(li => {
                if (li.textContent.includes(event.name)) {
                    li.classList.add('current-event');
                }
            });
        }
    });
});
