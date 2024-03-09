import Cookies from 'js-cookie';
import React, { useState } from 'react';

const CookiePrompt: React.FC = () => {
	const [accepted, setAccepted] = useState(convertToBoolean(Cookies.get('cookieAccepted')));

	const handleAccept = () => {
		Cookies.set('cookieAccepted', 'true', { expires: 365 });
		setAccepted(true);
	};

	if (accepted) {
		return null;
	}

	return (
		<div className="cookie-prompt">
			<p>This website uses cookies. By continuing to use this site, you accept our use of cookies.</p>
			<button onClick={handleAccept}>Accept</button>
		</div>
	);
};

function convertToBoolean(input: string | undefined): boolean | undefined {
	try {
		if (!input) {
			return undefined;
		}
		return JSON.parse(input.toLowerCase());
	} catch (e) {
		return undefined;
	}
}

export default CookiePrompt;
