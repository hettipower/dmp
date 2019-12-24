import axios from 'axios';

export default axios.create({
  baseURL: `https://demo.easydentalmarketing.com/DMP/wp/wp-json/dmp/v1/`//Rest API URL
});