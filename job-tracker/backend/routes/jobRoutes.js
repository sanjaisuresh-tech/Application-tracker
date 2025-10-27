import express from 'express';
import { getJobs, addJob, updateJob, deleteJob } from '../controllers/jobController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();
router.use(auth);
router.route('/').get(getJobs).post(addJob);
router.route('/:id').put(updateJob).delete(deleteJob);

export default router;
