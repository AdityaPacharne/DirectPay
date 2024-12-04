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

## Point-of-View of 2 different users

https://github.com/user-attachments/assets/dba88103-2556-4bfd-8cc8-187a6792cf31

This method was able to provide Authentication/Verification by first verifying that a payment was made
And only giving 'Payment Received' message to the one who paid.

## Working

**1. User Details Submission**
The user begins by entering their details, including their email, name, middle name, and surname, on the provided form in the DirectPay system. These details are temporarily stored for tracking purposes.

**2. Payment Webpage**
After submitting their information, the user is redirected to a payment page displaying a static QR code for Google Pay (UPI). The user can scan this code to complete the payment.

**3. Payment SMS Parsing**
When the payment is successfully processed, the bank sends a confirmation SMS to the client. This SMS contains details about the credited amount, the payer’s account information, and the name of the payer.

**4. Extracting Payment Details**
The system extracts the name, middle name, and surname of the payer from the bank-generated SMS using a JavaScript function. This function dynamically parses the SMS content to identify the relevant details.

**5. Sending Payment Data**
Once the details are extracted, a JSON object containing the name, middle name, and surname is sent to a Node.js server via a POST request. The server appends this data to a local payments.json file, which acts as a record of completed payments.

**6. Real-Time Status Tracking**
The script running on the payment webpage continuously checks the payments.json file for a match between the user-provided details (submitted in the form) and the data recorded in payments.json.
When a match is found, the payment status on the webpage updates to "Payment Received."
If no match is found, the system continues monitoring until the payment is confirmed.
This seamless workflow ensures a streamlined payment tracking process without relying on external payment gateways or intermediaries, providing users with a transparent and efficient solution.




























