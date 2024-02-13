const cat = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/800px-Juvenile_Ragdoll.jpg' // sample image


const userLink = document.getElementById('image-link'); // input field for image url
const topTextInput = document.getElementById('text-top'); // input field for top text
const bottomTextInput = document.getElementById('text-bottom'); // input field for bottom text
const outputDiv = document.getElementById('meme-container'); // div where the meme will be displayed
const submit = document.querySelector('button[type="submit"]'); // submit buttom
const form = document.querySelector('#form'); // main form
const memeSection = document.querySelector('#meme-section'); // section where all memes are appended




submit.addEventListener('click', (event) => {
    event.preventDefault(); //preventing the default behaviour

    const topText = topTextInput.value;// top caption
    const bottomText = bottomTextInput.value; //bottom caption
    const url = userLink.value; // URL input

    form.reset(); //reset the input field

    const memeImage = document.createElement('img'); // creatng an image tag
    memeImage.setAttribute('src', url); // setting src to user url
    memeImage.setAttribute('height', '300'); // setting height of image


    const topTextDiv = document.createElement('div'); // creating div for top text
    topTextDiv.textContent = topText; // setting topText 
    topTextDiv.classList.add('meme-text', 'top-text'); //adding class for styling

    const bottomTextDiv = document.createElement('div');// creating div for bottom text
    bottomTextDiv.textContent = bottomText; // setting bottom text
    bottomTextDiv.classList.add('meme-text', 'bottom-text'); // adding class for styling

    const memeContainer = document.createElement('div'); //creating container for meme to be displayed
    memeContainer.setAttribute('id', 'meme-container'); //setting attribute 
    memeContainer.appendChild(memeImage);// appending image 
    memeContainer.appendChild(topTextDiv) // appending top text
    memeContainer.appendChild(bottomTextDiv) // appending bottom text

    memeSection.appendChild(memeContainer) // Add an event listener to the meme image that removes the meme container when the image is clicked
    memeImage.addEventListener('click', () => {
        memeContainer.remove();
    });
})