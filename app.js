gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");

links.forEach((link) => {
    link.addEventListener("click", () => {
        //Turn color orange
        gsap.to(links, {color: "#252525"});
        if (document.activeElement === link)  {
            gsap.to(link, {color: "#dd4a00"});
        }

        //Moving the line
        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from(state, {
            duration: 0.5,
            absolute: true,
            ease: 'elastic.out(1,0.5)',
        });
    });
});

//Cards
const cards = document.querySelectorAll(".card");

cards.forEach((card,index) => {
    card.addEventListener("click", ()=> {
        //get the state
        const state = Flip.getState(cards);

        //Add the active class to the active card and the inactive class to the others
        const isCardActive = card.classList.contains('active');
        cards.forEach((otherCard, otherIdx) => {
            otherCard.classList.remove('active');
            otherCard.classList.remove('is-inactive');
            if(!isCardActive && index !== otherIdx) {
                otherCard.classList.add('is-inactive');
            }
        });
        if(!isCardActive) card.classList.add('active');

        //animation 
        Flip.from(state, {
            duration: 1,
            ease: "expo.out",
            absolute: true,
        });
    });
});
