import axios, { AxiosError } from "axios";

export const handleRejectedHttpErrors = (error: AxiosError) => {
  const status = error?.response?.status || 0;
  const canceled = !!error && axios.isCancel(error);

  if (!canceled) {
    if (status === 401 || status === 403) {
      console.log("error authorization", error);
    } else if (status > 401 || status >= 500) {
      // general error
      console.log(error);
    }
  }

  if (error) {
    console.error("intercept error:", error?.toJSON(), error?.response);
  }

  return Promise.reject(error);
};
