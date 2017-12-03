import Router from  'koa-router';
import {postList, postItem} from './../controller/post.mjs';

// TODO: test 
import {initPost} from './../controller/init.mjs';

const router = Router();

const routers = router
  .get('/init/list', async (ctx, next) => {
    ctx.body = await initPost(ctx.params.id);
  })
  .get('/init/item/:id', async (ctx, next) => {
    let result = await initPost(ctx.params);
    ctx.body = {
      result
    };
  })
  .get('/post/list', async (ctx, next) => {
    ctx.body = await postList(ctx.params);
  })
  .get('/post/item/:id', async (ctx, next) => {
    ctx.body = await postItem(ctx.params);
  });



  
export default routers;
