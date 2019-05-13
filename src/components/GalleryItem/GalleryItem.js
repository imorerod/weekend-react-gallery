import React, { Component } from 'react';
import axios from 'axios';

class GalleryItem extends Component {
    imageSwitch = () => {
        if (this.props.clicked === false) {
            this.setState({
                clicked: true
            })
            this.props.getGallery();
        }
        else {
            this.setState({
                clicked: false
            })
            this.props.getGallery();
        }
    }
    
    
    
    
    render(){
        if (this.props.image.liked = false){
        return(    
            <div>
            <img src={this.props.image.path}
            key={this.props.image.id}
            onClick={this.imageSwitch}
            alt={this.props.image.description} />
            <button onClick={this.props.updateLikes}>Like!</button>  
            <p>Likes: {image.likes}</p>
            </div>
        )
    }else{
        <div>
            {this.props.image.description}<br />
            Likes: {image.likes}





        </div>

    }
        
        
        
        return


    }

};




export default GalleryItem;