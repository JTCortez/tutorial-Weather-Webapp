import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index.js';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    //when we have a call back to a JSX element (onFormSubmit), and it makes a
    // referenece to 'this', we must bind the context
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    //we need go and fetch the weather
    this.props.fetchWeather(this.state.term);
    //component rerenders
    this.setState({term: ''});

  }

  render () {
    return (
      //classname from bootstrap
      <form onSubmit = {this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast from the searched city"
          className="form-control"
          value={this.state.term}
          //callback
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

//passing in a function the maps the dispatch to the props of the containers
//must come in to the 2nd argument, so make null for the first argument
export default connect(null, mapDispatchToProps)(SearchBar);
