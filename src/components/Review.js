import React, { Component } from 'react';

export default class Review extends Component {
  render() {
    return (
        <div className={`mt-5 p-5 ${ this.props.info.styleClass }`} >
            <div>
                <img src={ this.props.info.img } alt="..." style={{ maxWidth: '400px' }} />
            </div>
            <div className="m-5">
                <h1 className="display-1">{ this.props.info.title }</h1>
                <h5>{ this.props.info.subtitle }</h5>
                <p className="text-justify">{ this.props.info.content }</p>
            </div>
        </div>
    );
  }
}
