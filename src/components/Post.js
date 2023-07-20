const Post = ({title, callback}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
            <div
                style={{cursor: 'pointer', display: 'inline'}} >
                {title}
            </div>
            <button onClick={callback}>delete</button>
        </div>
    );
};

export default Post;