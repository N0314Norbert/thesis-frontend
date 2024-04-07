import { Backdrop } from '@mui/material';
import Cookies from 'js-cookie';
import React, { useState } from 'react';

const CookiePrompt: React.FC = () => {
	const [accepted, setAccepted] = useState<Boolean>(convertToBoolean(Cookies.get('cookieAccepted')));

	const handleAccept = () => {
		Cookies.set('cookieAccepted', 'true', { expires: 365 });
		setAccepted(true);
	};

	if (accepted) {
		return null;
	}

	return (
		<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={!accepted}>
			<div className="cookie-prompt">
				<p>This website uses cookies. By continuing to use this site, you accept our use of cookies.</p>
				<button onClick={handleAccept} className="cookie-prompt-button">
					Accept
				</button>
			</div>
		</Backdrop>
	);
};

function convertToBoolean(input: string | undefined): boolean {
	try {
		if (!input) {
			return false;
		}
		return JSON.parse(input.toLowerCase());
	} catch (e) {
		return false;
	}
}

export default CookiePrompt;
