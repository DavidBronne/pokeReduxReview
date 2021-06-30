import React, {Component} from 'react';
import {connect} from 'react-redux';

class Post extends Component {
    

    render() {
        const {post} = this.props
        const postDetail = post ? (
            <div className="post">
                <h4 className="center">{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ) : (
            <div className="center">Post Lodading... </div>
        )
        return(
            <div className="container">{postDetail}</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

export default connect(mapStateToProps)(Post)