import axios from 'axios'

const bdZonawifi = axios.create({
     baseURL: 'http://127.0.0.1:8000/api'
})

export default bdZonawifi