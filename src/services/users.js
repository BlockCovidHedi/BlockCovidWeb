import axios from 'axios'

const url = process.env.VUE_APP_API;

const get_hello_world = () => {
    return axios.get(url+'/hello_world')
}
const add_user = (user) => {
    return axios.post(url+'/users',user)
}

export default {
    get_hello_world,
    add_user,
}