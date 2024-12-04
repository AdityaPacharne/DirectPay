let lastMessage = "";

// Function to check for updates at intervals
function pollForNewMessages() {
    const messageContainer = document.querySelector(".snippet-text");

    if (messageContainer) {
        const currentMessage = messageContainer.innerText.trim();

        // If the current message differs from the last one, process it
        if (currentMessage && currentMessage !== lastMessage) {
            console.log("New message content:", currentMessage);
            lastMessage = currentMessage;

            // Extract name, middle name, and surname
            const nameInfo = parseName(currentMessage);
            if (nameInfo) {
                console.log("Name:", nameInfo.name);
                console.log("Middle Name:", nameInfo.middleName);
                console.log("Surname:", nameInfo.surname);

                // Send extracted name info to the server
                sendData(nameInfo);
            } else {
                console.log("Name information not found in message.");
            }
        }
    } else {
        console.warn("Message container not found. Verify the .snippet-text selector.");
    }
}

// Function to parse name, middle name, and surname from the message
function parseName(message) {
    // Regular expression to capture three consecutive words after "from" (assuming they're capitalized)
    const namePattern = /from\s+([A-Z][a-zA-Z]*)\s+([A-Z][a-zA-Z]*)\s+([A-Z][a-zA-Z]*)/;
    const match = message.match(namePattern);

    if (match) {
        // Return an object with name, middle name, and surname
        return {
            name: match[1],
            middleName: match[2],
            surname: match[3]
        };
    }
    return null; // No match found
}

// Function to send data to the server
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
            throw new Error(Network response was not ok: ${response.statusText});
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

// Poll every 2 seconds
setInterval(pollForNewMessages, 2000);
