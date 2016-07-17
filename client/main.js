import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import Header from './components/header';
import CreateLink from './components/create_link';
import {Links} from '../imports/collections/links';
import LinkList from './components/link_list';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CreateLink />
        <LinkList />
      </div>
    );
  }
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('container'));
});