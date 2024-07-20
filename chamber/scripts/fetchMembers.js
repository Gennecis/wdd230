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
        // Adding feedback for data loading
        directoryContainer.innerHTML = '<p>Loading...</p>';
        
        data.forEach(member => {
          const memberItem = document.createElement('div');
          memberItem.classList.add('directory-item');
          memberItem.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <a href="tel:${member.phone}">${member.phone}</a>
            <a href="${member.url}" target="_blank">${member.url}</a>
            <p>${member.membership_level}</p>
          `;
          directoryContainer.appendChild(memberItem);
        });
        // Remove loading message after data is loaded
        directoryContainer.innerHTML = '';
      } catch (error) {
        console.error('Error fetching the member data:', error);
        directoryContainer.innerHTML = '<p>Error loading data. Please try again later.</p>';
      }
    };

    fetchData();

    const toggleButton = document.querySelector('#toggle-view');
    const directoryContainer = document.querySelector('.directory-container');

    toggleButton.addEventListener('click', () => {
      if (directoryContainer.classList.contains('directory-grid')) {
        directoryContainer.classList.remove('directory-grid');
        directoryContainer.classList.add('directory-list');
      } else {
        directoryContainer.classList.remove('directory-list');
        directoryContainer.classList.add('directory-grid');
      }
    });
});
