// init Isotope
var $grid = $('.item-details').isotope({
    // options
  });
  // filter items on button click
  $('.item-menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });


  $(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
  })

  const spinnerWrapperEl= document.querySelector('.spinner-wrapper');

  window.addEventListener('load', () =>{
      spinnerWrapperEl.style.opacity= '0';
  
      setTimeout(() => {
          spinnerWrapperEl.style.display = 'none';
      }, 200)
  })

  