import { PayPalButton } from 'react-paypal-button-v2';

function PayPalComponent() {
	const onSuccess = (payment: any) => {};

	const onError = (data: any) => {};

	return (
		<PayPalButton
			amount="10.00"
			currency="USD"
			options={{
				clientId: 'AQztB4ncEgd2fqp6TENLIBa9myU_Lf7Bq4n9ilWk9fUM_cYPewd3Q7PC6SWx3qGJTV4rZ7bbH_ES_iH4',
				currency: 'USD',
				intent: 'capture', // Use 'authorize' if you want to capture payment later
			}}
			createOrder={(data: any, actions: any) => {
				return actions.order.create({
					purchase_units: [
						{
							amount: {
								value: '10.00',
							},
						},
					],
				});
			}}
			onApprove={(data: any, actions: any) => {
				return actions.order.capture().then(onSuccess);
			}}
			onError={onError}
		/>
	);
}

export default PayPalComponent;
