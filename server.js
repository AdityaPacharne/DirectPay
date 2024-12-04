const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, GET");
        return res.status(200).json({});
    }
    next();
});

// Endpoint to receive user data and save it in payments.json
app.post('/data', (req, res) => {
    const { name, middleName, surname } = req.body;
    const newEntry = { name, middleName, surname };

    fs.readFile('payments.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Error reading file');
        }

        let payments = [];
        if (data) {
            payments = JSON.parse(data);
        }

        payments.push(newEntry);

        fs.writeFile('payments.json', JSON.stringify(payments, null, 2), err => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).send('Error writing file');
            }
            res.status(200).json({ message: 'Data received and stored successfully' });
        });
    });
});

// Endpoint to retrieve payment data
app.get('/payments', (req, res) => {
    fs.readFile('payments.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Error reading file');
        }
        const payments = data ? JSON.parse(data) : [];
        res.status(200).json(payments);
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

