let lastMessage = "";
const predefinedAmount = 1; 

function pollForNewMessages() {
    const messageContainer = document.querySelector(".snippet-text");

    if (messageContainer) {
        const currentMessage = messageContainer.innerText.trim();

        if (currentMessage && currentMessage !== lastMessage) {
            console.log("New message content:", currentMessage);
            lastMessage = currentMessage;

            const nameInfo = parseName(currentMessage);
            const paymentInfo = parsePayment(currentMessage);

            if (nameInfo) {
                console.log("Name:", nameInfo.name);
                console.log("Middle Name:", nameInfo.middleName);
                console.log("Surname:", nameInfo.surname);
                sendData(nameInfo);
            } else {
                console.log("Name information not found in message.");
            }

            if (paymentInfo) {
                console.log("Payment Amount:", paymentInfo.amount);
                if (paymentInfo.amount === predefinedAmount) {
                    console.log("Payment matches the predefined amount.");
                } else {
                    console.log(`Payment does not match the predefined amount. Expected ${predefinedAmount}, but got ${paymentInfo.amount}.`);
                }
            } else {
                console.log("Payment information not found in message.");
            }
        }
    } else {
        console.warn("Message container not found. Verify the .snippet-text selector.");
    }
}

function parseName(message) {
    const namePattern = /from\s+([A-Z][a-zA-Z]*)\s+([A-Z][a-zA-Z]*)\s+([A-Z][a-zA-Z]*)/;
    const match = message.match(namePattern);

    if (match) {
        return {
            name: match[1],
            middleName: match[2],
            surname: match[3]
        };
    }
    return null; 
}

function parsePayment(message) {
    const paymentPattern = /credited by\s+Rs\.(\d+)/;
    const match = message.match(paymentPattern);

    if (match) {
        return {
            amount: parseInt(match[1], 10) 
        };
    }
    return null; // No match found
}

function sendData(nameInfo) {
    fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nameInfo)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Successfully sent data:", data);
    })
    .catch(error => {
        console.error("Error occurred:", error);
    });
}

setInterval(pollForNewMessages, 2000);

