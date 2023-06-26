import axios from "axios"

const { VITE_BASEPATH_URL } = import.meta.env

export const fenixApi = axios.create({
  baseURL: VITE_BASEPATH_URL,
  timeoutErrorMessage: "timeout",
  timeout: 6000,
})

// fenixApi.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === errors.UNAUTHORIZED) {
//       store.dispatch(logout());
//       store.dispatch(setShowErrorToken(true));
//     }

//     return Promise.reject(error);
//   }
// );

// fenixApi.interceptors.request.use((config) => {
//   const token = store.getState().authentication.token;

//   if (token) {
//     config.headers = {
//       Authorization: `Bearer ${token}`,
//     };
//   }

//   return config;
// });
