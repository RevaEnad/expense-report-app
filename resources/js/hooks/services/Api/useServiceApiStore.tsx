import { useCallback } from 'react';

import useServiceApiClient from './useServiceApiClient';

interface IUploadPayload {
  name: string;
  size: number;
  mimetype: string;
  extension: string;
  module: string;
  compress: boolean;
}

export default (path: string, data: Record<string, unknown>) => {
  const { request, ...values } = useServiceApiClient('store', path, null, data);

  const handleRequest = useCallback(
    (data: Record<string, unknown>, customPath?: string) =>
      request({
        method: 'POST',
        data,
        url: customPath ?? path,
      }),
    [request]
  );

  const handleUpload = useCallback(
    (data: IUploadPayload, file?: Blob) => {
      const formData = new FormData();

      file && formData.append('file', file);

      formData.append('data', JSON.stringify(data));

      return request({
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    [request]
  );

  return {
    fetch: handleRequest,
    upload: handleUpload,
    ...values,
  };
};
