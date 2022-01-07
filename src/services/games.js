import axios from 'axios'

const getHistory = async (player) => {
  if(!player) {
    return [];
  }
  const response = await axios.get(`http://${window.location.hostname}:8080/rps/history/${player}`)
  return response.data
}

export default {getHistory}