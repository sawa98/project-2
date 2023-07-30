import './App.css';

function App() {
  return (
    <>
    <div className="container">
      <nav>
        <img src="/image/brand_logo.png" alt="" />
        <div className="list">
          <ul>
          <li href="/">MENU</li>
          <li href="/">LOCATION</li>
          <li href="/">ABOUT</li>
          <li href="/">CONTACT</li></ul>
        </div>
        <div className="btn">
          <button className="btn btn-danger">LOGIN</button>
        </div>
      </nav>
      <main>
        <div className="row">
          <div className="col-sm-6">
            
            <h1 className="heading">YOUR FEET DESERVE THE BEST</h1>
            <p className="para">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
           <div className="button" >
           <button className="btn btn-danger">Shop Now</button>
            <button className="btn btn-secondary">Category</button>
           </div>

            <div className="brand">
              <p>Also Available On</p>
              <img src="/image/flipkart.png" alt="" />
              <img className="sec" src="/image/amazon.png" alt="" />
            </div>
          </div>
          <div className="col-sm-6">
            
            <img src="/image/shoe_image.png" alt="" />
          </div>
        </div>
      </main>
    </div>
    </>
  );
}

export default App;
