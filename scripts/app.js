var tvscreen;
var light;
var logCon;

document.addEventListener('DOMContentLoaded', () => {
    tvscreen = document.getElementById('tvscreen');
    light = document.getElementById('light');
    logCon = document.querySelector('.logs');
})

function printLog(text) {
    const value = document.createTextNode(`${text}`)
    const p = document.createElement('p')

    p.appendChild(value)
    logCon.appendChild(p)
}

function toggleTV(state) {
    switch (state) {
        case 'on':
            tvscreen.style.display = 'none';
            break;
        case 'off':
            tvscreen.style.display = 'initial';
            break;
        default:
            tvscreen.style.display = 'initial';
            break;
    }
}

function toggleBulb(state) {
    switch (state) {
        case 'on':
            light.style.display = 'none';
            break;
        case 'off':
            light.style.display = 'initial';
            break;
        default:
            light.style.display = 'initial';
            break;
    }
}