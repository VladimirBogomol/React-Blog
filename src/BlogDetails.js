import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import deletePost from './deletePost'

function BlogDetails() {
    const {id} = useParams();
    const { data: blog, isLoading, error } = useFetch("http://localhost:8000/posts/" +id);
    const navigate = useNavigate();

    const afterDelete = () => {
       navigate("/");
    }

    return (
      <div className="blog-details">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p className="author">Written by: {blog.author}</p>
            <div className="blog-body">{blog.body}</div>
            <button onClick={()=> {if(window.confirm('Do you wish delte this post?'))deletePost(blog.id, afterDelete)}} className="btn-delete">Delete</button>
          </article>
        )}
      </div>
    );
}

export default BlogDetails;