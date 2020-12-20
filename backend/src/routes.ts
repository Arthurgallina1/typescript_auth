import { Router } from 'express'
import AuthController from './controllers/AuthController'
import UserController from './controllers/UserController'
import authMiddleware from './middlewares/authMiddleware'


const routes = Router()


routes.post('/users', UserController.store)
routes.post('/auth', AuthController.authenticate)

routes.get('/users', authMiddleware ,UserController.index)
// routes.get('/users/create', UserController)

export default routes