const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

const imagesEl = images

  .map(image => `<li><img src= ${image.url} alt= ${image.alt} width= 300px height= 200px/></li>`)
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", imagesEl); 

galleryEl.style.display = "flex";
galleryEl.style.marginLeft = "-20px";
galleryEl.style.marginTop = "-20px";
galleryEl.style.marginBottom = "-16px";

const galleryItems = galleryEl.querySelectorAll('li');
console.log(galleryItems);
galleryItems.forEach(item => `${item.style.listStyle = "none"}${item.style.marginTop = "20px"}${item.style.marginLeft = "20px"} `)

 

 


