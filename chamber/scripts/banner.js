document.addEventListener('DOMContentLoaded', function() {
const banner = document.getElementById('event-banner');
const today = new Date().getDay();

// Show the banner only on Monday (1), Tuesday (2), and Wednesday (3)
if (today >= 1 && today <= 3) {
banner.style.display = 'block';
} else {
banner.style.display = 'none';
}
});

// Function to close the banner
function closeBanner() {
document.getElementById('event-banner').style.display = 'none';
}