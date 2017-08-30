import React, { Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChange(event){
      this.setState({term: event.target.value});
      this.props.onSearchTermChange(this.state.term);
  }

  render() {
    return(
      <div className='search-bar'>
        <input
          onChange = {event => this.onInputChange(event)}
          placeholder='Search Video' />
      </div>
    );
  }
}

export default SearchBar;
