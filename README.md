# DirectPay

DirectPay is a payment tracking system designed to help users track payments without the need for third-party services like Razorpay or Stripe. By directly interacting with the payment data, DirectPay ensures a transparent and simple way to monitor payments in real time.

With DirectPay, users can easily track their payments by simply providing their details, and the system will automatically update the status when the payment is confirmed.

## Features

**Simple Payment Tracking:** Directly track payments made by users based on their name, middle name, and surname.
**Real-Time Updates:** The status of the payment is updated immediately once the payment information is registered.
**Customizable Data:** Users can input their name, middle name, and surname, and these will be stored for later payment verification.
**Local Data Storage:** Payments are stored locally in a JSON file (payments.json) for easy reference and status tracking.

## Tech Stack

DirectPay utilizes several key technologies to function:

**Node.js:** The server-side framework used to handle requests and manage payment data.
**Express.js:** Web framework for building APIs and handling HTTP requests.
**JSON File Storage:** Payment details and status are stored in a local JSON file for simplicity and ease of use.
