import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Service from '../components/Service';

export default class componentName extends Component {
  render() {
    return (
        <div>
             <div className="position-relative overflow-hidden p-3 p-md-5 text-center cover-services">
                <div className="col-md-6 p-lg-5 mx-auto my-5" >
                    <h1 className="display-2 font-weight-normal text-white">Our Services</h1>
                    <p className="lead font-weight-normal text-white">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
                    <Link className="btn btn-outline-light" to="/">Coming soon</Link>
                    {/* <a href='https://www.freepik.es/vectores/fondo'>Vector de Fondo creado por pikisuperstar - www.freepik.es</a> */}
                </div>
            </div>
            <div className="m-5">
                <div className="text-center">
                    <hr/>
                    <h2 className="display-6 font-weight-normal">Conoce los Servicios que tenemos para ofrecerte</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <hr/>
                </div>
                <div className="row justify-content-center">
                    <Service/>
                    <Service/>
                    <Service/>
                    <Service/>
                    <Service/>
                    <Service/>
                </div>
                <hr/>
            </div>
        </div>
    );
  }
}
