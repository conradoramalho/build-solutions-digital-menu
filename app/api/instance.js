import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://168.194.230.42:5000/api/v1',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDEiLCJqdGkiOiJjMTZhMjU4OS04Y2E0LTQ2MWEtYWJmMy02ZTFkMmYzYThiNTIiLCJuYW1lIjoiR0FSQ09NIDAwMSIsImV4cCI6MTU2NzA3NTI0NywiaXNzIjoiQ29tYW5kYUVsZXRyb25pY2EuQVBJIiwiYXVkIjoiQ29tYW5kYUVsZXRyb25pY2EuQXBwIn0.rcQb-sSlqOvophDAFGxex1Wa16kRyu745SOQIekc548',
  },
});

export default instance;
