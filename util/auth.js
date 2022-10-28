import axios from "axios"

const API_KEY = "AIzaSyCmH9FGL5rDXc3xjRHyRom3nD5K2SETDgE"
// const URL =

export async function authenticate(mode, email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`
    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
    })

    const token = response.data.idToken

    return token
}

export function createUser(email, password) {
    return authenticate("signUp", email, password)
}

export function login(email, password) {
    return authenticate("signInWithPassword", email, password)
}
