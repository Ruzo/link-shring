import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import {Links} from '../../imports/collections/links';

const PAGE_LOAD = 10;
let limit = 10;

class LinkList extends Component {
  constructor(props){
    super(props);

    this.page = 1;
  }

  linkRow({url, token, clicks}, index){
    const shrinkLink = `http://localhost:3000/${token}`;
    return(
      <tr key={index}>
        <td>{url}</td>
        <td><a href={shrinkLink}>{shrinkLink}</a></td>
        <td>{clicks}</td>
      </tr>
    );
  };


  render() {
    return (
      <table className="w3-table-all">
        <thead>
          <tr className="w3-blue-grey">
            <th>Shrink'd</th>
            <th>URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {this.props.links.map(this.linkRow)}
        </tbody>
      </table>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('links');
  return {links: Links.find({}).fetch()}
}, LinkList);