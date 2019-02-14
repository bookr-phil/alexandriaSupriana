
class Carousel {
  constructor(books) {
      this.books = books;
      this.imgs = books.querySelectorAll("img");
      this.leftBtn = books.querySelector(".leftbtn");
      this.rightBtn = books.querySelector(".rightbtn");
      this.rightBtn.addEventListener("click", () => {this.rightClick()});
      this.leftBtn.addEventListener("click", () => {this.leftClick()});
      this.currentIndex = 0
      this.imgs[0].style.display="block"
  }

      rightClick(){this.imgs [this.currentIndex].style.display = 'none'
      if (this.currentIndex === this.imgs.length - 1) {
          this.currentIndex = 0
     } else {
      this.currentIndex = this.currentIndex + 1
    }
    this.imgs[this.currentIndex].style.display = 'block'     

    }
    leftClick(){
        this.imgs[this.currentIndex].style.display = 'none'
        if(this.currentIndex === 0){
            this.currentIndex = this.imgs.length - 1
        } else {
            this.currentIndex = this.currentIndex - 1
        }
        this.imgs[this.currentIndex].style.display = 'block'
    }
}
// console.log("hello")
let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);



// window.addEventListener('load', (event) => { 
  // alert('help')
// })

function customAlert(){
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = 'block';
        dialogoverlay.style.height = winH+'px';
        dialogbox.style.left = (winW/2) - (550 * .5)+'px';
        dialogbox.style.top = '100px';
        dialogbox.style.display = 'block';
        document.getElementById('dialogboxhead').innerHTML = 'Acknowledge This Message';
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button onClick="Alert.ok()">OK</button>';
    }
    this.ok = function(){
        document.getElementById('dialogbox').style.display = 'none';
        document.getElementById('dialogoverlay').style.display = 'none';
    }
}
var Alert = new customAlert();