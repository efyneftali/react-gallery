import React, {Component} from 'react'
import axios from 'axios'
// import GalleryItems from './GalleryItem'
import SearchForm from './SearchForm'
import apiKey from  './config.js'
import Gallary from './Gallary';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos:[],
      loading: true
    }; 
  } 
  componentDidMount(){
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunset&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
          photos: response.data.photos.photo
      });
    })
    .catch(error => {
        console.log('Error fetching and parsing data', error);
    })
  }


  

  render(){
    //console.log(this.state.photos)
    return (
      <React.Fragment>
        <SearchForm />
        <Gallary
         data={this.state.photos}
         loading={this.state.loading} />
      </React.Fragment>
    
    )
  }
     
    
  257913707
}
