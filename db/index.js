const mongoose = require('mongoose');
const mongourl = process.env.MONGODB_URL || 'mongodb+srv://akhilmathew990:vMdGvZgXBIj9ydPR@employeemanagement.la59yqy.mongodb.net/?retryWrites=true&w=majority'
const dbname = process.env.DB_NAME || 'EmployeeManagement';

mongoose.connect(mongourl, {})
.then(() => {
    console.log(`Connected to MongoDB: ${mongourl}/${dbname}`);
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});
