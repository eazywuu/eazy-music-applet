import { post } from "./request"

type LoginInfo =  {
    username: string,
    password: string
}

const login = ( loginInfo: LoginInfo ) => post('/tokens', loginInfo)

export { login }