import Head from "next/head";
import stylesheet from "../styles/index.scss";

export default props => (
	<Head>
		<title>{props.title || ""}</title>
		<meta name="description" content={props.description} />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1, user-scalable=no"
		/>
		<link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
		<link rel="apple-touch-icon" href="/static/touch-icon.png" />
		<link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
		<link rel="icon" href="/static/favicon.ico" />
		<meta property="og:url" content={props.url} />
		<meta property="og:title" content={props.title} />
		<meta property="og:description" content={props.description} />
		<meta name="twitter:site" content={props.url} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content={props.ogImage} />
		<meta property="og:image" content={props.ogImage} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		<link
			href="https://fonts.googleapis.com/css?family=Inconsolata:400,700"
			rel="stylesheet"
		/>
		<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
	</Head>
);
