import { useCallback } from 'react';

import useServiceApiClient from './useServiceApiClient';

export default (path: string, data?: Record<string, unknown>) => {
  const { request, ...values } = useServiceApiClient(
    'destroy',
    path,
    null,
    data
  );

  const handleRequest = useCallback(
    (id: number) =>
      request({
        method: 'DELETE',
        url: `${path}/${id}`,
      }),
    [request]
  );

  return {
    destroy: handleRequest,
    ...values,
  };
};
