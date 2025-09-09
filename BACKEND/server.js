require('dotenv').config();
const app = require('./src/app');
const PORT = process.env.PORT || 8000;
const connectDB = require('./src/db/db');

connectDB();

app.listen(PORT, () => {
    console.log(`The server is Running on http://localhost:${PORT}`)
})