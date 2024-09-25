let images = ['3D Wolf', 'Brown Terrier', 'Cat Waiting at a Bus Stop', 'Cute Astronaut Puppy', 
'Colorful Robot on Safari', 'Cool Cats', 'Corgi Typing on a Computer', 'Darth Vader Watercolor', 
'Disco Cat', 'Dog in Space', 'Fairy in the Forest', 'Fish Pond', 'Girl Going to Another Dimension',
'Grizzly Bear', 'Guitar', 'Hot Chocolate', 'Lemmon Sun', 'Maple Tree',
'Medieval Mansion in a Fairytale Forest', 'Panda Making a Cake', 'Soccer Ball',
'Winter Wonderland', 'Cute Ghost', 'Strawberry Milkshake', 'Astronaut Skate Boarding in Space',
'Elephant', 'Video Game Girl', 'Undersea Castle', 'Deer', 'Book Tree', 'Girl Fishing',
'People Floating with Umbrellas', 'Cats with Headphones', 'Sinnging Girl',
'Girl Looking into a Galaxy', 'Fairy Garden', 'Cheeky Chicks', 'Musical Notes', 'Umbrellas',
'Teddy Bears', 'Love Heart', '3D World', 'Fox on a Beach', 'Dog Drawing', 'Two Girls',
'Rainbow Butterfly', 'Icecream', 'Hot Air Balloons', 'Sandcastle', 'Superman With a Wolf',
'Cute Watermelon', 'Panda Relaxing', 'Bonsai', 'Paper Birds', 'Cute Cat', 'Beautiful Girl',
'Hedgehog', 'Camping tent', 'king Julen', 'Snow Dog', 'Cat Looking at the Moon', 'Frog Planet',
'Kittens at a Pond', 'Sleep', 'Castle And Pink Sand', 'Dog At Christmas', 'Forest Cube',
'Amazing River', 'Girl With Light', 'Playing Cards', 'Computer Girl', '15 Year Old Girl'];

for (let i = 0; i < images.length; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    document.getElementById('grid').appendChild(gridItem);
    const image = document.createElement('img');
    image.src = `images/${images[i]}.jpg`;
    image.alt = images[i];
    gridItem.appendChild(image);
}

const gridItems = document.querySelectorAll('.grid-item');
const overlay = document.querySelector('.overlay');
const expandedImg = document.querySelector('.expanded-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
let currentIndex = 0;
gridItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        const { src, alt } = item.querySelector('img').attributes;
        expandedImg.setAttribute('src', src.value);
        expandedImg.setAttribute('alt', alt.value);
        overlay.style.display = 'flex';
    });
});
closeBtn.addEventListener('click', closeOverlay);
overlay.addEventListener('click', (event) => event.target === overlay && closeOverlay());
prevBtn.addEventListener('click', () => navigate(-1));
nextBtn.addEventListener('click', () => navigate(1));
function navigate(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = gridItems.length - 1;
    else if (currentIndex >= gridItems.length) currentIndex = 0;

    const { src, alt } = gridItems[currentIndex].querySelector('img').attributes;
    expandedImg.setAttribute('src', src.value);
    expandedImg.setAttribute('alt', alt.value);
}
function closeOverlay() {
    overlay.style.display = 'none';
    currentIndex = 0;
}
document.addEventListener('keydown', (event) => {
    if (overlay.style.display === 'flex') {
        if (event.key === 'ArrowLeft') navigate(-1);
        else if (event.key === 'ArrowRight') navigate(1);
        else if (event.key === 'Escape') closeOverlay();
    }
});