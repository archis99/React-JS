import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
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
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Hello');
  }

  videoSearch(term) {
      YTSearch({key:API_KEY, term},(videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
        console.log(this.state.videos);
      });
    }


  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 1000);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
