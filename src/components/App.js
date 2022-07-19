import React, {Component} from 'react'
import axios from 'axios'
import SearchForm from './SearchForm'
import Gallary from './Gallary'
import Nav from './Nav'
import Error404 from './Error404.js'
import apiKey from  './config.js'
import {BrowserRouter, Route, Switch} from "react-router-dom"

//App  class sets/updates states and controls routing for each search performed
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos:[],
      cherryBlossom:[],
      snow:[],
      flower:[],
      query: '',
      loading: true,
    } 
  } 
  componentDidMount(){
    this.performSearch('cherry blossom')
    this.performSearch('snow')
    this.performSearch('flower')
    this.performSearch()
  }
  //As defaults  imgs of  orchids are displayed, depending on usr preferences, app can display 3 different categories or allow the user to search his own
  performSearch = (query = 'orchid') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        if (query === 'cherry blossom'){
          this.setState({
            cherryBlossom: response.data.photos.photo, 
            query:'cherry blossom', 
            loading:false
          })
        }else if (query === 'snow'){
          this.setState({
            snow: response.data.photos.photo, 
            query:'snow', 
            loading:false
          })
        }else if (query === 'flower'){
          this.setState({
            flower: response.data.photos.photo, 
            query:'flower', 
            loading:false
          })
        }else{
          this.setState({
            photos: response.data.photos.photo,
            loading: false,
            query: query
          });
        }
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
}
  
  
  render(){

    return (
      <BrowserRouter> 
        
          <SearchForm onSearch={this.performSearch}/>
          <Nav onClick={this.performSearch}/>

          
          <Switch>
            <Route exact path='/'render={ () => 
              <Gallary 
                data = {this.state.photos}
                query='Orchid' 
                loading={this.state.loading}
              />
            }/>
            <Route exact path='/cherryBlossom'render={ () => 
              <Gallary 
                data = {this.state.cherryBlossom}
                query= 'Cherry Blossom'
                loading={this.state.loading}
              />
            }/>
            <Route exact path='/snow' render={ () => 
              <Gallary
                data = {this.state.snow}
                query='Snow' 
                loading={this.state.loading} 
              />
            }/>
            <Route exact path='/flower' render={ () => 
              <Gallary
                data = {this.state.flower}
                query='Flower'
                loading={this.state.loading} 
              />
            }/>
            <Route path="/search/:query" render={() => 
              <Gallary 
                data={this.state.photos} 
                loading={this.state.loading} 
                query={this.state.query}
              />
            }/>

            <Route path="*" component={Error404} /> 
          </Switch>
      
      </BrowserRouter>
    
    )
  }

}
