import { useParams } from "react-router-dom";

const BlogDetails = () => {
    // grab parameters/ route parameter from url  by use of hook
    const { id } = useParams()

    return ( 
        <div className="blog-details">
            <h2>Blog details { id } </h2>
        </div>
     );
}
 
export default BlogDetails;