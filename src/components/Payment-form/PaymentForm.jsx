import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    console.log("hello");
    e.preventDefault();
    if (!stripe || !elements) return;

    const response = await fetch("/.vercel/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 10000 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;
    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Akhil Palsra",
        },
      },
    });
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  return (
    <div className="h-[300px] flex flex-col justify-center items-center bg-gray-200">
      <form onSubmit={paymentHandler} className="h-[100px] min-w-[500px]">
        <h2 className="mb-4 text-xl">Credit Card Payment: </h2>
        <CardElement />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-black mt-4 text-white text-xl"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
