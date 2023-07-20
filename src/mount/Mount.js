import {Component} from "react";
import './mount.css'

class Mount extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            loading: true,
            comments: []
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({posts: data, loading: false}))

        this.timerId = setInterval(() => {
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(data => this.setState({comments: data}))
        }, 3000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidMount')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.timerId)
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    {this.state.loading
                        ? (<h3>Loading...</h3>)
                        : (<h3>{this.state.posts.length} постов загружено</h3>)
                    }
                </div>
            </div>
        )
    }
}

export default Mount