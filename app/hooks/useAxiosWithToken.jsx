import axios from "axios";
const useAxiosWithToken = axios.create({
  headers: {
    Authorization:
      "bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4TVE0TEw2Z2lHQUxvcEtkZUR5UkxpdnBMeHBQM1ZuRVJ5djZ4V0ZSU0lZIn0.eyJleHAiOjE3MTU2MTY1MDEsImlhdCI6MTcxNTU4MDUwMSwianRpIjoiMmViOTAwODEtYzBiZS00MTMwLWFlNDEtY2ExNWQ0MTc2M2Q3IiwiaXNzIjoiaHR0cHM6Ly9zc28udGF6bWlueWFkYWsuY29tL2F1dGgvcmVhbG1zL3NhbmFhcCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiNWIwMzA3OC1hODYzLTRlZjMtYjcxMC05ZTEzMjRmODhiOGEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzYW5hYXAtcmVzdC1hcGkiLCJzZXNzaW9uX3N0YXRlIjoiYmFjNmFkMmQtODViMi00MjllLTlmZmMtNmM1ZTZkYWRkZjA1IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIiwiaHR0cHM6Ly9zc28udGF6bWlueWFkYWsuY29tIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLXNhbmFhcCIsIm9mZmxpbmVfYWNjZXNzIiwiYWRtaW4iLCJ1bWFfYXV0aG9yaXphdGlvbiIsInVzZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJzYW5hYXAtcmVzdC1hcGkiOnsicm9sZXMiOlsiY2xpZW50X3VzZXIiLCJjbGllbnRfYWRtaW4iXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6ImJhYzZhZDJkLTg1YjItNDI5ZS05ZmZjLTZjNWU2ZGFkZGYwNSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoidGF6bWluIn0.fPVLk4uNrKnAiBQu1TKl4q5ly1-3ihuhgOObWAFwYTXd0bQft6yIVlwJWXx0pU-TktuZ-8Vn16e4SLDeMxIVvPUla8wh9CbnjaGRztg4EdshdLffvd3oBsQDeZewPdQng5csV0cKy1kfSf-jidadkL-86AaigqTmbyUJJk0wFPryENVz5s5xi1SIdTyqfsFiGBaiseSm3VDXbmhupnMMrU0YRfe72gIeBcvtFOx5eE72DtPZAZcD3KWKIDY0QXzACwvRDRhce7rzfyQszFAs0PCT7Pwbm-V6knD2zo66TLmAZA9USCiNr6TxPJjPZcSWnPY_wlf28aqwWcV7wYp3Bg",
  },
});

useAxiosWithToken.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.code === "ERR_NETWORK") {
      notify.Error(NotifyMessage.NETWORK_ERROR)
    }
    else {
      // window.location.href = "/login";
      return Promise.reject(error);
    }

  },
);
export default useAxiosWithToken;
