import {LOGIN_SUCCESS, LOGOUT} from "./action"

const initState = {
    loginUser : JSON.parse(localStorage.getItem("login_status")) || null
}

export const AuthReducer = (state=initState, {type, payload}) => {
    switch(type) {
        case LOGIN_SUCCESS : 
            localStorage.setItem("login_status", JSON.stringify(payload));
            return { ...state, 
                loginUser : payload }

        case LOGOUT :
            localStorage.setItem("login_status", payload);
            return { ...state, 
                loginUser : payload  }

        default :
            return state
    }
}