import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://168.194.230.42:5600/api/v1',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDEiLCJqdGkiOiJlZGMwOTg1ZS1jM2JiLTQ2YmYtYjlhNy0yOTZhNTlhY2U4MGQiLCJuYW1lIjoiR0FSQ09NIDAwMSIsImV4cCI6MTU3OTYwNjUwNiwiaXNzIjoiQ29tYW5kYUVsZXRyb25pY2EuQVBJIiwiYXVkIjoiQ29tYW5kYUVsZXRyb25pY2EuQXBwIn0.R-jEzfPGzIwpJVi6Xnf-pvy9Ultfvh9GiULKo1uCQFs',
  },
});

export default instance;
