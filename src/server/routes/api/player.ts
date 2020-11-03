// import { Router } from 'express';
// import * as passport from 'passport';
// import db from '../../db';

// const router = Router();


// //GET All passport.authenticate('jwt'),
// router.get('/', async(req: any, res) => {
//     try {
//         const player = await db.player.all();
//         res.json(player);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message: "code bad at server, routes, api, player.ts, GET All", error});
//     }
// });

// //GET One passport.authenticate('jwt'),
// router.get('/:id', async(req: any, res) => {
//     try {
//         const id = Number(req.params.id);
//         const [player] = await db.player.one(id);
//         res.json(player);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message: "code bad at server, routes, api, player.ts, GET One", error});
//     }
// });

// //DELETE passport.authenticate('jwt'), 
// router.delete('/:id', async(req, res) => {
//     try {
//         const id = Number(req.params.id);
//         const results = await db.player.destroy(id);
//         res.json(results);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message: "code bad at server, routes, api, player.ts, DELETE", error});
//     }
// });

// //POST passport.authenticate('jwt'),
// router.post('/', async(req, res) => {
//     try {
//         const newPlayer = req.body;
//         const results = await db.player.insert(newPlayer);
//         res.json(results);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message: "code bad at server, routes, api, player.ts, POST", error});
//     }
// });


// export default router;