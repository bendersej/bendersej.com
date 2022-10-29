import React from 'react';
import { BackButton } from '../components/BackButton';
import { Head } from '../components/Head';
import { CURRENT_TITLE } from '../lib/constants';

const About = () => (
	<React.Fragment>
		<Head title="bendersej – consultancy" url="https://bendersej.com/consultancy" description={CURRENT_TITLE} />
		<div className="consultancy">
			<div className="biography">
				<h1>
					<a className="aboutLink" href="/about">
						Benjamin André-Micolon
					</a>
				</h1>
				<div className="pictureContainer">
					<img src="/img/ben.png" className="picture" alt="Profile picture" />
					<div className="bioContainer">
						<p>
							In 2014, Benjamin moved to Estonia, determined to understand how and what the Estonians did to establish
							their world leadership in digital society and government.
						</p>
						<p>
							From 2014 to 2015, he completed his studies in Mechanical Engineering as part of the Erasmus Partnership
							that he set up between the <a href="https://taltech.ee/en">Tallinn Tech</a> and{' '}
							<a href="https://www.univ-lyon1.fr/en">Université Lyon 1</a>.
						</p>
						<p>
							While studying, he founded his own startup in Estonia - a new type of social platform,{' '}
							<a href="https://tree.social">Tree [2014-2017]</a> - together with{' '}
							<a href="https://antoinefossey.com">Antoine Fossey</a>.
						</p>
					</div>
				</div>

				<p>
					In the following years Benjamin joined multiple promising startups, including{' '}
					<a href="https://pipedrive.com">Pipedrive</a> (which became a unicorn in 2021) and{' '}
					<a href="https://sixfold.com">Sixfold</a>, a real-time visibility platform, where he was one of the first
					employees.
				</p>
				<p>
					In 2019, Benjamin became the youngest <a href="https://www.cnccef.org/en/home/">CCEF</a> in the world.
				</p>
				<p>
					Throughout the years Benjamin has consulted two French ambassadors to Estonia: Claudia Delmas-Scherer and Éric
					Lamouroux as well as met with multiple French politicians and public servants, among which: Fleur Pellerin,
					Axelle Lemaire and Come Berbain.
				</p>
				<p>
					Benjamin currently works for the Finnish-American startup <a href="https://robocorp.com">Robocorp</a> as an
					Engineering Lead.
				</p>
				<p>
					{' '}
					On a more personal side, Benjamin speaks Estonian (B1), owns an apartment in the center of Tallinn and is
					engaged to an Estonian. Together they are the biggest Digital Creator for local travelling:{' '}
					<a href="https://eestipaigad.ee/en">Eesti Paigad</a>.
				</p>
			</div>

			<div className="cta">
				<p>
					<em>
						<b>
							Benjamin's combination of skills and experience allows him to provide unique insights into understanding
							Estonia and Estonians from a French perspective as well as how these two cultures can benefit from each
							other.
						</b>
					</em>
				</p>
				<p>
					<b>Starting from 2022, Benjamin offers consultation services</b>
				</p>
			</div>
			<div className="contact">
				<p>Two hours of consultation: 490€</p>
				<a href="mailto:consultancy@bendersej.com">
					<b>Book a consultation</b>
				</a>
			</div>
			<BackButton />
		</div>
		<style jsx>
			{`
				.consultancy {
					padding: 60px 0 30px;
					display: flex;
					flex-direction: column;
					align-items: center;
					text-align: left;

					font-size: 14px;
					line-height: 1.4;
				}

				.pictureContainer {
					display: flex;

					.picture {
						width: 184px;
						height: 184px;
						border-radius: 4px;
						margin-right: 18px;
					}
				}

				a {
					color: hsl(245deg, 100%, 60%);

					&:hover {
						text-decoration: underline;
					}
				}

				.biography {
					p {
						margin-bottom: 14px;
					}
				}

				h1 {
					margin-bottom: 34px;

					a {
						color: inherit;
					}
				}

				.cta {
					margin: 28px 0;
					p {
						margin-bottom: 14px;
					}
				}

				.contact {
					text-align: center;

					p {
						margin-bottom: 14px;
					}

					a {
						color: black;
						text-decoration: underline;
					}
				}

				@media screen and (max-width: 768px) {
					.pictureContainer {
						flex-wrap: wrap;

						.picture {
							padding-bottom: 18px;
						}
					}
				}
			`}
		</style>
	</React.Fragment>
);

export default About;
