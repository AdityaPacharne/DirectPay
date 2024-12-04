# DirectPay

DirectPay is a payment tracking system designed to help users track payments without the need for third-party services like Razorpay or Stripe. By directly interacting with the payment data, DirectPay ensures a transparent and simple way to monitor payments in real time.

With DirectPay, users can easily track their payments by simply providing their details, and the system will automatically update the status when the payment is confirmed.

## Features

**Simple Payment Tracking**: Track payments by users' name, middle name, and surname.  
**Real-Time Updates**: Payment status updates immediately upon registration.<br>
**Customizable Data**: Users' name, middle name, and surname are stored for verification.<br>
**Local Data Storage**: Payments are stored in a local JSON file (payments.json) for tracking.<br>

## Tech Stack

DirectPay utilizes several key technologies to function:

**Node.js**: The server-side framework used to handle requests and manage payment data.<br>
**Express.js**: Web framework for building APIs and handling HTTP requests.<br>
**JSON File Storage**: Payment details and status are stored in a local JSON file for simplicity and ease of use.<br>

## Installation

DirectPay requires Nodejs and Google Messages on your Mobile Phone and [Google Messages Web](https://messages.google.com/web/authentication) signed in.

- Clone this repository
```bash
git clone https://github.com/AdityaPacharne/DirectPay.git
```

- Move inside the directory
```bash
cd DirectPay
```

- Install and Update Dependencies
```bash
npm install
```

- Enter the desired amount in place of 1000
```bash
node modify.js 1000
```

- Execute the server.js file
```bash
node server.js
```

- Open Google Messages Web, then right-click and select Inspect Element
- Proceed to Console Section and paste the browser.js code there
- And its Done.

## Demonstration

https://github.com/user-attachments/assets/dbb65c8e-34a2-4e9c-b29e-12827cd1ad2b

# Point-of-View of 2 different users































