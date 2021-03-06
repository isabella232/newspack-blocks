/**
 * External dependencies
 */
import { Path, SVG } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { __ } from '@wordpress/i18n';
import edit from './edit';

/**
 * Style dependencies - will load in editor
 */
import './view.scss';
import './editor.scss';

export const name = 'carousel';
export const title = __( 'Post Carousel' );

/* From https://material.io/tools/icons */
export const icon = (
	<SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<Path d="M0 0h24v24H0z" fill="none" />
		<Path d="M2 6h4v11H2zm5 13h10V4H7v15zM9 6h6v11H9V6zm9 0h4v11h-4z" fill="#36f" />
	</SVG>
);

export const settings = {
	title,
	icon,
	category: 'newspack',
	keywords: [ __( 'posts' ), __( 'slideshow' ), __( 'carousel' ) ],
	description: __( 'A carousel of posts.' ),
	attributes: {
		className: {
			type: 'string',
		},
		autoplay: {
			type: 'boolean',
			default: false,
		},
		delay: {
			type: 'number',
			default: 5,
		},
		postsToShow: {
			type: 'integer',
			default: 3,
		},
		authors: {
			type: 'array',
		},
		categories: {
			type: 'array',
		},
		tags: {
			type: 'array',
		},
		showDate: {
			type: 'boolean',
			default: true,
		},
		showAuthor: {
			type: 'boolean',
			default: true,
		},
		showAvatar: {
			type: 'boolean',
			default: true,
		},
		showCategory: {
			type: 'boolean',
			default: false,
		},
	},
	supports: {
		html: false,
		align: [ 'center', 'wide', 'full' ],
	},
	edit,
	save: () => null, // to use view.php
};
