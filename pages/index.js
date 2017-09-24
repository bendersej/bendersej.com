//@flow
import React from "react";
import Link from "next/link";
import Head from "../components/Head";

export default () => {
	const handleChickEyeClick = () => {
		const audio = new Audio("/static/horse-neighing.mp3");
		return audio.play();
	};

	return (
		<div>
			<Head title="bendersej" />
			<div className="home">
				<div className="home__chick">
					<div className="home__chick-eye" onClick={handleChickEyeClick} />
				</div>
				<div>
					<h1 className="home__header">bendersej</h1>
					<Link prefetch href="/about">
						<a className="home__link">The only link on this page</a>
					</Link>
				</div>
			</div>
		</div>
	);
};
