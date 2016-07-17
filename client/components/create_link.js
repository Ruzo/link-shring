import React, {Component} from 'react';
import NewLinkForm from './new_link_form';
import {Meteor} from 'meteor/meteor';

class CreateLink extends Component {
  constructor(props){
    super(props);

    this.state = {
      error: ''
    };
  }

  handleSubmit(url){
    Meteor.call('insert.link', url, (err) => {
      if(err) {
        this.setState({error: 'Please enter a valid URL.'});
      } else {
        this.setState({error: ''});
      }
    });
  }

  render() {
    return (
      <div>
        <NewLinkForm handleSubmit = {this.handleSubmit.bind(this)} error={this.state.error}/>
      </div>
    );
  }
}

export default CreateLink;