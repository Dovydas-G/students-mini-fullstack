import express from 'express';
import cors from 'cors';


const userObj = [
    {
        name: 'Antanas',
        age: 22,
    },
    {
        name: 'Petras',
        age: 31,
    },
    {
        name: 'Ona',
        age: 42,
    },
    {
        name: 'Zigmas',
        age: 55,
    },
];


const PORT = 4831;
const app = express();

const corsOptions = {
    origin: 'http://localhost:4830',
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    return res.send('Home page')
});

app.get('/api/students', (req, res) => {
    return res.send(JSON.stringify(
       userObj
    ))
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});