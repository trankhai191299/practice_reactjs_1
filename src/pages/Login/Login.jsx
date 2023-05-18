import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginApi } from "../../redux/reducers/userReducer";
import { NavLink } from "react-router-dom";
import * as Yup from 'yup'


export default function Login() {
  const dispatch = useDispatch()
  const frm = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema:Yup.object().shape({
      email:Yup.string().required('email ko dc de trong').email('email ko dung dinh dang'),
      password:Yup.string().required('password ko dc trong').min(6,'password co do dai tu 6 -> 32 ky tu').max(32,'password co do dai tu 6 -> 32 ky tu')
    }),
    onSubmit:(values)=>{

    }
  })
  return (
    <div className="container">
      <div className="main">
        <div className="property">
          <div className="row m-3">
            <div className="col-6"></div>
            <div className="col-6">
              <form onSubmit={frm.handleSubmit}>
                <div className="form-group">
                  <p>Email</p>
                  <input
                    type="email"
                    id="email"
                    placeholder="enter email"
                    className="form-control"
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  {frm.errors.email?<span className='text-danger'>{frm.errors.email}</span>:""}
                </div>
                <div className="form-group">
                  <p className="mt-3">Password</p>
                  <input
                    type="password"
                    id="password"
                    placeholder="enter password"
                    className="form-control"
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  {frm.errors.password?<span className='text-danger'>{frm.errors.password}</span>:""}
                </div>
                <div className="btn-area">
                  <div className="row">
                    <div className="col-6 text-end">
                      <button className="mt-3 btn btn-danger">Login</button>
                    </div>
                    {/* <div className="col-6 text-start">
                      <button className="mt-3 btn btn-danger">Register</button>
                    </div> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}