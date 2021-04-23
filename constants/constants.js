require('dotenv').config();

// User Model
// gender
const GENDER_MALE = 'male';
const GENDER_FEMALE = 'female';
const GENDER_SECRET = 'secret';

// role
const ROLE_CUSTOMER = 'customer'; // customer : only login to client website
const ROLE_ADMIN = 'admin'; // admin : full roles in admin website
const ROLE_CASHIER = 'cashier';
const ROLE_INVENTORY = 'inventory';

// role
const STATUS_PAID = 'paid';
const STATUS_UNPAID = 'unpaid';

const JWT_SECRET = process.env.JWT_SECRET;
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
module.exports = {
    GENDER_MALE,
    GENDER_FEMALE,
    GENDER_SECRET,
    ROLE_CUSTOMER,
    ROLE_ADMIN,
    ROLE_CASHIER,
    ROLE_INVENTORY,
    JWT_SECRET,
    MONGO_URI,
    PORT,
    STATUS_PAID,
    STATUS_UNPAID
}

