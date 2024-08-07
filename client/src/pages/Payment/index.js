import PaymentForm from 'features/Payment/PaymentForm';

function Payment() {
    return <PaymentForm onSubmit={(values) => console.log(values)} products={[1, 2]} />;
}

export default Payment;
