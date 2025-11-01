import Link from 'next/link';
import React from 'react';

export const BackButton: React.FunctionComponent<{}> = () => {
	return (
		<>
			<Link href="/" className="backButton">
				Back
			</Link>
			<style jsx>
				{`
					:global(.backButton) {
						margin-top: 24px;
						color: inherit;
						position: relative;
						padding-left: 25px;
						font-size: 20px;
						text-decoration: none;
					}

					:global(.backButton:hover) {
						text-decoration: none;
					}

					:global(.backButton::before) {
						position: absolute;
						transition: 0.2s linear;
						left: 0;
						top: 1px;
						content: '<';
					}

					:global(.backButton::after) {
						position: absolute;
						top: 100%;
						content: '';
						height: 2px;
						background: #2f2f2f;
						opacity: 0;
						transition: linear 0.3s 0.1s;
						left: 34px;
						width: 34px;
					}

					:global(.backButton:hover::before) {
						transform: translateX(10px);
						font-weight: normal;
					}

					:global(.backButton:hover::after) {
						opacity: 1;
					}
				`}
			</style>
		</>
	);
};
