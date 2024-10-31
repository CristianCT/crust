import React, { Component } from 'react';
import ServiceHome from '../components/ServiceHome';
import AOS from 'aos'

export default class Home extends Component {
  render() {
    return (
        <div>
            { AOS.init() }
            <div className="cover-home text-center text-white">
                <h1 data-aos="fade-right" data-aos-duration="3000" className="cover-heading display-1">Cover your page.</h1>
                <p data-aos="fade-left" data-aos-duration="3000" className="fs-5" style={{ width: '50%' }}>Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                <p><a href="/" className="btn btn-lg btn-outline-light">Learn more</a></p>
                <div>
                  <a className="btn btn-outline-light btn-circle mb-0 m-2 text-white" href="/" role="button"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-outline-light btn-circle mb-0 m-2 text-white" href="https://wa.link/w5bw18" role="button"><i className="fab fa-whatsapp"></i></a>
                  <a className="btn btn-outline-light btn-circle mb-0 m-2 text-white" href="/" role="button"><i className="fab fa-google"></i></a>
                  <a className="btn btn-outline-light btn-circle mb-0 m-2 text-white" href="/" role="button"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
           <div >
                <div style={{ margin: "5% 10% 0 10%", alignItems: "center" }}>
                    <center>
                        <hr/>
                            <p style={{ fontFamily: 'Spectral', margin: "0 5%  0 5%", fontSize: 25 }}>If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click here to donate using PayPal. Thank you for your support.</p>
                            <small><strong>Andres Hurtado Luna - UDC</strong></small>
                        <hr/>
                        <h2>¡We can offer you!</h2>
                    </center>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4 m-0 mt-5 container-services-home" >
                    <ServiceHome card={{ 
                        title: 'Model UML',
                        img: "../images/flowchart.png",
                        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
                    }} />
                    <ServiceHome card={{ 
                        title: 'Web Design',
                        img: "../images/website-design.png",
                        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
                    }} />
                    <ServiceHome card={{ 
                        title: 'Development',
                        img: "../images/console.png",
                        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
                    }} />{/* Model - Design - Development - Databases*/}
                    <ServiceHome card={{ 
                        title: 'Data Bases',
                        img: "../images/database.png",
                        description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
                    }} /> {/* https://icon-icons.com/es/buscar/iconos/?filtro=design */}
                </div>
                <hr className="m-5"/>
           </div>
        </div>
    );
  }
}
