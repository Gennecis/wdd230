const baseURL = 'https://gennecis.github.io/wdd230/chamber/';
const linksURL = baseURL + 'data/members.json';

document.addEventListener('DOMContentLoaded', () => {
    const fetchData = async () => {
        try {
            const response = await fetch(linksURL);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            const directoryContainer = document.querySelector('.directory-container');
            directoryContainer.innerHTML = '';

            data.forEach(member => {
                const memberItem = document.createElement('div');
                memberItem.classList.add('directory-item');
                memberItem.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.url}">${member.url}</a>
                    <p>${member.membership_level}</p>
                `;
                directoryContainer.appendChild(memberItem);
            });
        } catch (error) {
            console.error('Error fetching the member data:', error);
        }
    };

    fetchData();

    const gridButton = document.querySelector('#grid');
    const listButton = document.querySelector('#list');
    const directoryContainer = document.querySelector('.directory-container');

    gridButton.addEventListener('click', () => {
        directoryContainer.classList.add('grid');
        directoryContainer.classList.remove('list');
    });

    listButton.addEventListener('click', () => {
        directoryContainer.classList.add('list');
        directoryContainer.classList.remove('grid');
    });
});
