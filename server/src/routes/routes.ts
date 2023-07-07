import express from 'express';
import { getExample, postExample } from '../controllers/controller';

const router = express.Router();

router.get('/', getExample);
router.post('/', postExample);

export default router;