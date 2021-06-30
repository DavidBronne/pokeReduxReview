import React, {Component} from 'react';

class Post extends Component {
    
    state = {
        id:null
    }

    componentDidMount() {
        this.setState(
            {id:this.props.match.params.post_id}
        ) 
    }

    render() {
        const {id} = this.state
        console.log('id :>> ', id);
        return(
            <h4>{id}</h4>
        )
    }
}

export default Post