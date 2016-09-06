/**
 * Created by hard on 16-9-4.
 */

const TOKEN = 'id_token';
const USERID = 'user_id';
const NICKNAME = 'nickname';

export function setToken(token) {
    localStorage.setItem(TOKEN, token);
}

export function setProfile(profile) {
    localStorage.setItem(USERID, profile.user_id);
    localStorage.setItem(NICKNAME, profile.nickname);
}

export function getToken() {
    return localStorage.getItem(TOKEN);
}

export function getUserId() {
    return localStorage.getItem(USERID);
}


export function getNickName() {
    return localStorage.getItem(NICKNAME);
}

