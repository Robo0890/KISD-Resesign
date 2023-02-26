
window.onload = function() {
    scroll_news("left", 0)
    setInterval(function() {
        scroll_news("right")
    }, 15000)
}

function open_burger() {
    menu = document.getElementById("ham_menu")
    hamburger = document.getElementById("hamburger")
    isOpen = menu.getAttribute("open");
    console.log(isOpen);

    if (isOpen == "true") {
        menu.setAttribute("open", "false");
        hamburger.setAttribute("open", "false")
    }
    else {
        menu.setAttribute("open", "true");
        hamburger.setAttribute("open", "true")
    }
}

function scroll_news(direction, speed = 1) {
    news = document.getElementById("carosel");
    current_slide = news.lastElementChild;

    console.log(direction);

    if (direction == "left") {
        news.insertBefore(news.lastElementChild, news.firstElementChild);
        news.animate(
        [{
                transform: 'translateX(-100%)'
            },
            {
                transform: 'translateX(0)'
            }],
            {
                duration: 1000 * speed,
                iterations: 1,
                easing: 'ease',
            }
        )
        .onfinish = (e) => {
            console.log(news.firstChild)
    };
    }

    if (direction == "right") {
        news.insertBefore(news.firstElementChild, news.lastElementChild);
        news.animate(
        [{
                transform: 'translateX(100%)'
            },
            {
                transform: 'translateX(0)'
            }],
            {
                duration: 1000 * speed,
                iterations: 1,
                easing: 'ease',
            }
        )
        .onfinish = (e) => {
            console.log(news.firstChild)
    };
    }
}