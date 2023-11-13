import { useCallback, useMemo, useState } from 'react';
import axios from 'axios';

// commented out due to spec change. client doesn't want to see any notification during upcoming demo
// const snackBarConfigOrig = {
//   open: true,
//   message: 'Success!',
//   type: 'success' as 'success' | 'error' | 'warning' | 'info',
//   duration: 2500,
// };

const useServiceHttpRequest = (
  method: string,
  path: string,
  params?: any,
  data?: any
) => {

  // commented out due to spec change. client doesn't want to see any notification during upcoming demo
  // let snackBarConfig = { ...snackBarConfigOrig };

  const [loading, setLoading] = useState<boolean>(false);

  const client = axios.create({
    baseURL: 'http://localhost:8002/api',
    responseType: 'json',
    validateStatus: (statusValue) => statusValue < 300,
  });

  const options = useMemo(
    () => ({
      url: path,
      method,
      params: params ?? {},
      data: data ?? {},
    }),
    [data, params, method, path]
  );

  const handleRequest = useCallback(
    async (config?: any) => {
      try {
        setLoading(true);

        return await client.request({ ...options, ...config });
      } catch (err: any) {
        // commented out due to spec change. client doesn't want to see any notification during upcoming demo
        // snackBarConfig.type = 'error';
        // snackBarConfig.message = translate.generalError;

        if (axios.isCancel(err)) {
          console.log(err);
        }

        // Handle Errors here, handling is to be decided
        if (err.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);

          // commented out due to spec change. client doesn't want to see any notification during upcoming demo
          // if (err.response.status === 422 && err.response.data.message) {
          //   snackBarConfig.message = err.response.data.message;
          // }

          throw err.response;
        } else if (err.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          console.log(err.request);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log('Error', err.message);

          return err;
        }
      } finally {
        setLoading(false);

        // commented out due to spec change. client doesn't want to see any notification during upcoming demo
        // if (method !== 'get' || (path !== 'coordinate' && method !== 'get')) {
        //   handleSnackBarConfig(snackBarConfig);
        //   snackBarConfig = snackBarConfigOrig;
        // }
      }
    },
    [client, options]
  );

  return {
    client,
    loading,
    request: handleRequest,
  };
};

export default useServiceHttpRequest;
