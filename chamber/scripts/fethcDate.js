document.addEventListener('DOMContentLoaded', function() {
    var dateTimeNow = new Date().toISOString(); // Get the current date and time in ISO format
    document.querySelector('#timestamp').value = dateTimeNow; // Set the hidden input's value
});