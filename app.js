

const sections = Array.from(document.querySelectorAll('.main-section section'));
const links = Array.from(document.querySelectorAll('a'));
const overviewLink = links[1];
const personalLink = links[2];
const commissionedLink = links[3];
const aboutLink = links[4];

overviewLink.addEventListener('click', loadOverview);

function loadOverview() {
    sections.forEach(section => {
        section.style.display = 'none';
    })
    sections[0].style.display = 'block';
}

console.log(sections);