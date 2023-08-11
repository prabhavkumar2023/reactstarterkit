
const apiUrl = process.env.NODE_ENV === 'production' ? 'https://api.example.com' : 'http://localhost:4000';
const login = `${apiUrl}/auth/login`;


export { login}