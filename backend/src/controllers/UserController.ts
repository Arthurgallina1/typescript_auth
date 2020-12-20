import {  Request, Response } from 'express'
import { getRepository } from 'typeorm'
import User from '../models/User';
import EmailService from '../services/EmailService';

class UserController {
    async store(req: Request, res: Response) {
        const repository = getRepository(User)

        const { email, password } = req.body;

        const userExists = await repository.findOne({ where: { email }})

        if(userExists) {
            return res.sendStatus(409)
        }

        const user = repository.create({ email, password })
        await repository.save(user);
        
        return res.json(user)
        
    }

    async index(req: Request, res: Response) {
        return res.json({ userId: req.userId })
    }
}

export default new UserController()

// const users = [{name: 'Arthur', email: 'art@'}]
// export default {
//     async index(req: Request, res: Response) {
//         return res.json(users);
//     },

//     async create(req: Request, res: Response) {
//         const emailService = new EmailService();

//         emailService.sendMail({
//             to: {
//                 name: "arthur",
//                 email: "art@email"
//                 }, 
//             message: { 
//                 subject: 'bem vindo', 
//                 body: 'Seja bem vindo'
//             }
//         })
//         return res.json('oi')
//     }
// }