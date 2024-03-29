$( document ).ready(function() {

// =================================
// RESPONSIVE NAVBAR
// =================================

function responsiveNav() {
    let nav = document.getElementById("responsive-nav");
    nav.classList.toggle('hide');
    nav.classList.toggle('show');
}

let hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', responsiveNav);



// =================================
// GENERATE CARDS - Projects Page
// =================================
    function generateCards() {
        let i;
        document.getElementById('projectsHome').innerHTML = '';
        for (i = 0; i < projects.length; i++) {
            document.getElementById('projectsHome').innerHTML +=

                `
        <div id="${projects[i].id}" class="project">
            <div class="project__imageContainer">
                <img class="project__img" src="${projects[i].img[0].img1}" alt="">
            </div>
            
            <div class="project__titleContainer">
                <h2 class="project__title">${projects[i].title}</h2>
            </div>
        </div>
        `
        }
        
        // MODAL
        document.querySelectorAll('.project').forEach(function (card) {
            card.addEventListener('click', function (e) {
                let id = e.target.parentNode.id;
                for (i = 0; i < projects.length; i++) {
                    if (parseInt(this.id) === projects[i].id) {

                        openModal();

                        $('#projectModal').innerHTML == '';
                        $('#projectModal').empty().append(
                            `
                        <div class="projectModal__content">
                            <div class="projectModal__topBar">
                                <span id="closeBtn" class="projectModal__close">&times;</span>
                            </div>
                            <div class="projectModal__body">
                                <div class="projectModal__gallery" data-carousel>
                                    <button class="projectModal__galleryButton prev" data-carousel-button="prev">&#8678;</button>
                                    <button class="projectModal__galleryButton next" data-carousel-button="next">&#8680;</button>

                                    <ul id="pictures" data-slides>

                                        
                                    </ul>

                                </div>
                                
                                <h1 class="projectModal__title">${projects[i].title}</h1>
                                <i class="fa-solid fa-circle-arrow-right"></i>
                                <p class="projectModal__description">${projects[i].description}</p>
                                <div class="projectModal__link--container">
                                <button class="projectModal__button"><a class="projectModal__link" href="https://www.behance.net/jamesfawcett" target="_blank"><svg class="behanceLogo" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>Check me out on Behance</a></button>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
    
                        `
                        )



                        projects[i].img.forEach(element => {

                            let newImage = document.createElement('img');
                            newImage.setAttribute('class', 'projectModal__img');
                            newImage.src = element.img1;

                            let liItem = document.createElement('li');
                            liItem.setAttribute('class', 'projectModal__slide');
                            liItem.appendChild(newImage);

                            document.getElementById('pictures').append(liItem);

                        });
                        ;
                        document.getElementById('pictures').firstElementChild.setAttribute('data-active', 'true')



                        // CLOSE MODAL
                        $('#closeBtn').click(function () {
                            closeModal();
                        });

                        //GALLERY BUTTONS 

                        const buttons = document.querySelectorAll("[data-carousel-button]")

                        buttons.forEach(button => {
                            button.addEventListener("click", () => {
                                const offset = button.dataset.carouselButton === "next" ? 1 : -1
                                const slides = button
                                    .closest("[data-carousel]")
                                    .querySelector("[data-slides]")

                                const activeSlide = slides.querySelector("[data-active]")
                                let newIndex = [...slides.children].indexOf(activeSlide) + offset
                                if (newIndex < 0) newIndex = slides.children.length - 1
                                if (newIndex >= slides.children.length) newIndex = 0

                                slides.children[newIndex].dataset.active = true
                                delete activeSlide.dataset.active
                            })
                        })


                    }
                }
            })
        })
        
        $('#projectsHome').append(`<div><button class="projectModal__button"><a class="projectModal__link" href="https://www.behance.net/jamesfawcett" target="_blank"><svg class="behanceLogo" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>More on Behance</a></button></div>`)
    }
generateCards();
// =================================
// =================================

// NAVBAR
$(window).scroll(function(){
    if ($(window).scrollTop()){
        $('#nav').addClass('navScroll');
    } else {
        $('#nav').removeClass('navScroll');
    }
});

// MODAL

const modal = document.getElementById('projectModal');
const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.getElementById('closeBtn');

// modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}


// TOOLS
tools.forEach(tool => {
    const logoDiv = document.createElement('div');
    logoDiv.classList.add('skills__logo');

    const nameHeading = document.createElement('h3');
    nameHeading.classList.add('skills__name', 'hide');
    nameHeading.textContent = tool.name;

    const img = document.createElement('img');
    img.src = tool.logo;
    img.alt = `${tool.name} logo`;

    logoDiv.appendChild(nameHeading);
    logoDiv.appendChild(img);

    document.getElementById('skills-div').appendChild(logoDiv);
});


// FORMSPREE
var form = document.getElementById("contactForm");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.style.display = "block";
          status.style.background = "#4abb4a";
          status.style.color = "white";
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
                status.style.display = "block";
                status.style.background = "#d83737";
                status.style.color = "white";
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.style.display = "block";
              status.style.background = "#d83737";
              status.style.color = "white";
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.style.display = "block";
        status.style.background = "#d83737";
        status.style.color = "white";
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit);

    function reveal() {
        let reveals = document.querySelectorAll(".reveal");
        for (let i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            return;
          }
        }
      }


      window.addEventListener("scroll", reveal);
    reveal();

    // TOOLS HOVER EFFECT

    $(".skills__logo").mouseenter(function(){
        let name = this.firstElementChild;
        name.classList.remove('hide');
        name.classList.add('show');
      });
    $(".skills__logo").mouseleave(function(){
        let name = this.firstElementChild;
        name.classList.remove('show');
        name.classList.add('hide');
      });
    
});