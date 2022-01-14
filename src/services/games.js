import axios from 'axios'

const getHistory = async (player) => {
  if(!player) {
    return [];
  }
  const response = await axios.get(`https://${window.location.hostname}/rps/history/${player}`)
  return response.data
}

export default {getHistory}