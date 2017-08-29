import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details'
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

const API_KEY = 'AIzaSyD-TUD7_n38hzskSK7oDWRXqHMCwdmsoTY';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({key:API_KEY, term:'Game of Thrones'},(videos) => {
      this.setState({videos});
      console.log(this.state.videos);
    });
  }
  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetails video={this.state.videos[0]} />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
