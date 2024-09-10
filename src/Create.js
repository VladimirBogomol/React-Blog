import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Create() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);

          fetch("http://localhost:8000/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
          }).then(() => {
            console.log("New post was added");
            setIsPending(false);
            navigate('/');
          });
    }


    return (
      <div className="create">
        <h2>Add new post</h2>
        <form onSubmit={handleSubmit}>
          <label>Post title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <label>Post content</label>
          <textarea
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>

          <label>Author</label>
          <select
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          >
            <option value="" disabled></option>
            <option value="John Doe">John Doe</option>
            <option value="Mary Jane">Mary Jane</option>
            <option value="Tom Soyer">Tom Soyer</option>
          </select>
          {isPending && <button disabled>Adding post</button>}
          {!isPending && <button>Create post</button>}
        </form>
      </div>
    );
}

export default Create;