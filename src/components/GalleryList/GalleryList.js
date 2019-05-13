import React, { Component } from 'react';
// import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        const htmlList = this.props.GalleryList.map((image, index) => {
            return (
                <div >
                    <img src={image.path}
                        alt={image.description} /> <br />
                    Description: {image.description} <br />
                    <button data-id={image.id} onClick={this.props.onLikeClick} >Like!</button> <br />
                    Likes: {image.likes}
                </div>
            )
})

return (
    <div>
        {htmlList}

    </div>
)
}
}

export default GalleryList;