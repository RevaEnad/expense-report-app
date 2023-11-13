import { useCallback } from 'react';

import useServiceApiClient from './useServiceApiClient';

export default (path: string, config?: any) => {
  const {
    data: response,
    request,
    loading,
  } = useServiceApiClient('put', path, null, config);

  const handleRequest = useCallback(
    (id: number, data?: Record<string, unknown>) =>
      request({
        method: 'PUT',
        url: `${path}/${id}`,
        data,
      }),
    [request]
  );

  const handleAuthenticated = useCallback(
    (data?: Record<string, unknown>) =>
      request({
        method: 'PUT',
        url: path,
        data,
      }),
    [request]
  );

  return {
    data: response,
    authUpdate: handleAuthenticated,
    update: handleRequest,
    loading,
  };
};
