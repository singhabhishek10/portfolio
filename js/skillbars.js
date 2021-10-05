/*
    Skillbars - A Super Lightweight, Responsive, functional skillbar plugin
    Version 1.0.0
    Ryan Fitzgerald
    https://RyanFitzgerald.ca/
    ---
    Repo: http://github.com/ryanfitzgerald/skillbars
    Issues: http://github.com/ryanfitzgerald/skillbars/issues
    Licensed under MIT Open Source
 */

(function($) {

    // Check if element is in viewport
    var checkViewport = function(elem) {
        if (typeof jQuery === "function" && elem instanceof jQuery) {
            elem = elem[0];
        }

        var rect = elem.getBoundingClientRect();

        return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Validate provided color
    var ValidateColor = function(color) {
        return (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color));
    }

    $.fn.skillbars = function(options) {

        // Overide defaults, if provided
        var settings = $.extend({
            color: null,
            style: 1,
            showLevel: false,
            animate: true,
            speed: 600
        }, options);

        // Allow chaining and process each DOM node
        return this.each(function() {

            // --- Define Variables ---
            var $this = $(this); // Store reference to self
            var $bars = $(this).children('li'); // Store user entered content

            // Add overall wrapper
            $this.addClass('skillbars');

            // --- Create skillbar layout ---
            $bars.each(function() {

                // Define Variables
                var skillText = $(this).text();
                var skillLevel = $(this).data('level') || 0;

                // Add wrapping class to each skillbar and create span
                $(this).addClass('skillbar').html('<span class="skillbar-text">'+skillText+'</span>');

                // Create skillbar layout
                $(this).append('<span class="skillbar-bar"><span class="skillbar-level"></span></span>');

                // If animate is set to false, set width directly
                if (!settings.animate) $(this).find('.skillbar-level').css('width', skillLevel+'%');

            });

            // --- Set color if given ---
            if (settings.color != null) {

                // Validate color provided
                if (!ValidateColor(settings.color)) return;

                // Set color
                $('.skillbar-level').css('background-color', settings.color);

            }

            // --- Add Style ---
            $this.addClass('skillbar-style-'+settings.style);

            // --- Create skillbar if animated is set to true ---
            if (settings.animate) {

                // If the bars are in the viewport
                if (checkViewport($bars[0])) {
                    // Iterate through each skillbar
                    $bars.each(function() {
                        $(this).find('.skillbar-level').stop().animate({
                            width: $(this).data('level')+'%'
                        }, settings.speed);
                    });
                }

                // On scroll
                $(window).scroll(function() {

                    // If the bars are in the viewport and haven't already been triggered
                    if (checkViewport($bars[0]) && $bars.find('.skillbar-level').width() === 0) {
                        // Iterate through each skillbar
                        $bars.each(function() {
                            $(this).find('.skillbar-level').stop().animate({
                                width: $(this).data('level')+'%'
                            }, settings.speed);
                        });
                    }

                });

            }

            // --- Add levels if set to true ---
            if (settings.showLevel) {
                $bars.each(function() {
                    $(this).find('.skillbar-bar').append('<span class="skillbar-percent">'+$(this).data('level')+'%</span>')
                });
            }

        });

    }

})(jQuery);
