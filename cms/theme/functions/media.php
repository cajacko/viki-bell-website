<?php

// Setup theme
function viki_bell_website_setup_media() {
    add_theme_support( 'post-thumbnails' );

    /*
     * Add various image sizes so that images
     * can be progressively loaded at higher
     * resolutions.
     */
    for($i = 2400; $i > 300; $i = $i - 50) {
        add_image_size( 'width-' . $i, $i );
    }
}
