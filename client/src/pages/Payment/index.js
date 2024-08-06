import PaymentForm from 'features/Payment/PaymentForm';

function Payment() {
    return <PaymentForm onSubmit={(values) => console.log(values)} products={[]} />;
}

export default Payment;
