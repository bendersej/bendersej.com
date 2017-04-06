//@flow
import React from 'react';
import Link from 'next/link'
import Head from 'next/head';
import {BACKGROUND, EDUCATION, MISC} from '../lib/constants';

const Tile = ({content, key}) => (
	<a className="tile" href={content.href} target="_blank" key={key}>
		<img src={content.img} />
		<div className="tile__content">
				<p>{content.title}</p>
				<p>{content.duration}</p>
				<div>
					{content.skills && content.skills.map((skill, idx) => <span className="tile__tag" key={idx}>{skill}</span>)}
				</div>
		</div>
		<style jsx>{`
			.tile {
				position: relative;
				display: flex;
				padding: 16px 0 10px 185px;

				> img {
					position:absolute;
					left:0;
					top:0;
					height: 60px;
				}
			}

			.tile__content {
				> p {
					margin:0;
				}
			}

      .tile__tag {
				border: 2px solid #d6d5d5;
				border-radius: 2px;
				padding: 3px 5px;
				font-size: 11px;
				margin: 5px;
				color: #737373;
				transition: 0.15s ease-in;
			}
    `}</style>
	</a>
);

export default (props) => (
	<div>
		<Head>
			<title>About</title>
		</Head>
		<div>
			<h3>background</h3>
			{BACKGROUND.map((experience, idx) => <Tile key={idx} content={experience}/>)}
			<h3>education</h3>
			{EDUCATION.map((education, idx) => <Tile key={idx} content={education}/>)}
			<h3>skills & interests</h3>
			{
				MISC.map((misc, idx) => (
					<ul key={idx}>
						{misc.items.map((item, index) => <li key={index}>{item}</li>)}
					</ul>
				)
			)}
		</div>
		<style jsx>{`
			h3 {
				width: 100%;
				font-size: 28px;
				color: #AAA;
				text-transform: uppercase;
				margin: 30px 0 0 0;
				font-weight: 400;
			}
    `}</style>
  </div>
	
)