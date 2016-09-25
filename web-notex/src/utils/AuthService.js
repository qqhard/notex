/**
 * Created by hard on 16-9-3.
 */
import Auth0Lock from 'auth0-lock';
import { browserHistory } from 'react-router';
import { isTokenExpired } from './jwtHelper'
import LogoImg from '../icon.ioc.png';

export default class AuthService {
    constructor(clientId, domain) {
        this.lock = new Auth0Lock(clientId, domain, {
            theme: {
                logo: LogoImg,
                primaryColor: "#7bb7fa",
            },
            languageDictionary: {
                title: "猿笔记"
            },
            socialButtonStyle: 'small',
            auth: {
                
            }
        })
        this.lock.on('authenticated', this._doAuthentication.bind(this));
        this.login = this.login.bind(this);
    }

    _doAuthentication(authResult){
        this.setToken(authResult.idToken);

        this.lock.getProfile(authResult.idToken, (error, profile) => {
            if (error) {
                console.log('Error loading the Profile', error);
            } else {
                this.setProfile(profile);
            }
        });
    }

    login() {
        // Call the show method to display the widget.
        this.lock.show()
    }

    loggedIn(){
        // Checks if there is a saved token and it's still valid
        const token = this.getToken()
        return !!token && !isTokenExpired(token)
    }

    setProfile(profile){
        profile.user_id = profile.user_id.replace('\|','');
        localStorage.setItem('user_id', profile.user_id);
        localStorage.setItem('profile', JSON.stringify(profile))
    }

    getProfile(){
        // Retrieves the profile data from localStorage
        const profile = localStorage.getItem('profile')
        return profile ? JSON.parse(localStorage.profile) : {}
    }

    setToken(idToken){
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken(){
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout(){
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
    }

    getUserid(){
        let profile = this.getProfile();
        return profile.user_id;
    }

}