import { LOGIN, REGISTER } from '../actions/auth';

const initialize = {
  user: {},
  token: '',
  isLoggenIn: false
}
const authReducer = (state = initialize, action) => { 
  const { type, payload } = action;

  switch (type) { 
    case LOGIN:
      return {
        ...state,
        user: payload,
        token: payload.token,
        isLoggedIn: true
      }
    case REGISTER:
      return {
        ...state,
        user: payload,
        token: payload.token,
        isLoggedIn: true
      }
    default: { 
      return state
    }
  }
}

export default authReducer