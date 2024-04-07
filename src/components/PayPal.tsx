import Cookies from 'js-cookie';
import { PayPalButton } from 'react-paypal-button-v2';
import { uploadDataToTableStorage } from '../utils/apihandlers';
import buildInvoiceArray from '../utils/buildInvoiceArray';
import KeyCloakService from '../utils/keyCloak';
function PayPalComponent(props: any) {
	const onSuccess = (payment: any) => {
		Cookies.remove('Cart');
		const invoices = buildInvoiceArray(KeyCloakService.GetUserName(), payment.id, props.products);
		uploadDataToTableStorage(invoices);
	};
	const onError = (_: any) => {};

	return (
		props.total > 0 && (
			<PayPalButton
				amount={props.total}
				currency={'EUR'}
				options={{
					clientId: 'AQztB4ncEgd2fqp6TENLIBa9myU_Lf7Bq4n9ilWk9fUM_cYPewd3Q7PC6SWx3qGJTV4rZ7bbH_ES_iH4',
					currency: 'EUR',
					intent: 'capture',
				}}
				createOrder={(_: any, actions: any) => {
					return actions.order.create({
						purchase_units: [
							{
								amount: {
									value: props.total,
								},
							},
						],
					});
				}}
				onApprove={(_: any, actions: any) => {
					return actions.order.capture().then(onSuccess);
				}}
				onError={onError}
			/>
		)
	);
}

export default PayPalComponent;
