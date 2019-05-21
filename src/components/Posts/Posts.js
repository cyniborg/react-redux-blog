import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './Post';
import { fetchPosts } from '../../actions/postActions';

class Posts extends Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    UNSAFE_componentWillReceiveProps(nextProp){
      if(nextProp.newPost){
        this.props.posts.unshift(nextProp.newPost);
      }
    }

  render() {
    return (
      <article className="bt bb b--black-10">
        {this.props.posts.map((e,i) => <Post key = {i} {...e} />)}
        
      </article>
    )
  }
}

const mapStateToProps = (state)=>({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts);