$( document ).ready(function() {

// PROJECT ARRAY
let projects = [
    {
        id: 1,
        title: 'Openfolio',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate non voluptates dolore, explicabo adipisci sequi aliquam consequuntur ad nemo excepturi sed nam asperiores eos quam cum eaque quia! Odio, saepe.',
        img: [
            {img1: './img/openfolio-mockup.png'},
            {img1: './img/openfolio-main.png'},
            {img1: './img/openfolio-modal.png'}
        ],
        tag: 'Web'
    },
    {
        id: 2,
        title: 'Preloved',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate non voluptates dolore, explicabo adipisci sequi aliquam consequuntur ad nemo excepturi sed nam asperiores eos quam cum eaque quia! Odio, saepe.',
        img: [
            {img1: './img/preloved-home.jpg'},
            {img1: './img/preloved-responsive.jpg'},
            {img1: './img/preloved-wardrobe.jpg'}
        ],
        tag: 'Web'
    },
    {
        id: 3,
        title: 'miStay',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate non voluptates dolore, explicabo adipisci sequi aliquam consequuntur ad nemo excepturi sed nam asperiores eos quam cum eaque quia! Odio, saepe.',
        img: [
            {img1: './img/mistay-home.png'},
            {img1: './img/mistay-search.png'},
            {img1: './img/mistay-modal.png'},
            {img1: './img/mistay-modal2.png'},
            {img1: './img/mistay-confirmation.png'},
            {img1: './img/mistay-responsive.png'}
        ],
        tag: 'Web'
    },
    {
        id: 4,
        title: 'Libby Beattie Interior Design',
        description: 'This project is a redesign of an Interior Design Studio website. Given the target audience and desired feel of the site, I undertook UX research to inform how best to achieve this. The site has been designed to reinforce that the studio is classy and reputable, but is also approachable and has tons of character and design expertise. The main focus is on showcasing the amazing work they do, which is why images are always at the forefront of the design.<br><br>This was built as a custom Wordpress theme, including front-end client customisation features for future-proofing and easy updating.',
        img: [
            {img1: './img/lb-responsive2.png'},
            {img1: './img/lb-home2mockup.png'},
            {img1: './img/lb-projectsMockup.png'},
            {img1: './img/lb-projectMockup.png'}
        ],
        tag: 'Web',
        link: 'https://james.fawcett.yoobeestudent.net/libbybeattie/'
    }
    
];

// =================================
// RESPONSIVE NAVBAR
// =================================

function responsiveNav() {
    console.log('clicked')
    let nav = document.getElementById("responsive-nav");
    nav.classList.toggle('hide');
    nav.classList.toggle('show');
}

let hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', responsiveNav);



// =================================
// GENERATE CARDS - Projects Page
// =================================
function generateCards(){
    let i;
    document.getElementById('projectsHome').innerHTML = '';
    for(i = 0; i < projects.length; i++){
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
    document.querySelectorAll('.project').forEach(function(card) {
        card.addEventListener('click', function(e) {
            let id = e.target.parentNode.id;
            for(i = 0; i < projects.length; i++){
                if(parseInt(this.id) === projects[i].id){        
                   
                    openModal();

                    // $('#projectModal').innerHTML == '';
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
                                <p class="projectModal__description">${projects[i].description}<br><br><a href='${projects[i].link}' target="_blank">Link</a></p>
                                
                            </div>
                            
                        </div>
    
                        `
                    ) 

                    console.log(document.querySelector('.projectModal__link'));
                    // document.getElementById('projectLink').append(
                    //     `
                    //     <a href='${projects[i].link}'>Link</a>
                    //     `
                    //    );


                    projects[i].img.forEach(element => {
                        console.log(element.img1);

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
                       $('#closeBtn').click(function(){
                           closeModal();
                       }) ;

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
    form.addEventListener("submit", handleSubmit)
});