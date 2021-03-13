import axios from 'axios'
import {authHeader} from "@/_helpers/auth-header";


const url = process.env.VUE_APP_API;

const isToken = () => {
    if (localStorage.getItem('user')) {
        return true
    }
    else {
        return false
    }

}
const get_hello_world = () => {
    return axios.get(url+'/hello_world')
}
const add_user = (user) => {
    return axios.post(url+'/users',user)
}

const login =  (email, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    }
    return axios.post(`${url}/login`,requestOptions.body, {
        headers : requestOptions.headers
    })

}
const logout = () => {
    localStorage.removeItem('user')
    location.reload()
}

const getAll = () => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return axios.get(`${url}/auth`, {
        headers : requestOptions.headers
    })

}

export default {
    get_hello_world,
    add_user,
    login,
    logout,
    getAll,
    isToken,
}