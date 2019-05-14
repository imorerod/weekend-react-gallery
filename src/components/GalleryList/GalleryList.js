import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        const htmlList = this.props.GalleryList.map((image, index) => {
            return (
                <GalleryItem
                    key={Image}
                    id={image.id}
                    path={image.path}
                    description={image.description}
                    likes={image.likes}
                    clickLike={this.props.onLikeClick}
                />
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