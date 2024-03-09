import Keycloak from 'keycloak-js';
const keycloakInstance = new Keycloak();
const initialize = (onInit: Function) => {
	keycloakInstance
		.init({ pkceMethod: 'S256', onLoad: 'check-sso' })
		.then(() => {
			if (keycloakInstance.token) {
			}
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

const KeyCloakService = {
	Initialize: initialize,
	GetUserName: userName,
	Logout: doLogout,
	Login: doLogin,
	CheckAuth: isAuth,
};

export default KeyCloakService;
