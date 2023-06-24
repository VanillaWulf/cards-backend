import express from 'express';
import mongoose from "mongoose";
import { registerValidation, loginValidation } from './validations/validation.js';
import { checkAuth, handleValidationErrors } from "./utils/index.js";
import { UserController, CardsTableController } from "./controllers/index.js";

mongoose.connect('mongodb+srv://admin:72405060@cluster0.tcyzdg4.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('db ok'))
    .catch(e => console.log('db err',e)
);

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
 res.send('hallo');
});


app.post('/auth/register', UserController.register);

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);

app.get('/auth/me', checkAuth, UserController.getMe);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('server ok');
});
