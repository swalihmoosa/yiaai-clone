import React from 'react'

import Header from '../includes/Header';
import Campuses from './landing/Campuses';
import Spotlight from './landing/Spotlight'
import Tefun from './landing/Tefun';


export default function LandingPage() {
	return (
		<>
			<Header />
			<Spotlight />
			<Tefun />
			<Campuses />
		</>
	)
}
