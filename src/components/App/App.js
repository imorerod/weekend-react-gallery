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

  updateLikes = (event) => {
    axios.put(`/gallery/like/${this.state.id}`)
      .then((response) => {
        this.getGallery();
      })
  }

  onLikeClick = (event) => {
    console.log('Like', event.target.dataset.id);
  }


  render() {
    const htmlList = this.state.galleryItems.map((image, index) => {
      return (
        <GalleryList
          GalleryList={this.state.GalleryList}
          GalleryItem={this.onLikeClick}
          />
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <br />
        <p>Gallery:</p>
        {htmlList}
      </div>
    );
  }
}

export default App;