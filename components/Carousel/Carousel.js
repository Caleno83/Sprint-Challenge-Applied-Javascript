/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

//creating HTML structure for carousel
function carouselCard() {

  //creating elements
  const carouselDiv = document.createElement('div');
  const leftButton = document.createElement('div');
  const firstImg = document.createElement('div');
  const secondImg = document.createElement('div');
  const thirdImg = document.createElement('div');
  const forthImg = document.createElement('div');
  const rigthButton = document.createElement('div');

  //creating elements class
  carouselDiv.classList.add('carousel');
  leftButton.classList.add('left-button');
  rigthButton.classList.add('right-button');

  //adding children to parent elements
  carouselDiv.appendChild(leftButton);
  carouselDiv.appendChild(firstImg);
  carouselDiv.appendChild(secondImg);
  carouselDiv.appendChild(thirdImg);
  carouselDiv.appendChild(forthImg);
  carouselDiv.appendChild(rigthButton);

  //adding content to img
  firstImg.src = './assets/carousel/mountains.jpeg';
  secondImg.src = './assets/carousel/computer.jpeg';
  thirdImg.src = './assets/carousel/trees.jpeg';
  forthImg.src = './assets/carousel/turntable.jpeg'
  leftButton.textContent = '<';
  rigthButton.textContent = '>';
  

  return carouselDiv;

}

//to see carousel HTML structure in the console
console.log(carouselCard())

const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.appendChild(carouselCard())