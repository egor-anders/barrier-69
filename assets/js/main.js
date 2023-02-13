document.addEventListener('DOMContentLoaded', () => {



  // const anchors = document.querySelectorAll('.header__nav-link');

  // function clearLinks() {
  //   const links = document.querySelectorAll('.header__nav-link');
  //   links.forEach(item => {
  //     item.classList.remove('header__nav-link--active');
  //   });
  // }



  // for (let anchor of anchors) {
  //   anchor.addEventListener('click', function (e) {
  //     e.preventDefault();
  //     // clearLinks();
  //     // anchor.classList.add('header__nav-link--active');

  //     const blockID = anchor.getAttribute('href').substr(1);

  //     document.getElementById(blockID).scrollIntoView({
  //       block: 'start',
  //     });
  //   });
  // }

  function headerChange() {
    const header = document.querySelector('.header');
    const headerLogo = document.querySelector('.header__logo');
    const hero = document.querySelector('.hero');
    // const heroMain = document.querySelector('.hero__main');
    const headerLinks = header.querySelectorAll('.link');
    const headerHeight = header.offsetHeight;
    const headerButton = header.querySelector('.header__button');
  
    console.log(headerHeight);
  
    window.addEventListener('scroll', () => {
      let scrollDistance = window.scrollY;
  
      if (scrollDistance >= 1) {
        header.classList.add('header--move');
        headerLogo.classList.add('header__logo--move');
        headerButton.classList.add('header__button--move');
        
        hero.style.paddingTop = `${headerHeight}px`;
        headerLinks.forEach((link) => {
          link.classList.add('link--black');
        });
      } else {
        header.classList.remove('header--move');
        headerLogo.classList.remove('header__logo--move');
        headerButton.classList.remove('header__button--move');
        hero.style.paddingTop = null;
  
        headerLinks.forEach((link) => {
          link.classList.remove('link--black');
        });
      }
  
      document.querySelectorAll('.section').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistance) {
          document.querySelectorAll('.header__nav-list a').forEach((el) => {
            if (el.classList.contains('header__nav-link--active')) {
              el.classList.remove('header__nav-link--active');
            }
          });
  
          document.querySelectorAll('.header__nav-list li')[i].querySelector('a').classList.add('header__nav-link--active');
        }
      });
    });
  }



  function openMenu() {
    const menuButton = document.querySelector('.header__button');
    const menuWrapper = document.querySelector('.header__mobile-wrapper');
    const header = document.querySelector('.header');
    const headerLogo = document.querySelector('.header__logo');

    menuButton.addEventListener('click', ()=> {
      menuButton.classList.toggle('header__button--active');
      menuWrapper.classList.toggle('header__mobile-wrapper--show');
      header.classList.toggle('header--active');
      headerLogo.classList.toggle('header__logo--active');
      document.querySelector('html').classList.toggle('no-scroll');
    });

    const mobileLinks = document.querySelectorAll('.header__mobile-link');
    mobileLinks.forEach(item =>{
      item.addEventListener('click', ()=> {
        menuButton.classList.toggle('header__button--active');
        menuWrapper.classList.toggle('header__mobile-wrapper--show');
        header.classList.toggle('header--active');
        headerLogo.classList.toggle('header__logo--active');
        document.querySelector('html').classList.toggle('no-scroll');
      });
    });
  }

  headerChange();
  openMenu();
});
