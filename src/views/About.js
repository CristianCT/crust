/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import Review from '../components/Review';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron cover-about" style={{ paddingTop: 150, paddingBottom: 100 }}>
          <div className="container ">
            <h1 className="display-2 text-white">Welcome to CRUST!</h1>
            <p className="text-white">This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            <p><a className="btn btn-outline-light btn-lg" href="/" role="button">Learn more &raquo;</a></p>
          </div>
        </div>
        
        <Review info={{ 
          styleClass: "card-info-right",
          img: "https://es.himgs.com/imagenes/estar-bien/20210706192625/personalidad-adultos-altas-capacidades-psicologia/0-974-472/altas-capacidades-m.jpg",
          title: "¿Quienes somos?",
          subTitle: "Neque porro quisquam est qui dolorem ipsum quia dolor sit",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }} />

        <Review info={{ 
          styleClass: "card-info-left flex-row-reverse",
          img: "https://i2.wp.com/hipertextual.com/wp-content/uploads/2020/05/hipertextual-nace-fastly-developer-hub-acceso-recursos-que-desarrolladores-necesitan-innovar-edge-2020769445-scaled.jpg?fit=1200%2C800&ssl=1",
          title: "¿Que hacemos?",
          subTitle: "Neque porro quisquam est qui dolorem ipsum quia dolor sit",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }} />

        <Review info={{ 
          styleClass: "card-info-right",
          img: "https://es.himgs.com/imagenes/estar-bien/20210706192625/personalidad-adultos-altas-capacidades-psicologia/0-974-472/altas-capacidades-m.jpg",
          title: "¿Como lo hacemos?",
          subTitle: "Neque porro quisquam est qui dolorem ipsum quia dolor sit",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }} />

        <Review info={{ 
          styleClass: "card-info-left flex-row-reverse",
          img: "https://i2.wp.com/hipertextual.com/wp-content/uploads/2020/05/hipertextual-nace-fastly-developer-hub-acceso-recursos-que-desarrolladores-necesitan-innovar-edge-2020769445-scaled.jpg?fit=1200%2C800&ssl=1",
          title: "¿Pa'q lo hacemos?",
          subTitle: "Neque porro quisquam est qui dolorem ipsum quia dolor sit",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }} />
      </div>
    );
  }
}
