import { Link } from "react-router-dom";

const BlogList = ({ blogs, title,handleDelete }) => {
     // destructure props above is shortcut for the code 
    // const blogs= props.blogs;
    // const title = props.title
   

    return (
     <div className="blog-list">
         <h2>{ title }</h2>
            {/* when output list in map 
                each root element must have a key */}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                  <Link to={`/blogs/${blog.id}`}>
                  <h2>{ blog.title }</h2>
                  <p>Written by { blog.author }</p>
                  </Link>
                  {/* <button onClick={(e) => handleDelete(e,blog.id)}>Delete blog</button> */}
                </div>
            ))}
     </div>
    );
};

export default BlogList;