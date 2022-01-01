import axios from 'axios'

const getHistory = async (cursor) => {
    const response = await axios.get(!cursor ? `/rps/history` : cursor)
    return response
  }

export default {getHistory}