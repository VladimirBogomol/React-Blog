import { Link } from "react-router-dom";
import deletePost from "./deletePost";

function BlogList({posts, updateFlag, setUpdateFlag}) {

    return (
      <div className="blog">
        {posts.map((post) => (
          <div className="post-preview" key={post.id}>
            <Link to={`./blogs/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.author}</p>
            </Link>
            <button onClick={() =>{if(window.confirm('Do you wish delte this post?')){deletePost(post.id, setUpdateFlag(!updateFlag));}}} className="btn-delete">Delete</button>
          </div>
        ))}
      </div>
    );
}

export default BlogList;