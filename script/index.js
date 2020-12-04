document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('#main-container');
    const activeIndicator = document.querySelector('#position-indicator div.active');

    [...mainContainer.children].forEach(child => {
        document.querySelector('#position-indicator').appendChild(document.createElement('div'));
    });

    mainContainer.addEventListener('scroll', () => {
        const selected = Math.round(mainContainer.scrollTop / document.body.clientHeight);

        activeIndicator.style.top = (selected * 40) + 'px';
    });

    document.querySelector('div.footnote').addEventListener('click', () => {
        console.log('scroll');
        document.querySelector('#choir-songs h1').scrollIntoView({behavior: 'smooth'});
    });
});