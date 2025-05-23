setInterval(() => {
    // Make a http request to /shut/realtime
    fetch('/shut/realtime')
        .then(response => response.json())
        .then(data => {
            if (data.ready) {
                new Audio('/shut/ready.mp3').play();
                setTimeout(() => {
                    window.location.reload();
                }, 10000);
            }
        });
}, 15000);

setTimeout(() => {
    const navigation = document.getElementById('navigation');
    if (navigation) {
        // Make an event that triggers when navigation classlist is changed
        const observer = new MutationObserver(() => {
            if (navigation.classList.contains('nav-show')) {
                document.cookie = 'nav-open=true';
            } else {
                document.cookie = 'nav-open=false';
            }
        });
        observer.observe(navigation, {
            attributes: true
        });
        const navOpen = document.cookie.indexOf('nav-open=true') !== -1;
        if (navOpen) {
            navigation.classList.add('nav-show');
        } else if (document.cookie.indexOf('nav-open=false') !== -1) {
            navigation.classList.remove('nav-show');
        }
    }
}, 500);