import React, {Component} from 'react';

class NewLinkForm extends Component {

  handleSubmit(e){
    e.preventDefault();

    this.props.handleSubmit(this.refs.url.value);
  }

  render(){
    return (
      <form className="w3-container w3-light-grey w3-padding" onSubmit={this.handleSubmit.bind(this)}>
        <label className="w3-label w3-xlarge">URL</label>
        {this.props.error && <span className="w3-yellow w3-card-4 w3-padding-small w3-margin-left w3-margin-bottom" >{this.props.error}</span>}
        <input className="w3-input w3-border w3-animate-input" ref="url" required />
        <button className="w3-btn w3-deep-orange w3-margin-top w3-xlarge" type="submit">Shrink!</button>
      </form>
    );
  }
}

export default NewLinkForm;