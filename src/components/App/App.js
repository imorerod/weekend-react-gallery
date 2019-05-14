import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = {
    galleryItems: []
  };

  // onReady send back getGallery
  componentDidMount() {
    console.log('I am here!');
    this.getGallery();
  }

  // GET the current gallery
  getGallery(event) {
    axios.get('/gallery')
      .then((response) => {
        console.log('response: ', response); // look at response on console
        this.setState({ // setState = render
          galleryItems: response.data // data is an element on the object
        })
      });

  }

  updateLikes (id) {
    axios.put(`/gallery/like/${id}`)
      .then((response) => {
        this.getGallery();
      })
  }

  onLikeClick = (event) => {
    console.log('Like', event.target.dataset.id);
    const id = event.target.dataset.id;
    this.updateLikes(id)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <br />
        <p>Gallery:</p>
        <GalleryList
          GalleryList={this.state.galleryItems}
          onLikeClick={this.onLikeClick}
          GalleryItem={this.state.GalleryItem} />
      </div>
    );
  }
}

export default App;