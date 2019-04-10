import { checkResponse,post } from "@/helpers/http"

export function login( email, password) {
    return post ('/sigin', {email, password}).then(checkResponse) 
}

export function SocialMedia( )

export function refreshToken(){
    return post('/token/refresh').then(checkResponse)
}