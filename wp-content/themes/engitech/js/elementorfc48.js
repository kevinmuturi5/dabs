( function( $ ) {
    'use strict';

    /* --------------------------------------------------
     * counter
     * --------------------------------------------------*/
    var icounter = function () {
        $('.ot-counter').each(function() {
            var pos_y   = $(this).offset().top - window.innerHeight;
            var $this   = $(this).find('span.num'),
                countTo = $this.attr('data-to'),
                during  = parseInt( $this.attr('data-time') ),
                topOfWindow = $(window).scrollTop();

            if ( pos_y < topOfWindow ) {    
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                {
                    duration: during,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            }
        });
    };

    var icounter2 = function () {
        $('.ot-counter2').each(function() {
            var pos_y   = $(this).offset().top - window.innerHeight;
            var $this   = $(this).find('span.num'),
                countTo = $this.attr('data-to'),
                during  = parseInt( $this.attr('data-time') ),
                topOfWindow = $(window).scrollTop();

            if ( pos_y < topOfWindow ) {    
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                {
                    duration: during,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
                });
            }
        });
    };

    var counter = function () {
        icounter();
        $(window).on('scroll', function() {
            icounter();
        });
    };

    var counter2 = function () {
        icounter2();
        $(window).on('scroll', function() {
            icounter2();
        });
    };

    /* --------------------------------------------------
	 * progress bar
	 * --------------------------------------------------*/
	function lineProgress() {
		$('.ot-progress').each(function() {
			var pos_y = $(this).offset().top;
			var value = $(this).find(".progress-bar").data('percent');
			var topOfWindow = $(window).scrollTop();
			if (pos_y < topOfWindow + 900) {
				$(this).find(".progress-bar").css({
					'width': value
				}, "slow");
			}
		});
	};

    function circleProgress() {
        $('.circle-progress').each(function() {
            var bar_color = $(this).data('color');
            var bar_hei   = $(this).data('height');
            var bar_size  = $(this).data('size');
            var pos_y = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (pos_y < topOfWindow + 900) {
                $(this).find('.inner-bar').easyPieChart({
                    barColor: bar_color,
                    trackColor: false,
                    scaleColor: false,
                    lineCap: 'square',
                    lineWidth: bar_hei,
                    size: bar_size,
                    animate: 1000,
                    onStart: $.noop,
                    onStop: $.noop,
                    easing: 'easeOutBounce',
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent)) + '%';
                    }
                });
            }
        });
    };
	
	var progressBar = function () {
		lineProgress();
		circleProgress();
		$(window).on('scroll', function() {
			lineProgress();
			circleProgress();
		});
	};

    /* --------------------------------------------------
	* tabs
	* --------------------------------------------------*/
	var customTabs = function () {

		$('.ot-tabs').each(function() {
			$(this).find('.tabs-heading li').first().addClass('current');
			$(this).find('.tab-content').first().addClass('current');
		});

		$('.tabs-heading li').on( 'click', function(){
			var tab_id = $(this).attr('data-tab');
			$(this).siblings().removeClass('current');
			$(this).parents('.ot-tabs').find('.tab-content').removeClass('current');
			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
		});
	};

	/* --------------------------------------------------
	* accordions
	* --------------------------------------------------*/
	var customAccordions = function () {
        $('.ot-accordions').each( function () {
            var allPanels = $(this).find('.acc-content');
    		$(this).find('.acc-toggle').on( 'click', function(){

                var $this = $(this),
                    $target = $this.next();

                if(!$target.hasClass('active')){
                    allPanels.removeClass('active').slideUp(300);
                    allPanels.parent().removeClass('current');
                    $target.addClass('active').slideDown(300);
                    $target.parent().addClass('current');
                }

                return false;
            });
            $(this).find('.acc-toggle:first').trigger('click');
        });
    };
    
    /* --------------------------------------------------
	* message box
	* --------------------------------------------------*/
	var messageBox = function(){
		$('.message-box > i').on( 'click', function() {
			$(this).parent().fadeOut();
		});
	};

    /* --------------------------------------------------
    * testimonials
    * --------------------------------------------------*/
    var testimonialSlider = function () {
        $('.ot-testimonials-slider').each( function () {
            var $selector = $(this),
                $show     = $selector.data('show'),
                $scro     = $selector.data('scroll'),
                $arr      = $selector.data('arrow'),
                $dots     = $selector.data('dots');
            $selector.not( '.slick-initialized' ).slick({
                slidesToShow: $show,
                slidesToScroll: $scro,
                arrows: $arr,
                dots: $dots,
                autoplay: false,
                autoplaySpeed: 7000,
                adaptiveHeight: true,
                prevArrow: '<button type="button" class="prev-nav"><i class="flaticon-back"></i></button>',
                nextArrow: '<button type="button" class="next-nav"><i class="flaticon-right-arrow-1"></i></button>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true
                        }
                    }
                ]
            });
        });
    };

    /* --------------------------------------------------
    * industries
    * --------------------------------------------------*/
   var industriesSlider = function () {
    $('.ot-industries-slider').each( function () {
        var $selector = $(this),
            $center   = $selector.data('center'),
            $show     = $selector.data('show'),
            $scro     = $selector.data('scroll'),
            $dots     = $selector.data('dots');
        $selector.not( '.slick-initialized' ).slick({
            slidesToShow: $show,
            slidesToScroll: $scro,
            arrows: false,
            dots: $dots,
            centerMode: $center,
            centerPadding: '19%',
            autoplay: true,
            autoplaySpeed: 7000,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="prev-nav"><i class="flaticon-back"></i></button>',
            nextArrow: '<button type="button" class="next-nav"><i class="flaticon-right-arrow-1"></i></button>',
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerMode: false,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        infinite: true,
                    }
                }
            ]
        });
    });
};

    /* --------------------------------------------------
	* projects filter isotope
	* --------------------------------------------------*/
    var projectsFilter = function ( $scope , $ ) {
    	$scope.find('.projects-grid').each( function(){
	        var $container = $(this); 
	        $container.isotope({ 
	            itemSelector : '.project-item', 
                animationEngine : 'css',
	        });

	        var $optionSets = $('.project_filters'),
	            $optionLinks = $optionSets.find('a');

	        $optionLinks.on('click', function(){
	            var $this = $(this);

	            if ( $this.hasClass('selected') ) {
	                return false;
	            }
	            var $optionSet = $this.parents('.project_filters');
	                $optionSets.find('.selected').removeClass('selected');
	                $this.addClass('selected');

	            var selector = $(this).attr('data-filter');
	                $container.isotope({ 
	                	filter: selector 
	                });
	            return false;
	        });
	    });
    };

    /* --------------------------------------------------
	* project carousel
	* --------------------------------------------------*/
    var portfolioSlider = function ( $scope , $ ) {
        $scope.find('.project-slider').each( function(){
            var $selector = $(this),
                $center = $selector.data('center'),
                $show   = $selector.data('show'),
                $scroll = $selector.data('scroll'),
                $arr    = $selector.data('arrow'),
                $dots   = $selector.data('dots'),
                $mshow  = $show,
                $marr   = $arr,
                $mdots  = $dots;
                if( $show == 3 ){ $mshow = $show - 1; }
                if( $(this).hasClass('arrow-s2') ){ $marr = false; $mdots = true; }
            $selector.not( '.slick-initialized' ).slick({
                slidesToShow: $show,
                slidesToScroll: 2,
                arrows: $arr,
                dots: $dots,
                centerMode: $center,
                centerPadding: '19%',
                autoplay: true,
                autoplaySpeed: 6000,
                adaptiveHeight: true,
                prevArrow: '<button type="button" class="prev-nav"><i class="flaticon-back"></i></button>',
                nextArrow: '<button type="button" class="next-nav"><i class="flaticon-right-arrow-1"></i></button>',
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: $mshow,
                            slidesToScroll: 1,
                            infinite: true,
                            centerPadding: '30px',
                            arrows: $arr,
                            dots: $dots
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            centerPadding: '30px',
                            arrows: $marr,
                            dots: $mdots
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: false,
                            arrows: false,
                            dots: true
                        }
                    }
                ]
            });
        } );
    };

    /* --------------------------------------------------
    * blog carousel
    * --------------------------------------------------*/
   var blogSlider = function ( $scope , $ ) {
    $scope.find('.post-carousel').each( function(){
        var $selector = $(this),
            $show   = $selector.data('show'),
            $scroll = $selector.data('scroll'),
            $dots   = $selector.data('dots');
            $selector.not( '.slick-initialized' ).slick({
            slidesToShow: $show,
            slidesToScroll: $scroll,
            arrows: false,
            dots: $dots,
            autoplay: true,
            autoplaySpeed: 6000,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="prev-nav"><i class="flaticon-back"></i></button>',
            nextArrow: '<button type="button" class="next-nav"><i class="flaticon-right-arrow-1"></i></button>',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: $dots
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }
            ]
        });
    } );
};


    /* --------------------------------------------------
    * coming soon
    * --------------------------------------------------*/
    var countDown = function(){
        $('.ot-countdown').each( function() {
            var date   = $(this).data('date'),
                zone   = $(this).data('zone'),
                day    = $(this).data('day'),
                days   = $(this).data('days'),
                hour   = $(this).data('hour'),
                hours  = $(this).data('hours'),
                min    = $(this).data('min'),
                mins   = $(this).data('mins'),
                second = $(this).data('second'),
                seconds = $(this).data('seconds');
            $(this).countdown({
                date: date,
                offset: zone,
                day: day,
                days: days,
                hour: hour,
                hours: hours,
                minute: min,
                minutes: mins,
                second: second,
                seconds: seconds
            }, function () {
                alert('Done!');
            });
        });
    };

    /**
     * Elementor JS Hooks
     */
    $(window).on("elementor/frontend/init", function () {

        /*counter*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/icounter.default",
            counter
        );

        elementorFrontend.hooks.addAction(
            "frontend/element_ready/icounter2.default",
            counter2
        );

        /*progress bar*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/iprogress.default",
            progressBar
        );

        /*custom tabs*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/itabs.default",
            customTabs
        );

        /*custom accordions*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/iaccordions.default",
            customAccordions
        );

        /*message box*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/imessagebox.default",
            messageBox
        );

        /*testimonials*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/itestimonials.default",
            testimonialSlider
        );

        /*industries*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/iindustries.default",
            industriesSlider
        );

        /*projects filter isotope*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/ipfilter.default",
            projectsFilter
        );

        /*projects carousel*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/irprojects.default",
            portfolioSlider
        );

        /*blog carousel*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/ipost_carousel.default",
            blogSlider
        );

        /*countdown*/
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/icountdown.default",
            countDown
        );

    });

} )( jQuery );