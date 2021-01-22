import _ from 'lodash';
import axios from 'axios'
// import Cookies from 'js-cookie'

const host = process.env.REACT_APP_REST_API;

// function getAccessTokenHeaders() {
//   let userInfo = window.localStorage.getItem('userInfo')

//   console.log(Cookies.get('username'))

//   if (userInfo) {
//     userInfo = JSON.parse(userInfo)
//     const token = Cookies.get('statusBoardToken')
//     try {
//       return { 
//         'X-ApiKey': 'e8Gnup0er0y5JdijVIGU5Ukovgbk9r1S',
//         'X-StatusBoard-Token': token,
//         'X-Service': `web-${process.env.REACT_APP_BUILD}`
//       }
//     } catch(err) {
//       console.log('could not retrieve token and id from localStorage')
//       console.error(err)
//     }
//   }
//   return {}
// }

// const http = async (endpoint, options, isAuth) => {
//   // if (isAuth) options.headers =_.extend(options.headers, getAccessTokenHeaders())

//   const ops = {
//     url: endpoint,
//     method: options.method || 'GET',
//     data: options.body || {},
//     headers: options.headers || {},
//   };
  
//   let results = await axios.request(ops);
//   if (results && results.status === 200) {
//     return results.data
//   }
// };

// const get = (endpoint, options = {}, isAuth = false) => {
//   return http(host + endpoint, options, isAuth);
// };

// const post = (endpoint, payload, headers = {}, isAuth = false) => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       ...headers,
//     },
//     body: JSON.stringify(payload),
//   };

//   return http(host + endpoint, options, isAuth);
// };

// const put = (endpoint, payload, headers = {}, isAuth = false) => {
//   const options = {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       ...headers,
//     },
//     body: JSON.stringify(payload),
//   };

//   return http(host + endpoint, options, isAuth);
// };

let api = {};

export default api;