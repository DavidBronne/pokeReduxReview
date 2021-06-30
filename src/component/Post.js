import React, {Component} from 'react';
import {connect} from 'react-redux';

class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/')
    }

    render() {
        console.log(`this.props`, this.props)
        const {post} = this.props
        const postDetail = post ? (
            <div className="post">
                <h4 className="center">{post.title}</h4>
                <p>{post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        delete post
                    </button>
                </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {dispatch({type:"DELETE_POST", id:id})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post)