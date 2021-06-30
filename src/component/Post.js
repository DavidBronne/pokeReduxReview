import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component {
    
    state = {
        post:null
    }

    componentDidMount() {
        const id = this.props.match.params.post_id
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
         .then((res) => {
             console.log('res :>> ', res);
             this.setState(
                 {post:res.data}
             )
         })
    }

    render() {
        const {post} = this.state
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

export default Post