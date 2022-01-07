import axios from 'axios'

const getHistory = async (player) => {
  if(!player) {
    return [];
  }
  const response = await axios.get(`http://${window.location.hostname}:80/rps/history/${player}`)
  return response.data
}

export default {getHistory}