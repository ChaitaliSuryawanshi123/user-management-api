const express = require('express');
const app = express();  //creates the app instance (request handler)

require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const userRoutes = require('./routes/userRoutes');
//Some comment to create conflict
//some comment to create conflict


//some comment to create merge conflict
app.use(express.json());  //built-in middleware to parse JSON bodies into req.body. Without this, req.body is undefined for JSON payloads
app.use(cors());  //enables CORS : allows your frontend (on other origin) to communicate with the API. cors() accepts options for allowed origins, headers, credentials.
app.use(helmet());  //sets security headers like X-Frame-Options, X-Content-Type-Options, Content-Security-Policy (helps guard against common attacks).

app.use('/api/users', userRoutes); //mounts router so routes defined in userRoutes are available under /api/users.

app.get('/',(req,res) => res.send('Welcome to User Management API'));

const PORT = process.env.PORT || 3000;  //lets you override port via environment variable; fallback to 3000.
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));