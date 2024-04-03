document.addEventListener('DOMContentLoaded', function() {
    const headerElement = document.querySelector('header');
    headerElement.innerHTML = `
        <h1>Community World Centre</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="activities.html">Activities</a></li>
                <li><a href="events.html">Events</a></li>
                <li><a href="support.html">Support</a></li>
            </ul>
        </nav>
    `;
});
