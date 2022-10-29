import Link from 'next/link';
import React from 'react';

export const BackButton: React.FunctionComponent<{}> = () => {
	return (
		<>
			<Link href="/">
				<a className="backButton">Back</a>
			</Link>
			<style jsx>
				{`
					.backButton {
						margin-top: 24px;
						color: inherit;
						position: relative;
						padding-left: 25px;
						font-size: 20px;
					}

					.backButton:hover {
						text-decoration: none;
					}

					.backButton::before {
						position: absolute;
						transition: 0.2s linear;
						left: 0;
						top: 1px;
						content: '<';
					}

					.backButton::after {
						position: absolute;
						top: 100%;
						content: '';
						height: 2px;
						background: hsl(245deg, 100%, 60%);
						opacity: 0;
						transition: linear 0.3s 0.1s;
					}

					.backButton:hover::before {
						transform: translateX(10px);
						font-weight: normal;
					}

					.backButton:hover::after {
						opacity: 1;
					}

					.backButton::after {
						left: 34px;
						width: 34px;
					}
				`}
			</style>
		</>
	);
};
