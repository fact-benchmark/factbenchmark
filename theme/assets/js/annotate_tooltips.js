
var tooltip_message = "Highlight any text and click 'annotate' to leave feedback. We'd appreciate it!";
var tooltip_selector = ".intro-content p, .content p, .content li";
var total_show_count = 0;
var max_show_count = 50;

( function( $, win) {
	'use strict';
    
    var tooltip_addded = false;

	//---------- annotate tooltip hovers 
    var targets = $(tooltip_selector),
        target  = false,
        tooltip = false,
        tip;

    targets.on('mouseover', function() {
    	
        target  = $(this);
        tip     = tooltip_message;
        tooltip = $('<div class="tooltip"></div>');

        if (tooltip_addded)
            return false;

        if (!tip || tip === '') {
            return false;
        }

        target.removeAttr('title');
        tooltip.css('opacity', 0).html(tip).appendTo('body');

        var initTooltip = function() {
            if ($(win).width() < tooltip.width() * 1.5) {
                tooltip.css('max-width', $(win).width() / 2);
            } else {
                tooltip.css('max-width', 365);
            }

            if ($(win).width() < (tooltip.width() + target.width() + 20)) {
                return;
            }

            // var posLeft = target.offset().left + (target.width() / 2) - (tooltip.width() / 2),
            //     posTop = target.offset().top - tooltip.height() - 20;

            var posLeft = target.offset().left + target.width() + 20,
                posTop = target.offset().top - target.height() / 2;


            tooltip.addClass('left');

            // if (posLeft < 0) {
            //     posLeft = target.offset().left + target.width() / 2 - 20;
            //     tooltip.addClass('left');
            // } else {
            //     tooltip.removeClass('left');
            // }

            // if (posLeft + tooltip.width() > $(win).width()) {
            //     posLeft = target.offset().left - tooltip.width() + target.width() / 2 + 20;
            //     tooltip.addClass('right');
            // } else {
            //     tooltip.removeClass('right');
            // }

            // if (posTop < 0) {
            //     posTop = target.offset().top + target.height();
            //     tooltip.addClass('top');
            // } else {
            //     tooltip.removeClass('top');
            // }

            if (++total_show_count>max_show_count) {
                return;
            }
        
            tooltip.css({
                left: posLeft,
                top: posTop
            }).animate({
                translateY: '10px',
                opacity: 1
            }, 900 );

            // basically disabled the tool tip function completely
            tooltip_addded = true;
            $("#tooltip_holder").append(tooltip);

        };

        initTooltip();
        $(win).resize(initTooltip);

        var removeTooltip = function() {
            // tooltip.animate({
            //     translateY: '-10px',
            //     opacity: 0
            // }, 50, 'linear', function() {
            //     $(this).remove();
            // });

            // target.attr('title', tip);
        };

        target.on('mouseout', removeTooltip);
        tooltip.on('click', removeTooltip);
    });
}(jQuery, window));