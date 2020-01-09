import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://168.194.230.42:5600/api/v1',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDEiLCJqdGkiOiIwNjllMjdmYy05ZjBmLTQ2ZjAtOWE4Mi0yYWQxMzFjODRlOWUiLCJuYW1lIjoiR0FSQ09NIDAwMSIsImV4cCI6MTU3ODU2NTAxNywiaXNzIjoiQ29tYW5kYUVsZXRyb25pY2EuQVBJIiwiYXVkIjoiQ29tYW5kYUVsZXRyb25pY2EuQXBwIn0.RW2pRyRLeNcG3-8QVULx_Izdmi0wKGDw7ErTNl_8Tko',
  },
});

export default instance;
