import axios from 'axios'

export const fetch = async (url, options = {}) => {
  const ops = {
    url: url,
    method: options.method || 'GET'
  };

  if (options.body) ops.data = options.body
  if (options.headers) ops.headers = options.headers
  
  let results = await axios.request(ops);
  if (results && results.status === 200) {
    return results.data
  }
}