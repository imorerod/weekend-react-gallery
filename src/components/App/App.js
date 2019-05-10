import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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
  getGallery() {
    axios.get('/gallery')
      .then((response) => {
        console.log('response: ', response); // look at response on console
        this.setState({ // setState = render
          galleryItems: response.data // data is an element on the object
        })
      });

  }



  render() {
    const elementArray = this.state.galleryItems.map((indvImage, index) => {
      return <div key={index}>
        <img src={indvImage.path}/> <br />
        Description: {indvImage.description} <br />
        Likes: {indvImage.likes}
      </div>
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        {elementArray}
      </div>
    );
  }
}

export default App;
