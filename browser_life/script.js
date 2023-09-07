console.log("JavaScript file loaded and being executed...");

// Simulating AJAX with local JSON
document.getElementById('fetchLocal').addEventListener('click', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log("Data fetched:", data);
        });
});
document.getElementById('fetchData').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // 1 You can also display this data on your page
        });
});

// Tab visibility change
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        console.log("Tab is now in the foreground");
    } else {
        console.log("Tab is now in the background");
    }
});

// Unloading events
window.addEventListener('beforeunload', function() {
    console.log("Preparing to unload the page...");
});
window.addEventListener('unload', function() {
    console.log("Page is being unloaded...");
});

// Setting and reading a cookie
document.cookie = "demoCookie=demoValue";
console.log("Cookie set:", document.cookie);
