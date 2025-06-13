function loadLayout() {
    const contentDiv = document.getElementById('content');
    const isMobile = window.innerWidth <= 768;
    const htmlUrl = isMobile ? 'mobile.html' : 'desktop.html';
    const cssUrl = isMobile ? 'mobile.css' : 'desktop.css';

    // Clean up previous content and styles
    contentDiv.innerHTML = '';
    const existingStyles = document.querySelectorAll('link[data-dynamic]');
    existingStyles.forEach(link => link.remove());

    // Clean up previous scripts
    const existingScripts = document.querySelectorAll('script[data-dynamic]');
    existingScripts.forEach(script => script.remove());

    document.querySelector('.loader').style.display = 'block';

    fetch(htmlUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${htmlUrl}`);
            }
            return response.text();
        })
        .then(data => {
            contentDiv.innerHTML = data;

            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = cssUrl;
            link.setAttribute('data-dynamic', 'true');
            document.head.appendChild(link);

            if (isMobile) {
                const scriptMobile = document.createElement('script');
                scriptMobile.src = 'mobile.js';
                scriptMobile.setAttribute('data-dynamic', 'true');
                document.body.appendChild(scriptMobile);

                const scriptMobileTwo = document.createElement('script');
                scriptMobileTwo.src = 'mobileTwo.js';
                scriptMobileTwo.setAttribute('data-dynamic', 'true');
                document.body.appendChild(scriptMobileTwo);
            } else {
                const scriptDesktop = document.createElement('script');
                scriptDesktop.src = 'desktop.js';
                scriptDesktop.setAttribute('data-dynamic', 'true');
                document.body.appendChild(scriptDesktop);
            }

            document.querySelector('.loader').style.display = 'none';
        })
        .catch(error => {
            contentDiv.innerHTML = '<p>Error loading layout. Please try again.</p>';
            console.error(error);
            document.querySelector('.loader').style.display = 'none';
        });
}

window.addEventListener('load', loadLayout);

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
window.addEventListener('resize', debounce(loadLayout, 250));