// Select the track grid container
const trackGrid = document.getElementById('track-grid');

// Array of track data
const tracks = [
    {
        title: "HALFWAY",
        description: "This song is dedicated to experiencing differences from you and your family, even though you are seen as the same from other people's perspective. It is a powerful track with catchy reggaeton drums.",
        link: "https://www.youtube.com/watch?v=Ykp0XhzgUBk&list=OLAK5uy_mxgWo8N4RXYwGuLP5iZbdgyWYIdBvBzCI",
        image: "halfway.png"
    },
    {
        title: "DIGITAL SPACE",
        description: "A perfect balance of rhythm and emotion. A track about how one might connect with a lover in a futuristic world.",
        link: "https://www.youtube.com/watch?v=U2iv1NuAgNA&list=OLAK5uy_nRjcAP3Sk_4tHV-P2cV_18jJnIWS_6y30",
        image: "digitalspace.png"
    },
    {
        title: "FILA",
        description: "Are you better now? A track about how a one-sided relationship has ended, but the lover regrets his decision to break things off and mourns.",
        link: "https://www.youtube.com/watch?v=v_9FlMSm-7I&list=OLAK5uy_lObo06WyAMY3Lyb-xdfdGNy6gUOuGoEho",
        image: "fila.png"
    }
];

// Function to create and display track cards
function displayTracks() {
    tracks.forEach(track => {
        // Create a new track card
        const trackCard = document.createElement('div');
        trackCard.className = 'track-card';

        // Add content to the track card
        trackCard.innerHTML = `
            <h3>${track.title}</h3>
            <p>${track.description}</p>
            <div class="button-container">
                <img src="${track.image}" alt="${track.title}">
                <a href="${track.link}" target="_blank" class="button">Listen Now</a>
            </div>
        `;

        // Add the track card to the track grid
        trackGrid.appendChild(trackCard);
    });
}

// Display tracks on page load
displayTracks();
