import SocialLink from "./SocialLink";

export default props => (
	<div className="header">
		<div className="header__picture">
			<img
				src="/static/img/ben.png"
				className="picture"
				alt="Profile picture"
			/>
		</div>
		<div className="header__info">
			<h1>{props.name}</h1>
			<h2>{props.title}</h2>
			<ul className="header__contact-list">
				{props.contact.map((contact, idx) => (
					<SocialLink
						type={contact.type}
						label={contact.label}
						href={contact.href}
						key={idx}
					/>
				))}
			</ul>
		</div>
	</div>
);
