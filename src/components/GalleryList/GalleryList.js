import React, { Component } from 'react';
// import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        const htmlList = this.props.galleryItems.map((image, index) => {
            return (
                <div key={this.props.image}>
                    <img src={this.props.image.path}
                        alt={this.props.image.description} /> <br />
                    Description: {this.props.image.description} <br />
                    <button data-id={this.props.image} onClick={this.props.onLikeClick} >Like!</button> <br />
                    Likes: {this.props.image.likes}
                </div>
            );
}
        )
}
}

export default GalleryList;