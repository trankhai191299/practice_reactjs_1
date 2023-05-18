import { createSlice } from '@reduxjs/toolkit'
import {http} from '../../utils/setting'
import axios from 'axios';

const initialState = {
  arrProd:[],
  prodDetail:[],
}

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getAllProdAction : (state,action)=>{
      const arrProd = action.payload
      state.arrProd = arrProd
    },
    getProdDetailAction : (state,action)=>{
      const prodDetail = action.payload
      state.prodDetail = prodDetail
    },
  }
});

export const {getAllProdAction,getProdDetailAction,getProdNameAction} = productReducer.actions

export default productReducer.reducer

export const getAllProdApi = ()=>{
  return async(dispatch)=>{
    try {
      const res = await http.get('Product')
      // const res = await axios.get("https://shop.cyberlearn.vn/api/Product")
      // console.log(res)
      dispatch(getAllProdAction(res.data.content))
    } catch (error) {
      console.log(error);
    }
  }
}


export const getProdDetailApi = (id) =>{
  return async(dispatch)=>{
    try {
      const res = await http.get(`/product/getbyid?id=${id}`)
      dispatch(getProdDetailAction(res.data.content))
    } catch (error) {
      console.log(error);
    }
  }
}