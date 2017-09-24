//@flow
import React from "react";
import Link from "next/link";
import Head from "../components/Head";
import Tile from "../components/Tile";
import Header from "../components/Header";
import { BACKGROUND, EDUCATION, MISC, CONTACT } from "../lib/constants";

export default props => (
	<div>
		<Head title="About" />
		<div className="about">
			<Header
				title="Senior Front-End Engineer"
				name="Benjamin André-Micolon"
				contact={CONTACT}
			/>
			<h3 className="about__header">background</h3>
			{BACKGROUND.map((experience, idx) => (
				<Tile key={idx} content={experience} isHoverable />
			))}
			<h3 className="about__header">education</h3>
			{EDUCATION.map((education, idx) => (
				<Tile key={idx} content={education} />
			))}
			<h3 className="about__header">skills & interests</h3>
			<section className="about__skills">
				{MISC.map((misc, idx) => (
					<ul key={idx} className="about__skills-block">
						<li>{misc.title}</li>
						{misc.items.map((item, index) => <li key={index}>{item}</li>)}
					</ul>
				))}
			</section>

			<button onClick={() => window.print()} className="about__print-btn">
				Print or Save as PDF
			</button>
		</div>
	</div>
);
