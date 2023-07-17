import express from 'express';
import routes from './routes/routes';
import cors from 'cors'

const app = express();

//Se configura los cors para que deje hacer las peticiones
app.use(cors({
    origin: '*',
}))

app.use(express.json());
const port = 8081;

app.listen(port, () => {
    console.log('El servidor esta en el puerto ' + port);
})

routes(app);