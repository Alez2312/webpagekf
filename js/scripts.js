/*!
    * Start Bootstrap - SB UI Kit Pro v2.0.3 (https://shop.startbootstrap.com/product/sb-ui-kit-pro)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under SEE_LICENSE (https://github.com/BlackrockDigital/sb-ui-kit-pro/blob/master/LICENSE)
    */
window.addEventListener('DOMContentLoaded', function () {


  // Obtener los elementos relevantes
  const testimonialsContainer = document.querySelector('.testimonials');
  const prevButton = document.querySelector('#prev-button');
  const nextButton = document.querySelector('#next-button');
  const testimonialItems = Array.from(document.querySelectorAll('.testimonial'));

  // Calcular el número de testimonios por grupo
  const testimonialsPerGroup = 2;

  // Calcular el número de grupos
  const totalGroups = Math.ceil(testimonialItems.length / testimonialsPerGroup);

  // Establecer el estado inicial
  let currentGroup = 1;

  // Función para mostrar los testimonios del grupo actual
  function showTestimonials() {
    // Calcular el rango de índices de los testimonios que se deben mostrar
    const startIndex = (currentGroup - 1) * testimonialsPerGroup;
    const endIndex = startIndex + testimonialsPerGroup;

    // Ocultar todos los testimonios
    testimonialItems.forEach(item => {
      item.style.display = 'none';
    });

    // Mostrar los testimonios del grupo actual
    const testimonialsToShow = testimonialItems.slice(startIndex, endIndex);
    testimonialsToShow.forEach(item => {
      item.style.display = 'block';
    });
  }

  // Función para avanzar al siguiente grupo de testimonios
  function nextGroup() {
    if (currentGroup < totalGroups) {
      currentGroup++;
      showTestimonials();
    }
  }

  // Función para retroceder al grupo de testimonios anterior
  function prevGroup() {
    if (currentGroup > 1) {
      currentGroup--;
      showTestimonials();
    }
  }

  // Agregar eventos a los botones de navegación
  nextButton.addEventListener('click', nextGroup);
  prevButton.addEventListener('click', prevGroup);

  // Mostrar los testimonios iniciales
  showTestimonials();

  // Activate feather
  feather.replace();

  // Enable tooltips globally
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Enable popovers globally
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  // Activate Bootstrap scrollspy for the sticky nav component
  const navStick = document.body.querySelector('#navStick');
  if (navStick) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#navStick',
      offset: 82,
    });
  }

  // Collapse Navbar
  // Add styling fallback for when a transparent background .navbar-marketing is scrolled
  var navbarCollapse = function () {
    const navbarMarketingTransparentFixed = document.body.querySelector('.navbar-marketing.bg-transparent.fixed-top');
    if (!navbarMarketingTransparentFixed) {
      return;
    }
    if (window.scrollY === 0) {
      navbarMarketingTransparentFixed.classList.remove('navbar-scrolled')
    } else {
      navbarMarketingTransparentFixed.classList.add('navbar-scrolled')
    }

  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  document.addEventListener('scroll', navbarCollapse);

});