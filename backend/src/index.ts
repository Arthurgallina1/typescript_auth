import 'reflect-metadata'
import express from 'express'

import './db/connect'
import cors from 'cors'
import routes from './routes'

const app = express();
app.use(cors())
app.use(express.json());
app.use(routes)

app.listen(8000, () => console.log('🔥 Server started at 8k'));