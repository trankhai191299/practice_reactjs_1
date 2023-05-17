export default function Home() {
  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="title">
            <h1>Home</h1>
          </div>
          <div className="product">
            <div className="row">
              <div className="col-4">
                <div className="card">
                  <div className="card-top mt-4">
                    <img src="https://picsum.photos/250/200" alt="" />
                  </div>
                  <div className="card-body">
                    <div className="card-title">
                      <p>A1</p>
                    </div>
                    <div className="card-inform">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, unde numquam. Provident, dolorum quisquam explicabo consectetur cupiditate enim saepe hic adipisci dolore nobis minus eum.</p>
                    </div>
                  </div>
                  <div className="card-bottom mb-4">
                    <button className="btn btn-secondary">Detail</button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <div className="card-top mt-4">
                    <img src="https://picsum.photos/250/200" alt="" />
                  </div>
                  <div className="card-body">
                    <div className="card-title">
                      <p>A2</p>
                    </div>
                    <div className="card-inform">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, unde numquam. Provident, dolorum quisquam explicabo consectetur cupiditate enim saepe hic adipisci dolore nobis minus eum.</p>
                    </div>
                  </div>
                  <div className="card-bottom mb-4">
                    <button className="btn btn-secondary">Detail</button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <div className="card-top mt-4">
                    <img src="https://picsum.photos/250/200" alt="" />
                  </div>
                  <div className="card-body">
                    <div className="card-title">
                      <p>A3</p>
                    </div>
                    <div className="card-inform">
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, unde numquam. Provident, dolorum quisquam explicabo consectetur cupiditate enim saepe hic adipisci dolore nobis minus eum.</p>
                    </div>
                  </div>
                  <div className="card-bottom mb-4">
                    <button className="btn btn-secondary">Detail</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-detail mt-5 mb-5">
            <div className="title mb-4">
              <h2>Detail</h2>
            </div>
            <div className="inform">
              <div className="row">
                <div className="col-4">
                  <div className="image">
                    <img src="https://picsum.photos/300/300" alt="" />
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
                      <p>Lorem ipsum dolor sit amet.</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                      <p>400</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
