import { useState } from "react";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("mario")

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
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
        <button>Add blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default NewBlog;
