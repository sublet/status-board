import Pusher from 'pusher-js'

let pusher = null
if (process.env.REACT_APP_PUSHER_KEY) {
  Pusher.logToConsole = (process.env.REACT_APP_PUSHER_DEBUG === 'true')
  pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
    cluster: process.env.REACT_APP_PUSHER_CLUSTER
  })
}

export default pusher