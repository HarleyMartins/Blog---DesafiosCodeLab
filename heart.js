var icon = document.querySelectorAll(".icon");



for (let i = 0; i < icon.length; i++) {
  icon[i].onclick = () =>{
    icon[i].classList.toggle("filled");
  }
  }


// icon.onclick = () => {
//   icon.classList.toggle("filled");
// };


console.log(icon)