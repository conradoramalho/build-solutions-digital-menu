import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://168.194.230.42:5600/api/v1',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDEiLCJqdGkiOiIwYmQxNjk0Ni1hOWVhLTRlMTYtYTE0NS0zZjFjZjE2ZTQ4N2EiLCJuYW1lIjoiR0FSQ09NIDAwMSIsImV4cCI6MTU3ODQ4MDg3NywiaXNzIjoiQ29tYW5kYUVsZXRyb25pY2EuQVBJIiwiYXVkIjoiQ29tYW5kYUVsZXRyb25pY2EuQXBwIn0.GG7iomXPKOGFl_tnuxx2DaVo92hmG0r28CGBa4BBFfs',
  },
});

export default instance;
