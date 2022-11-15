//---- Parallax ----//
const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);


(function($, undefined){
  $(function(){
    //----Slider cod----//
    let slideIndex = 1;
    const slideRight = $('.slider-item__btn--rigth'),
          slideLeft = $('.slider-item__btn--left');
    const moveRight = function() {
        if($('.prev-slide')) {
            $('.prev-slide').addClass('prev-prev-slide').removeClass('prev-slide');
        }
        $('.show-slide').addClass('prev-slide').removeClass('show-slide');
        $('.next-slide').addClass('show-slide').removeClass('next-slide');
        if($('.next-next-slide')) {
            $('.next-next-slide').addClass('next-slide').removeClass('next-next-slide');
        };
    };
        const moveLeft = function() {
        if($('.next-slide')) {
            $('.next-slide').addClass('next-next-slide').removeClass('next-slide');
        }
        $('.show-slide').addClass('next-slide').removeClass('show-slide');
        $('.prev-slide').addClass('show-slide').removeClass('prev-slide');
        if($('.prev-prev-slide')) {
            $('.prev-prev-slide').addClass('prev-slide').removeClass('prev-prev-slide');
        };
    };
    slideRight.click(function() {
        if(slideIndex < 3) {
            slideIndex++;
            moveRight();
        }
    })
    slideLeft.click(function() {
        if(slideIndex > 1) {
            slideIndex--;
            moveLeft();
        }
    })
    
        //console.log($(this)); 
    //----Form validation----//
    $('#contact__form').validate({
    	rules : {
    		fullName : {
    			minlength: 2,
    			required: true,
    		},
    		email : {
    			maxlength: 50,
    			required: true,
    		},
    		message : {
    			minlength: 10,
    			required: true,
    		},
    	},
    });
  });
})(jQuery);