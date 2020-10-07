const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//security
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');

const db = require('./models');

const todoRoutes = require('./routes/todoRoutes');

const httpError = require('./middleware/httpError');
const notFound = require('./middleware/notFound');

const app = express();

//for cors problem
app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Expose-Headers',
    'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('common'));
app.use(helmet());
app.use(xss());
const rateLimitDelay = 10 * 1000;
const limiter = rateLimit({
  windowMs: rateLimitDelay,
  max: 10,
});
app.use(limiter); //10 seconde - 10 request API
app.use(hpp());

app.use(express.static(__dirname));

// connect to SQL
//Production
db.sequelize.sync().then(() => {
  console.log('Re-Sync DB...');
});

// Development;
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and re-sync db.');
// });

app.use('/api/v1', todoRoutes);

app.use(httpError);
app.use(notFound);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`));
