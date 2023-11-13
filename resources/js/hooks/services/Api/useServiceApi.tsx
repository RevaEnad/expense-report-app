import { Get, Post, Store, Patch, Put, Destroy } from './';

export default (path: string, params?: any) => {
  const get = Get(path, params);
  const post = Post(path, params);
  const store = Store(path, params);
  const patch = Patch(path, params);
  const put = Put(path, params);
  const destroy = Destroy(path, params);

  return { get, post, store, patch, put, destroy };
};
