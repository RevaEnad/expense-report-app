import { useState } from 'react';
import { useServiceAuthContext } from '../../context/AuthServiceContext';
import useServiceHttpRequest from '../../states/useServiceHttpRequest';
import { AxiosHeaders } from 'axios';

export default (method: string, path: string, params?: any, data?: any) => {
  const accessToken = window.localStorage.getItem('accessToken');
  const { client, request, loading } = useServiceHttpRequest(
    method,
    path,
    params,
    data
  );

  // Response is set here so that we can use it in component's useEffect asynchronously
  const [response, setResponse] = useState<
    null | Record<string, unknown> | any
  >(null);

  client.interceptors.request.use(
    async (axiosConfig) => {
      // Use AxiosHeaders type for headers
      const headers = axiosConfig.headers as AxiosHeaders;

      // Set custom headers
      headers.set('Accept', 'application/json');
      headers.set('Authorization', `Bearer ${accessToken}`);

      axiosConfig.withCredentials = true;

      return axiosConfig;
    },
    async (error) => {
      // Return the rejected promise
      return Promise.reject(error);
    }
  );

  client.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response !== null) {
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            client.defaults.headers.common[
              'Authorization'
            ] = `Bearer ${accessToken}`;
            return client(originalRequest);
          } catch (error: any) {
            if (error.response && error.response.data) {
              return Promise.reject(error.response.data);
            }
            return Promise.reject(error);
          }
        }
      }
      return Promise.reject(error);
    }
  );

  const handleRequest = async (config?: any) => {
    try {
      const response = await request(config);
      if (response.status === 200) {
        setResponse(response.data);
      }

      // Response is returned here so that we can use it synchronously
      return response;
    } catch (error: any) {
      console.warn(error);
      throw error;
    }
  };

  return {
    loading,
    request: handleRequest,
    data: response,
  };
};
