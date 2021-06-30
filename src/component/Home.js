import React, {Component} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import Pokeball from '../pokeball.png';

class Home extends Component {
    
    state = {
        posts:[]
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then((res)=>{
                this.setState(
                    {posts : res.data.slice(0,10)}
                )
            })
    }

    render () {
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map((post) => {
                        return (
                            <div className="post card" key={post.id}>
                                <div className="card-content">
                                    <img src={Pokeball} alt="A Pokeball"/>
                                    <NavLink to={'/' + post.id}>
                                        <div className="card-title red-text">{post.title}</div>
                                    </NavLink>
                                    <p>{post.body}</p>
                                </div>
                            </div>
                        )
                    })
        ) : (
                <div className="center">No post yet</div>
            )

        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
                
            )
    }
}

export default Home 