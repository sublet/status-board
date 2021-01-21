import axios from 'axios'

export const fetch = async (url, options = {}) => {
  const ops = {
    url: url,
    method: options.method || 'GET',
    data: options.body || {},
    headers: options.headers || {},
  };
  
  let results = await axios.request(ops);
  if (results && results.status === 200) {
    return results.data
  }
  
}