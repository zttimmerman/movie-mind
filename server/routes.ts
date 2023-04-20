import express from 'express'
import * as controller from './controllers/index'

const router = express.Router();

router.get('/movies/search', controller.movies.getRecommendations);

export default router