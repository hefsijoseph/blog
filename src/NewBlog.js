import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("mario")
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    // prevent default behavior
    //  when form is being submitted
    // for page to refresh
    e.preventDefault()
    const blog = { title,body,author}
    setIsPending(true)
    console.log(blog)
    // making a post request
    // sending blog object to endpoint
    fetch('http://localhost:8000/blogs',{
        method: 'post',
        headers: {"Content-Type": "application/json"},
        // convert blog object
        // into json string
        body: JSON.stringify(blog)
    })
    .then( () => {
        console.log('new post added')
        setIsPending(false)
        navigate('/')
    })
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label> Blog title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label> Blog body: </label>
        <textarea 
        value={body}
        onChange={ (e) => setBody(e.target.value)}
        required>

        </textarea>
        <label>Blog author:</label>
        <select 
        value={author}
        onChange={ (e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
      { !isPending && <button>Add blog</button>}
      { isPending && <button disabled>Adding blog...</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default NewBlog;
