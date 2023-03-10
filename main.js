function animateCounter() {
    const counterElement = document.getElementById('counter');
    let count = 0;
    const intervalId = setInterval(() => {
        count++;
        counterElement.textContent = count;
        if (count === 76) {
            clearInterval(intervalId);
        }
    }, 5);
}

function getSkillsData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Get the skill summary container element
            const summaryContainer = document.querySelector('.skills-container');

            // Loop through the data and create the skill summary elements
            data.forEach(skill => {
                // Create the skill summary element
                const skillElement = document.createElement('div');
                skillElement.className = 'summary__skill';

                if (skill.category === 'Reaction') {
                    skillElement.classList.add('summary__skill--reaction');
                } else if (skill.category === 'Memory') {
                    skillElement.classList.add('summary__skill--memory');
                } else if (skill.category === 'Verbal') {
                    skillElement.classList.add('summary__skill--verbal');
                } else if (skill.category === 'Visual') {
                    skillElement.classList.add('summary__skill--visual');
                }

                // Create the left side of the skill summary
                const leftElement = document.createElement('div');
                leftElement.className = 'summary__left';

                const iconElement = document.createElement('img');
                iconElement.src = skill.icon;
                iconElement.alt = '';

                const nameElement = document.createElement('span');
                nameElement.className = `summary__skill__name--${skill.category.toLowerCase()}`;
                nameElement.innerText = skill.category;

                leftElement.appendChild(iconElement);
                leftElement.appendChild(nameElement);

                // Create the right side of the skill summary
                const rightElement = document.createElement('div');
                rightElement.className = 'summary__right';

                const scoreElement = document.createElement('span');
                scoreElement.innerText = skill.score;

                const of100Element = document.createElement('span');
                of100Element.className = 'of-100';
                of100Element.innerText = ' / 100';

                rightElement.appendChild(scoreElement);
                rightElement.appendChild(of100Element);

                // Add the left and right elements to the skill summary element
                skillElement.appendChild(leftElement);
                skillElement.appendChild(rightElement);

                // Add the skill summary element to the summary container
                summaryContainer.appendChild(skillElement);
            });
        })
        .catch(error => console.error(error));
}

function getData() {
    animateCounter();
    getSkillsData();
}

document.addEventListener('DOMContentLoaded', getData);
