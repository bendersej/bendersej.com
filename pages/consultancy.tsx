import React from 'react';
import { Head } from '../components/Head';
import { CURRENT_TITLE } from '../lib/constants';

const About = () => (
	<React.Fragment>
		<Head title="bendersej – consultancy" url="https://bendersej.com/consultancy" description={CURRENT_TITLE} />
		<div className="consultancy">WIP</div>
		<style jsx>
			{`
				.consultancy {
					padding: 30px 0;
					display: flex;
					flex-direction: column;
					align-items: center;
				}
			`}
		</style>
	</React.Fragment>
);

export default About;
