import Router from  'koa-router';
import home from './home.mjs';
import api from './api.mjs';
import page from './page.mjs';
import test from './test.mjs';

const router = Router();

router.use('/', home.routes(), home.allowedMethods()); 
router.use('/api', api.routes(), api.allowedMethods()); 
router.use('/page', page.routes(), page.allowedMethods());

// TODO
router.use('/test', test.routes(), test.allowedMethods());

export default router;

