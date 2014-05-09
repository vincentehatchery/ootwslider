/*
 * Out of This World Slider - jQuery Plugin
 * 
 * Responsive slider/carousel supporting variable width images
 *
 * Demo:
 *
 * Copyright (c) 2014 Vincent Alcantara vincent@ehatchery.com.au
 *
 * Version 0.1
 * 5 May 2014
 *
 * Licensed under :
 *
 */
 (function ($) {
 	$.fn.ootwslider = function() {
    
   // $('head').append('<style type="text/css">* {border: 1px black solid;}</style>');
    
    	// Add the navigation previous(<)/next(>) icons
    	//this.prepend("<div class='ootw-prev' id='previousSlide'>Previous Slide</div><div class='ootw-next' id='nextSlide'> Next Slide </div>");
        this.parent().append("<div class='ootw-controls'>" +
                                "<div class='ootw-controls-prev-next'>" +
                                    "<div class='ootw-prev' id='previousSlide'></div>" +
                                    "<div class='ootw-next' id='nextSlide'></div>" + 
                                "</div>" + 
                             "</div>");
    	//this.append("<div id='nextSlide'>><div>");

    	// Grab all the images in the slider
    	var $items = this.find('li img');

    	// Store the widths in an Array
    	var itemWidths = new Array();
    	$items.each(function (index,elem){
    		
    		//itemWidths[index] = $(this).width();
    		itemWidths[index] = $(elem).width();
    		
    		
    	});
    	
    	//Initialise
    	var activeSlide = 0;
    	var slideXCoordinate = 0;

    	//Bind click event when pressing nextSlide icon
    	this.parent().find( '.ootw-next' ).click(function() {
    		
    		if (activeSlide < itemWidths.length) {

              	slideXCoordinate = slideXCoordinate - itemWidths[activeSlide];
                activeSlide++;
	  			$items.css('transform', 'translate(' + slideXCoordinate + 'px,0');
                $items.css('-webkit-transform', 'translate(' + slideXCoordinate + 'px,0');
                $items.css('-ms-transform', 'translate(' + slideXCoordinate + 'px,0');
                    return false;
			}
            
			
		});

		this.parent().find( '.ootw-prev' ).click(function() {
    		
    		if (activeSlide > 0) {
                --activeSlide;
    			slideXCoordinate = slideXCoordinate + itemWidths[activeSlide];
	  			$items.css('transform', 'translate(' + slideXCoordinate + 'px,0');
                $items.css('-webkit-transform', 'translate(' + slideXCoordinate + 'px,0');
                $items.css('-ms-transform', 'translate(' + slideXCoordinate + 'px,0');
            return false;
            }
    		
	    });
    	//items.css('width', itemWidths[0] +'px');

    	//$('body').css('transform', 'translateY(-' + dest + 'px)');


    	//Add a click handler for the previous and next buttons
    };
 })(jQuery);