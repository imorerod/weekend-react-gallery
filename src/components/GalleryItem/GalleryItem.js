import React, { Component } from 'react';
import axios from 'axios';

class GalleryItem extends Component {
    constructor(props);
    super(props);
    state = {
        clicked: 'false'
    }
    
clickLike() {
    axios.put(`/gallery/like/${this.props.indImage.id}`//back tics allow $
    .then((response) => {
    console.log('response: ', response); // look at response on console
    this.props.getGallery();
    }
}

picSwitch = (event) => {
    if (this.state.clicked === 'false') {
        this.setState({
            clicked: 'false'
        })
        this.props.getGallery();
        }
    else {
        this.setState({
            clicked: 'true'
        })
        this.props.getGallery();
        }
}



render (){

if (this.state.clicked === "false") {
    return (
        <img src={this.props.image.path}
        key={this.props.image.id}
        <button  onClick={this.picSwitch}>Like it!</button>
        className="image" // allows the pic to be called as image
        alt="broken" /> // what is this?

    );

    } else {
    return(
        {this.props.image.description}
        key={this.props.image.id}
        onClick={this.imageSwitch}
        className="image"
        alt="broken" /> 
    }

}

export default GalleryItem;