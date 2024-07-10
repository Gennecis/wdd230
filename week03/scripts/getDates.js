const copydate = document.getElementById('copyright');
const modifydate = document.getElementById('lastModified');

const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
}

copydate.innerHTML = '&copy; ' + new Date().getFullYear();
modifydate.innerHTML = 'Last Modified: ' + new Date(document.lastModified).toLocaleDateString('en-US', options);
