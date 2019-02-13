
class Carousel {
  constructor(Carousel) {
      this.books = books;
      this.imgs = books.querySelectorAll("imgs");
      this.leftBtn = books.querySelector("leftbtn");
      this.rightBtn = books.querySelector("rightbtn");
      this.rightBtn.addEvenListener("click", () => this.rightClick());
      this.leftBtn.addEvenListener("click", () => this.leftClick());
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

let carousel = document.querySelectorAll(".books");
carousel = new Carousel(carousel);



window.addEventListener('load', (event) => { 
  alert('help')
})