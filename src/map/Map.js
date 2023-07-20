import {Component} from "react";

class Map extends Component {
    state = {
        posts: [
            {id: 1, title: 'HTML'},
            {id: 2, title: 'Css'},
            {id: 3, title: 'React JS'},
            {id: 4, title: 'Axios'},
        ]
    }
    render() {
        return (
            <div>
                {this.state.posts.map(post => (
                    <h1 key={post.id}>{post.id}. {post.title}</h1>
                ))}
            </div>
        )
    }
}
export default Map