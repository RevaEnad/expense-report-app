import useServiceApiClient from './useServiceApiClient';

export default (path: string, data: Record<string, unknown>) => {
  const { request, ...values } = useServiceApiClient('post', path, null, data);
  return {
    upload: request,
    ...values,
  };
};
