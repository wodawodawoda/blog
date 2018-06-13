import { Router } from 'express';
import * as ExampleController from '../controllers/example.controller';
const router = new Router();

// Get all Posts
router.route('/examples').get(ExampleController.getExamples);

router.route('/examples').post(ExampleController.addExample);

router.route('/examples/:id').put(ExampleController.updateExample);

router.route('/examples/:id').delete(ExampleController.deleteExample);


export default router;
