import { Router } from 'express';
import {
  createIncident,
  getAllIncidents,
  getIncidentById,
  deleteIncident
} from '../controllers/incidentController.js';

const router = Router();

router.post('/', createIncident);
router.get('/', getAllIncidents);
router.get('/:id', getIncidentById);
router.delete('/:id', deleteIncident);

export default router;
