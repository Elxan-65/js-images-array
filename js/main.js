
const imageArr = [
  "photos1.jpg",
  "photos2.jpg",
  "photos3.jpg",
  "photos4.jpg",
  "photos5.jpg",
  "photos6.jpg",
  "photos7.jpg",
  "photos8.jpg",
  "photos9.jpg"
];

const myImg = document.getElementById("mainImage");
const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");

const showImage=()=>{
  let numberValue=myInput.value
  myImg.src=`./img/${imageArr[numberValue]}`
}
myButton.addEventListener("click",showImage);


