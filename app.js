

const sections = Array.from(document.querySelectorAll('.main-section section'));
const links = Array.from(document.querySelectorAll('a'));

const overviewLink = links[1];
const personalLink = links[2];
const commissionedLink = links[3];
const aboutLink = links[4];

overviewLink.addEventListener('click', () => loadView(sections[0]));
personalLink.addEventListener('click', () => loadView(sections[1]));
commissionedLink.addEventListener('click', () => loadView(sections[2]));
aboutLink.addEventListener('click', () => loadView(sections[3]));


function loadView(section) {
    hideAllViews();
    section.style.display = 'block';
}


function hideAllViews() {
    sections.forEach(section => {
        section.style.display = 'none';
    })
}
