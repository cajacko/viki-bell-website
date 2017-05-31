<?php
// Setup the theme
function viki_bell_website_setup() {
    viki_bell_website_setup_media();
    add_post_type_support("page", "excerpt");
}

add_action( 'after_setup_theme', 'viki_bell_website_setup' );
