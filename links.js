const baseURL = 'https://gennecis.github.io/wdd230/';
const linksURL = baseURL + 'data/links.json';

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        // console.log(data); 
        displayLinks(data.weeks);  // Pass the weeks array
    } catch (error) {
        console.error("Error fetching links:", error);
    }
}

getLinks()

function displayLinks(weeks) {
    const list = document.querySelector('#activity ul');
    list.innerHTML = '';  // Clear the list to avoid duplication

    weeks.forEach(weekData => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<h3>${weekData.week}</h3>`;
        
        weekData.links.forEach(link => {
            const linkItem = document.createElement('a');
            linkItem.href = link.url;
            linkItem.textContent = link.title;
            listItem.appendChild(linkItem);
            listItem.appendChild(document.createTextNode(' | ')); // Add a separator
        });

        // Remove the last separator
        if (listItem.lastChild) {
            listItem.removeChild(listItem.lastChild);
        }

        list.appendChild(listItem);
    });
}