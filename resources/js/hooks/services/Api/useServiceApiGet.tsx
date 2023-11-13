import useServiceApiClient from './useServiceApiClient';

export default (path: string, params?: Record<string, any>) => {
  const {
    data,
    request: fetch,
    loading,
  } = useServiceApiClient('get', path, params);

  return {
    data,
    fetch,
    loading,
  };
};
