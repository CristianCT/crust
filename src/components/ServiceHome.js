import React, { Component } from 'react';

export default class ServiceHome extends Component {
  render() {
    return (
        <div className="col service-home">
            <div className="card h-100 service-home pb-4 pt-4" style={{ alignItems: 'center' }}>
                <a href="/" >
                    <div>
                        <img src={ this.props.card.img } style={{ maxHeight: 150, maxWidth:150 }} className="card-img-top" alt="..."/>
                    </div>
                </a>
                <div className="card-body">
                    <h5 className="card-title">{ this.props.card.title }</h5>
                    <p className="card-text" style={{ textAlign: "justify" }}>{ this.props.card.description }</p>
                </div>
                <div className="card-footer bg-white">
                    <small className="text-muted"><strong><a className="link-dark text-link" href="/">View details &raquo;</a></strong></small>
                </div>
            </div>
        </div>
    );
  }
}
