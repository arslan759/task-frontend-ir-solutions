// set placeholder text for search input for diff screens
const setPlaceholder = () => {
  const searchInputs = document.querySelectorAll(".searchInput");
  const isMobile = window.innerWidth < 768;

  //   console.log("searchInputs are ", searchInputs);
  //   console.log("isMobile is ", isMobile);

  searchInputs.forEach((input) => {
    // console.log(input);
    if (isMobile) {
      input.placeholder = "Search images";
    } else {
      input.placeholder = "Search high-resolution images";
    }
  });
};

setPlaceholder();
window.addEventListener("resize", setPlaceholder);

//  images for columns in gallery
const column1ImageUrls = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg",
  "images/photo7.jpg",
  "images/photo8.jpg",
  "images/photo9.jpg",
  "images/photo10.jpg",
];

const column2ImageUrls = [
  "images/photo11.jpg",
  "images/photo12.jpg",
  "images/photo13.jpg",
  "images/photo14.jpg",
  "images/photo15.jpg",
  "images/photo16.jpg",
  "images/photo17.jpg",
  "images/photo18.jpg",
  "images/photo19.jpg",
  "images/photo20.jpg",
];

const column3ImageUrls = [
  "images/photo21.jpg",
  "images/photo22.jpg",
  "images/photo23.jpg",
  "images/photo24.jpg",
  "images/photo25.jpg",
  "images/photo26.jpg",
  "images/photo27.jpg",
  "images/photo28.jpg",
  "images/photo29.jpg",
  "images/photo30.jpg",
];

// create image elements
function createImageElements(containerId, imageUrls) {
  const container = document.getElementById(containerId);

  //   console.log("container is", container);

  imageUrls.forEach((imageUrl, index) => {
    const img = document.createElement("img");

    // console.log("img tag is ", img);
    img.src = imageUrl;
    img.alt = "photo" + (index + 1);

    // console.log("img tag is after", img);
    container.appendChild(img);
  });
}

createImageElements("column1", column1ImageUrls);
createImageElements("column2", column2ImageUrls);
createImageElements("column3", column3ImageUrls);
