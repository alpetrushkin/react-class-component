import React, {Component} from 'react';
import Posts from "../components/Posts";

class App extends Component {
    state = {
        posts: [
            {id: 1, title: 'HTML'},
            {id: 2, title: 'Css'},
            {id: 3, title: 'React JS'},
            {id: 4, title: 'Axios'},
        ]
    }

    handlePostDeleted= (id) => {
        this.setState({posts: this.state.posts.filter(p => p.id !== id)})
    }

    render() {
        const {posts} = this.state
        return (
            <div style={{border: '1px solid red', display: 'inline-block', padding: '30px', width: '200px'}}>
                {/*<Count />*/}
                {/*<Mount />*/}
                {/*<Timer />*/}
                {/*<Map />*/}
                <Posts posts={posts} callback={this.handlePostDeleted} />
                <h3>{this.state.posts.length} постов</h3>
            </div>
        );
    }
}

export default App;