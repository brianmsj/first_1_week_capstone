import 'babel-polyfill';
import express from 'express';
const bodyParser = require('body-parser');
const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;
const router = express.Router();
const jsonParser = bodyParser.json();

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();

app.use(express.static(process.env.CLIENT_PATH));

const cheeses = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue",
    "Cheshire Blue",
    "Devon Blue",
    "Dorset Blue Vinney",
    "Dovedale",
    "Exmoor Blue",
    "Harbourne Blue",
    "Lanark Blue",
    "Lymeswold",
    "Oxford Blue",
    "Shropshire Blue",
    "Stichelton",
    "Stilton",
    "Blue Wensleydale",
    "Yorkshire Blue"
];

app.get('/cheeses', (req, res) => {
  res.json({
    cheeses
  });
});

function runServer() {
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}

if (require.main === module) {
    runServer();
}
