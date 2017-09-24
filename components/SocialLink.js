import Medium from "../static/img/medium.svg";
import Dribbble from "../static/img/dribbble.svg";
import Twitter from "../static/img/twitter.svg";
import LinkedIn from "../static/img/linkedin.svg";
import Email from "../static/img/email.svg";

import React from "react";

const iconOf = {
	medium: <Medium />,
	dribbble: <Dribbble />,
	twitter: <Twitter />,
	linkedin: <LinkedIn />,
	email: <Email />
};

export default props => {
	return (
		<li className="contact__link tooltip" aria-label={props.label}>
			<a
				className={`contact__icon contact__icon--${props.type}`}
				href={props.type === "email" ? `mailto:${props.href}` : props.href}
				target="_blank"
			>
				{iconOf[props.type]}
				<span>{props.href}</span>
			</a>
		</li>
	);
};
