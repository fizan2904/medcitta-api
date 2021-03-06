import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';

const app = express();

app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export default app;