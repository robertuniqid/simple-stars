jQuery.fn._starSystem = function() {

    var default_settings = {
        total_stars  : 5,
        active_stars : 0,
        color        : 'yellow'

    };

    var option_settings = {
        color_list : ['yellow', 'red', 'green', 'purple', 'blue']
    };

    jQuery.fn.hasAttr = function(name) {
        return this.attr(name) !== undefined;
    };

    this.each(function(){
        var total_stars  = jQuery(this).hasAttr('total')  ? parseInt(jQuery(this).attr('total'))  : default_settings.total_stars;
        var active_stars = jQuery(this).hasAttr('active') ? parseInt(jQuery(this).attr('active')) : default_settings.active_stars;
        var color        = jQuery(this).hasAttr('color')  ? jQuery(this).attr('color')  : default_settings.color;

        if(!jQuery.inArray(color, option_settings.color_list))
            color = default_settings.color;

        total_stars = active_stars > total_stars ? active_stars : total_stars;

        jQuery(this).find('a.star').remove();

        for(var i = 1; i <= total_stars ; i++) {
            var extra_class = color + ' ';

            var difference = active_stars - i + 1;

            if(difference >= 1)
                extra_class += 'active';

            jQuery(this).append('<a class="star' + ' '+ extra_class + '" style="display:none;"></a>');
        }

        for(var i = 1; i <= total_stars ; i++)
            jQuery(this).find('.star').eq(i - 1).delay(i * 100).show('fast');

        jQuery(this).after('<div style="clear:both"></div>');
    });

    return true;
};