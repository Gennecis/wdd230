function updateVisitCount() {
    // Get the current visit count from localStorage, or initialize to 0 if not found
    let visitCount = localStorage.getItem('visitCount');
    if (!visitCount) {
        visitCount = 0;
    }

    // Increment the visit count
    visitCount = parseInt(visitCount) + 1;

    // Store the updated visit count back in localStorage
    localStorage.setItem('visitCount',visitCount);

    // Display the updated visit count in the span element
    document.getElementById('visit-count').innerText = visitCount;
}

// Call the function to update the visit count when the page loads
document.addEventListener('DOMContentLoaded',updateVisitCount);