<?php
/*This file is part of blank-headless theme.

All functions of this file will be loaded before of parent theme functions.
Learn more at https://codex.wordpress.org/Child_Themes.

Note: this function loads the parent stylesheet before, then child theme stylesheet
(leave it in place unless you know what you are doing.)
*/

function wow_enqueue_child_styles() {
$parent_style = 'parent-style'; 
	wp_enqueue_style($parent_style, get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 
		'child-style', 
		get_stylesheet_directory_uri() . '/style.css',
		array( $parent_style ),
		wp_get_theme()->get('Version') );
	}
add_action( 'wp_enqueue_scripts', 'wow_enqueue_child_styles' );

/*Write here your own functions */

/* Add specific endpoints to REST API. */
add_action( 'rest_api_init', 'slug_register_event_details' );

function slug_register_event_details() {
	register_rest_field( 'tribe_events',
		'eventDetails',
		array(
			'get_callback'    => 'slug_get_event_details',
			'schema'          => null
		)
	);
}

function slug_get_event_details( $object, $field_name, $request ) {

    /*$postId = tribe_get_venue_id( $object[ 'id' ]); */

	$output[ 'eventId' ]          = (float) $object[ 'id' ];
	$output[ 'venueName' ]        = (string) tribe_get_venue($object[ 'id' ]);
	$output[ 'venueNameAddress' ] = (string) tribe_get_venue_single_line_address($object[ 'id' ], false);
	$output[ 'venueWebsite' ]     = (string) tribe_get_venue_website_url($object[ 'id' ]);
	$output[ 'startDate' ]        = (string) tribe_get_start_date($object[ 'id' ], false, 'Y-m-d H:i');
	$output[ 'startTime' ]        = (string) tribe_get_start_date($object[ 'id' ], false, 'H:i:s');

	return $output;

}