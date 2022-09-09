import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const data = [
	{
		title: 'NΞT_Runner ⟠',
		description: 'Co-Founder and Web3 Developer',
		linkGithub: <a href="https://github.com/Guglielmo15" target="_blank" rel="noopener noreferrer"><FaGithub /></a>,
		linkTwitter: <a href="https://twitter.com/Guglielmo1519" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>,
		linkLinkedin: <a href="https://www.linkedin.com/in/guglielmo-ruffo-125b1b146/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>,
	},
	{
		title: 'Crypt0₿ox',
		description: 'Co-Founder and Web3 Developer',
		linkTwitter: <a href="https://twitter.com/Crypt0Box" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>,
	},
	{
		title: 'faccobus11',
		description: 'Co-Founder and Project Manager',
		linkTwitter: <a href="https://twitter.com/faccobus11" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>,
	},
	// {
	// 	title: 'Our servers',
	// 	description: 'Find more about hardware and software used for your service',
	// 	image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg',
	// },
	// {
	// 	title: 'Our top clients',
	// 	description: 'We have provided services to top clients in tech industry',
	// 	image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
	// },
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};