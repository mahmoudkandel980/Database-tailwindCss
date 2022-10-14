const btn = document.getElementById('theme-toggle'),
    darkSvgIcon = document.getElementById('theme-toggle-dark-icon'),
    lightSvgIcon = document.getElementById('theme-toggle-light-icon'),
    html = document.querySelector('html');


window.addEventListener('load', () => {
    if (localStorage.getItem('mode') === 'light' || localStorage.getItem('mode') === '') {
        html.classList.contains('dark') && html.classList.remove('dark');
        lightSvgIcon.classList.remove('hidden');
    } else {
        !html.classList.contains('dark') && html.classList.add('dark');
        darkSvgIcon.classList.remove('hidden');
    }
})


btn.addEventListener('click', () => {
    html.classList.toggle('dark');

    if (localStorage.getItem('mode') === 'light' || localStorage.getItem('mode') === '') {
        localStorage.setItem('mode', 'dark');

        // Light/Dark icon
        darkSvgIcon.classList.remove('hidden');
        !lightSvgIcon.classList.contains('hidden') && lightSvgIcon.classList.add('hidden');
    } else {
        localStorage.setItem('mode', 'light');

        // Light/Dark icon
        lightSvgIcon.classList.remove('hidden');
        !darkSvgIcon.classList.contains('hidden') && darkSvgIcon.classList.add('hidden');
    }
})