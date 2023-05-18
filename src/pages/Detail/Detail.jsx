import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProdDetailApi } from "../../redux/reducers/productReducer";
import { useEffect } from "react";

export default function Detail() {
  const {prodDetail} = useSelector(state=>state.productReducer)
  const dispatch = useDispatch()
  const params = useParams()
  const getProdDetail = async()=>{
    const {id} = params
    dispatch(getProdDetailApi(id))
  }
  useEffect(()=>{
    getProdDetail()
  },[params?.id])
  return (
    <div className="detail">
      <div className="row">
        <div className="col-4">
          <div className="image">
            <img
              src={prodDetail.image}
              alt={prodDetail.name}
              width={250}
              height={300}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-2 text-start">
              <p className="fw-bold">name:</p>
              <p className="fw-bold">detail:</p>
              <p className="fw-bold">price:</p>
            </div>
            <div className="col text-start">
              <p>{prodDetail.name}</p>
              <p>
                {prodDetail.shortDescription.length > 50
                  ? prodDetail.shortDescription.substring(0, 50)
                  : prodDetail.shortDescription}
              </p>
              <p>{prodDetail.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
