document.addEventListener('DOMContentLoaded', function() {
    const spotlightContainer = document.getElementById('spotlight');

    async function fetchMembers() {
        const baseURL = 'https://gennecis.github.io/wdd230/chamber/';
        const linksURL = baseURL + 'data/members.json';
        try {
            const response = await fetch(linksURL);
            const members = await response.json();
            // console.log(members);
            displaySpotlightMembers(members);
        } catch (error) {
            console.error('Error fetching member data:', error);
            spotlightContainer.innerHTML = '<p>Member data unavailable</p>';
        }
    }

    function displaySpotlightMembers(members) {
        const spotlightMembers = filterSpotlightMembers(members);
        const selectedMembers = selectRandomMembers(spotlightMembers, 3); // Selects 3 random members for display

        selectedMembers.forEach(member => {
            const memberElement = createMemberElement(member);
            spotlightContainer.appendChild(memberElement);
        });
    }

    function filterSpotlightMembers(members) {
        return members.filter(member => member.membership_level === 'silver' || member.membership_level === 'gold');
    }

    function selectRandomMembers(members, count) {
        const shuffled = members.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function createMemberElement(member) {
        const element = document.createElement('div');
        element.className = 'spotlight';
        element.innerHTML = `
            <h4>${member.name}</h4>
            <p>${member.description || 'No additional information available'}</p>
            <a href="${member.website}">Visit Website</a>
        `;
        return element;
    }

    fetchMembers();
});
