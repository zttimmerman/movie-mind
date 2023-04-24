import express from 'express'
import * as controller from './controllers/index'

const router = express.Router();

router.get('/movies/search', controller.movies.getRecommendations);
router.get('/movies/:id/providers', controller.movies.getProviders);

export default router