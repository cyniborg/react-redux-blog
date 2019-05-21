import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newPost } from '../actions/postActions';

class Postform extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: ""
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.newPost({...this.state});

    }

    handleChange = (e) => {
     this.setState({
         [e.target.name]: e.target.value
     })
    }

  render() {
    return (
        <main className="pa4 black-80">
            <h3 className="baskerville fw1 ph3 ph0-l">Form</h3>
            <form className = "measure center">
                <div className="mt3">
                    <label className = "db fw6 lh-copy f6" htmlFor="title">Post Title</label>
                    <br/>
                    <input className = "pa2 input-reset ba bg-transparent w-100" type="text" name = "title" value = {this.state.name} onChange = {this.handleChange} />
                </div>
                <div className="mt3">
                    <label className = "db fw6 lh-copy f6" htmlFor="body">Body</label>
                    <br/>
                    <textarea className="pa2 input-reset ba bg-transparent w-100" name="body" value = {this.state.body} onChange = {this.handleChange} id="form-body" cols="30" rows="10"></textarea>
                </div>
                <div className="mt3">
                    <button  type = "submit" className = "f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib mid-gray" onClick = {this.handleSubmit}>Submit</button>
                </div>
            </form>
        </main>
    )
  }
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { newPost })(Postform)
