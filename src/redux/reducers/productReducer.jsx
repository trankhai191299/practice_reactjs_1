import { createSlice } from '@reduxjs/toolkit'
import {http} from '../../utils/setting'

const initialState = {
  arrProd:[],
  prodDetail:[],
  prodName:[]
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
    getProdNameAction : (state,action)=>{
      const prodName = action.payload
      state.prodName = prodName
    }
  }
});

export const {getAllProdAction,getProdDetailAction,getProdNameAction} = productReducer.actions

export default productReducer.reducer

export const getAllProdApi = ()=>{
  return async(dispatch)=>{
    try {
      const res = await http.get('/Product')
      dispatch(getAllProdAction(res))
    } catch (error) {
      console.log(error);
    }
  }
}

export const getProdByName = (name)=>{
  return async(dispatch)=>{
    try {
      if(name.trim()!==null && name.trim()!==''){
        const res = await http.get(`/Product?keyword=${name}`)
        dispatch(getProdNameAction(res))
      }else{
        dispatch(getProdNameAction(''))
      }

    } catch (error) {
      console.log(error);
    }
  }
}

export const getProdDetail = (id) =>{
  return async(dispatch)=>{
    try {
      const res = await http.get(`/product/getbyid?id=${id}`)
      dispatch(getProdDetailAction(res))
    } catch (error) {
      console.log(error);
    }
  }
}