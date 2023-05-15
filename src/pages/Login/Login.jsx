export default function Login() {
  return (
    <div className="container">
      <div className="main">
        <div className="property">
          <div className="row m-3">
            <div className="col-6"></div>
            <div className="col-6">
              <form>
                <div className="form-group">
                  <p>Email</p>
                  <input type="email" id="email" placeholder="enter email" className="form-control"/>
                </div>
                <div className="form-group">
                  <p className="mt-3">Password</p>
                  <input type="password" id="password" placeholder="enter password" className="form-control"/>
                </div>
                <button className="mt-3 btn btn-danger">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}