import React from "react";
import axios from "axios";

function UpgradePage({user}) {
  const handlePayment = async () => {
    try {
      // Step 1: Create order from backend
      const { data } = await axios.post(
        "http://localhost:8080/payment/payment-create",
        { amount: 1 }, // Rs. 500
        { withCredentials: true }
      );

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // only Key_ID (safe to expose)
        amount: 1 * 100,
        currency: "INR",
        name: "Shubh GPT",
        description: "Upgrade to Premium",
        order_id: data.orderId,
        handler: async function (response) {
          // Step 2: Verify payment with backend
          const verifyRes = await axios.post(
            "http://localhost:8080/payment/verify-payment",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            },
            { withCredentials: true }
          );

          if (verifyRes.data.success) {
            alert("Payment successful! 🎉 Upgraded to Premium.");
            window.location.href = "/dashboard"; // redirect to dashboard
          } else {
            alert("Payment verification failed ❌");
          }
        },
        prefill: {
       name: user?.name || "Guest",
      email: user?.email || "guest@example.com",
       contact: user?.phone || "0000000009",
},

         theme: {
       color: "#ff6600", // orange theme
    },

      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment initiation failed ❌");
    }
  };

  return (
    <div className="container text-center mt-5">
      <h2>Upgrade to Premium 🚀</h2>
      <p>Get unlimited chat history and advanced AI features.</p>
      <button onClick={handlePayment} className="btn btn-success px-4 py-2">
        Pay ₹ 1
      </button>
    </div>
  );
}

export default UpgradePage;
