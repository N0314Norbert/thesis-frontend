import Keycloak from 'keycloak-js';
const keycloakInstance = new Keycloak();
const initialize = (onInit: Function) => {
	keycloakInstance
		.init({ pkceMethod: 'S256', onLoad: 'check-sso' })
		.then(() => {
			onInit();
		})
		.catch((e) => {
			console.dir(e);
			console.log(`keycloak init exception: ${e}`);
		});
};

const userName = () => keycloakInstance.tokenParsed?.preferred_username;

const doLogout = keycloakInstance.logout;

const doLogin = keycloakInstance.login;

const isAuth = () => keycloakInstance.authenticated;

const getToken = async () => {
	try {
		await keycloakInstance.updateToken(30);
		return keycloakInstance.token;
	} catch (error) {
		console.error('Failed to refresh token:', error);
	}
};

const KeyCloakService = {
	Initialize: initialize,
	GetUserName: userName,
	Logout: doLogout,
	Login: doLogin,
	CheckAuth: isAuth,
	GetToken: getToken,
};

export default KeyCloakService;
