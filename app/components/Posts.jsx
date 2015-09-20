import React, { Component, PropTypes } from 'react';
// const shell = require 'shell'
import shell from 'shell';

export default class Posts extends Component {

  onClickLink(event, post) {
    console.log(event.target);
    console.log(event.target.value);
    console.log(post.permalink);
    shell.openExternal(`http://www.reddit.com${post.permalink}`);
  }

  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) =>
          <li key={i}><a href="#" onClick={e => this.onClickLink(e, post)}>{post.title}</a></li>
        )}
      </ul>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};
