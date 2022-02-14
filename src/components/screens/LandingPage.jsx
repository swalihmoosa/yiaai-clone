import React from 'react'

import Header from '../includes/Header';
import Campuses from './landing/Campuses';
import Certification from './landing/Certification';
import Faq from './landing/Faq';
import Platform from './landing/Platform';
import School from './landing/School';
import Spotlight from './landing/Spotlight'
import Students from './landing/Students';
import Tech from './landing/Tech';
import Tefun from './landing/Tefun';


export default function LandingPage() {
	return (
		<>
			<Header />
			<Spotlight />
			<Tefun />
			<Campuses />
			<Tech />
			<Certification />
			<School />
			<Students />
			<Platform />
			<Faq />
		</>
	)
}
