import {
    LOGIN_ENDPOINT,
    REFRESH_ENDPOINT,
    REGISTER_ENDPOINT,
  } from './auth.constants';
  
  import request from './api.request';
  import { constants } from 'buffer';
  
  class AuthService {
    constructor() {
      this.login = this.login.bind(this);
    }
  
    async login(email, password, username) {
      try {
        const response = await request({
          url: LOGIN_ENDPOINT,
          method: 'POST',
          data: {
            email,
            password,
            username,
          },
        });
  
        if (response.data.access) {
          return this.setToken(response);
        }
      } catch (error) {
        return error.response;
      }
    }
  
    logout() {
      localStorage.removeItem('user');
    }
  
    async register({
      username,
      email,
      password,
      firstName,
      lastName,
      image
    }) {
      try {
        await request({
          url: REGISTER_ENDPOINT,
          method: 'POST',
          data: {
            username,
            email,
            password,
            first_name: firstName,
            last_name: lastName,
            image
          },
        });
  
        await this.login(email, password, username);
      } catch (error) {
        return error.response;
      }
    }
  
    setToken(response) {
      localStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
    }
  
    async refreshToken() {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
  
        if (user.refresh) {
          const response = await request({
            url: REFRESH_ENDPOINT,
            method: 'POST',
            data: {
              refresh: user.refresh,
            },
          });
  
          return response.data;
        }
      } catch (error) {
        return error.response;
      }
    }
  }
  
  export default new AuthService();