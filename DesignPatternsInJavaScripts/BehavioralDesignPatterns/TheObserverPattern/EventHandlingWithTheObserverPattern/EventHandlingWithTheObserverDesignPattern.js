function getRandomMessages() {
    var randomMessages = [
        "Big Sale On",
        "New item available",
        "Clearance Sale",
        "Running Out Soon",
        "Back in stock"
    ]
    var randomIndex = Math.floor(Math.random() * 5);
    return randomMessages[randomIndex];
}

function observer_bob(event, message) {
    console.log(`**Recieved by Bob ${event.type} : ${message}`);
    console.log(event);
}
function observer_lily(event, message) {
    console.log(`**Recieved by Lily ${event.type} : ${message}`);
    console.log(event);
}
function observer_tom(event, message) {
    console.log(`**Recieved by Tom ${event.type} : ${message}`);
    console.log(event);
}

window.onload = function() {
    document.addEventListener('mobile-phones', (e) => observer_bob(e, e.detail));
    document.addEventListener('mobile-phones', (e) => observer_lily(e, e.detail));
   
    document.addEventListener('books', (e) => observer_tom(e, e.detail));
    document.addEventListener('books', (e) => observer_bob(e, e.detail));
   
    document.addEventListener('fashion', (e) => observer_lily(e, e.detail));
    var buttons = document.getElementsByClassName("button")
    for (var i = 0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', (e) => {
            const customEvent = new CustomEvent(e.target.attributes["id"]["value"], { detail: getRandomMessages() });
            document.dispatchEvent(customEvent);
        })
    }
}
