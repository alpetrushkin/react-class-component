import Post from "./Post";

const Posts = ({posts, callback}) => {
    return posts.map(post => (
            <div>
                <Post
                    key={post.id}
                    title={post.title}
                    callback={() => callback(post.id)}
                />
            </div>
        )
    );
};

export default Posts;