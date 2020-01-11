import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://168.194.230.42:5600/api/v1',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDEiLCJqdGkiOiIxZTQ0OWRjYS04NDAzLTQ0ZjItYWM0Ni0zNDk0MWI1NjZhYjUiLCJuYW1lIjoiR0FSQ09NIDAwMSIsImV4cCI6MTU3ODczOTkwMCwiaXNzIjoiQ29tYW5kYUVsZXRyb25pY2EuQVBJIiwiYXVkIjoiQ29tYW5kYUVsZXRyb25pY2EuQXBwIn0.X83OqnSsDT5WRfD66BVrxxpkWTpuFS6e6umpWndvj3c',
  },
});

export default instance;
