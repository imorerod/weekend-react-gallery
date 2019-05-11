import React, { Component } from 'react';
// import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        return (
        <div key={this.props.id}>
        <img src={this.props.path}
        alt={this.props.description}/> <br />
        Description: {this.props.description} <br />
        <button data-id={this.props} onClick={this.props.onLikeClick} >Like!</button> <br />
        Likes: {this.props.likes}
      </div>
        )
    }
}

export default GalleryList;