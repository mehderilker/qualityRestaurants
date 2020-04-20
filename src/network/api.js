import axios from 'axios';

const api = axios.create({
    baseURL:'https://developers.zomato.com/api/v2.1',

});
api.defaults.headers.common["user-key"] = "76a0b88c1537fd876c701d590e0aa505";
export default api
