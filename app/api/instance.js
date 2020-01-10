import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://168.194.230.42:5600/api/v1',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDEiLCJqdGkiOiIzNDRjN2U3OC1mODgxLTQ5MDQtYjQ2ZC05ZWU3MTQ1ZjdhNzgiLCJuYW1lIjoiR0FSQ09NIDAwMSIsImV4cCI6MTU3ODY1Mzg4MiwiaXNzIjoiQ29tYW5kYUVsZXRyb25pY2EuQVBJIiwiYXVkIjoiQ29tYW5kYUVsZXRyb25pY2EuQXBwIn0.ZWZ9Q_-R7Yh_2zGGAoym6HipL4GgYtjBfontFrFNXp8',
  },
});

export default instance;
