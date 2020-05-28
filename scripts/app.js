document.addEventListener('DOMContentLoaded', () => {

    const tvscreen = document.getElementById('tvscreen');
    const light = document.getElementById('light');

})

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