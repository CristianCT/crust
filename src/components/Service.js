import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Service extends Component {
  render() {
    return (
        <div className="card mb-4 m-4" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://images.unsplash.com/photo-1539683255143-73a6b838b106?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="..." className="img-fluid"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                        <div className="d-grid">
                            <Link to="service/webdesign" type="button" className="btn btn-outline-dark">Mas información</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
