const express = require('express');
const connectDB = require('./db');
const Record = require('./models/records');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
connectDB();

app.post('/addrecord', async (req, res) => {
    const { name, phone, datePurchased, price, item, balance, status, dueDate } = req.body;
    try {
        const record = new Record({ name, phone, datePurchased, price, item, balance, status, dueDate });
        await record.save();
        return res.json(record);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});                 

app.get('/allrecords', async (req, res) => {
    try {
        const records = await Record.find();
        return res.json({records});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

app.get('/overdue', async (_, res) => {
    try {
        const records = await Record.find({ status: 'overdue' });
        return res.json(records);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

app.post('/updaterecord/:id', async (req, res) => {
    const { name, phone, datePurchased, price, item, balance, status, dueDate } = req.body;
    const { id } = req.params;
    try {
        const record = await Record.findById(id);
        console.log(record);
        if (!record) {
            return res.status(404).json({ message: 'Record not found' });
        }

        if (name) record.name = name;
        if (phone) record.phone = phone;
        if (datePurchased) record.datePurchased = datePurchased;
        if (price) record.price = price;
        if (item) record.item = item;
        if (balance) record.balance = balance;
        if (status) record.status = status;
        if (dueDate) record.dueDate = dueDate;

        console.log(record);

        await record.save();

        res.json(record);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
  
