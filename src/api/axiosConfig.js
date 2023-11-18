import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
    },
    });
