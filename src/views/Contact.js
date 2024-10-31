import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron cover-contact" style={{ paddingTop: 150, paddingBottom: 100 }}>
          <div className="container ">
            <h1 className="display-2 text-white">Contact us!</h1>
            <p className="text-white">This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            <p><a className="btn btn-outline-light btn-lg" href="/" role="button">Learn more &raquo;</a></p>
            <div>
              <div>
              <h6 className="text-white">Nuestras Redes!</h6>
              </div>
              <div>
                  <a className="btn btn-outline-light btn-circle mb-0 m-2 text-white text-link" href="/" role="button"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-outline-light btn-circle mb-0 m-2 text-white text-link" href="/" role="button"><i className="fab fa-whatsapp"></i></a>
                  <a className="btn btn-outline-light btn-circle mb-0 m-2 text-white text-link" href="/" role="button"><i className="fab fa-google"></i></a>
                  <a className="btn btn-outline-light btn-circle mb-0 m-2 text-white text-link" href="/" role="button"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="m-5">
          <div className="text-center">
              <hr/>
              <h2 className="display-6 font-weight-normal">Formulario de contacto</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <hr/>
          </div>
          <div className="card m-5 p-5 flex-row justify-content-start">
            <form className="row g-3"  style={{ maxWidth: 500 }}>
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input type="text" className="form-control"/>
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control"/>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
              </div>
              <div className="col-md-6">
                <label className="form-label">Cellphone</label>
                <input type="text" className="form-control"/>
              </div>
              <div className="col-md-6">
                <label className="form-label">Country</label>
                <input type="text" className="form-control"/>
              </div>
              <div className="col-md-6">
                <label className="form-label">Profession</label>
                <input type="text" className="form-control"/>
              </div>
              <div className="col-md-6">
                <label className="form-label">Company</label>
                <input type="text" className="form-control"/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Comment</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="d-grid col-12">
                <button type="submit" className="btn btn-dark">Submit</button>
              </div>
            </form>
            <div style={{ width:'100%', marginLeft: 50 }}><iframe title="Ubication CRUST" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.106068125109!2d-75.46578758553431!3d10.413149968641934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625289b777249%3A0x3eeb45a1f2144b33!2sTienda%20El%20Amigo%20Del%20Pueblo!5e0!3m2!1ses!2sco!4v1630361907059!5m2!1ses!2sco" style={{ width:"100%", height:600 }}></iframe></div>
          </div>
          <hr/>
        </div>
      </div>
    );
  }
}
