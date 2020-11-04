import {Router} from 'express';
import campaignsRouter from './campaigns';
import disscussionsRouter from './discussions';
import players_campaignsRouter from './players_campaigns';

const router = Router();

router.use('/campaigns', campaignsRouter);
router.use('/discussions', disscussionsRouter);
router.use('/players_campaigns', players_campaignsRouter);

export default router;