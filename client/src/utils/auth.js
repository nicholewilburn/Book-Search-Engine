import decode from 'jwt-decode';

class AuthService {
  constructor(history) {
    this.history = history;
  }

  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    console.log('Login method called'); // Add a debugging statement
    if (this.history) {
      console.log('Redirecting to /'); // Add a debugging statement
      this.history.push('/');
    }
  }

  logout() {
    localStorage.removeItem('id_token');
    console.log('Logout method called'); // Add a debugging statement
    if (this.history) {
      console.log('Redirecting to /'); // Add a debugging statement
      this.history.push('/');
    }
  }
}

export default AuthService;