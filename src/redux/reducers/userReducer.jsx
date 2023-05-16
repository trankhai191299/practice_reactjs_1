//link api: https://shop.cyberlearn.vn/swagger/index.html 
import { createSlice } from '@reduxjs/toolkit'
import { http,getStoreJson,USER_LOGIN, setStoreJson } from '../../utils/setting';

const initialState = {
  user : getStoreJson(USER_LOGIN)
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    getProfileAction:(state,action)=>{
      state.user = action.payload
    }
  }
});

export const {getProfileAction} = userReducer.actions

export default userReducer.reducer

export const getUser = ()=>{
  return async(dispatch)=>{
    try {
      const res = await http.get('/Users/getProfile')

      const action = getProfileAction(res)
      dispatch(action)
      setStoreJson(USER_LOGIN,res.data.content)
    } catch (error) {
      console.log(error);
    }
  }
}
export const loginApi = (user) =>{
  return async(dispatch)=>{
    try {
      const res = await http.post('/Users/signin',user)

      const action = getUser()
      dispatch(action)
    } catch (error) {
      console.log(error);
    }
  }
}