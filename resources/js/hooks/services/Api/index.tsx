export { default } from './useServiceApi';
import useServiceApiGet from './useServiceApiGet';
import useServiceApiPost from './useServiceApiPost';
import useServiceApiStore from './useServiceApiStore';
import useServiceApiPatch from './useServiceApiPatch';
import useServiceApiPut from './useServiceApiPut';
import useServiceApiDestroy from './useServiceApiDestroy';

export {
  useServiceApiGet as Get,
  useServiceApiStore as Store,
  useServiceApiPost as Post,
  useServiceApiPatch as Patch,
  useServiceApiPut as Put,
  useServiceApiDestroy as Destroy,
};
