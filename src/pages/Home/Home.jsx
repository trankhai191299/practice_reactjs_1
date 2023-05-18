import { useEffect, useState } from "react";
import { getProdDetailApi,getAllProdApi } from "../../redux/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { randomProductItem } from "../../utils/setting";
import { NavLink } from "react-router-dom";


export default function Home() {
  const {arrProd} = useSelector(state=>state.productReducer)
  const dispatch = useDispatch()
  const getAllProd = () =>{
    dispatch(getAllProdApi())
  }
  useEffect(()=>{
    getAllProd()
  },[])
  const renderAllProd = () =>{
    let randProd = randomProductItem(arrProd,3)
    return randProd.map((prod,index)=>{
      return(
        <div className="col-4" key={index}>
          <div className="card">
            <div className="card-top mt-4">
              <img src={prod.image} alt={prod.name} width={250} height={200}/>
            </div>
            <div className="card-body">
              <div className="card-title">
                <p>{prod.name}</p>
              </div>
              <div className="card-inform">
                <p>
                  {prod.shortDescription.length>50?prod.shortDescription.substring(0,50):prod.shortDescription}
                </p>
              </div>
            </div>
            <div className="card-bottom mb-4">
              <NavLink className="btn btn-secondary" to={`/detail/${prod.id}`}>Detail</NavLink>
            </div>
          </div>
        </div>
      );
    })
  }
  return (
    <div>
      <div className="main mb-5">
        <div className="container">
          <div className="title">
            <h1>Home</h1>
          </div>
          <div className="product">
            <div className="row">
              {renderAllProd()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
