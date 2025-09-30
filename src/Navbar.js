import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Blog </h1>
            <div className="links">
                 {/* every a tag have ability to send request to server
                 link tag makes not all link will not sent to server
                 hence make spa */}

                <Link to="/">Home</Link>
                {/* how to apply inline css 
                 for background-color written as backgroundColor */}
                {/* <a href="/create" style={ { 
                    color: "white",
                    backgroundColor: 'rgb(10, 175, 112)',
                    borderRadius: '8px'
                 } }>New blog</a> */}

                 <Link to="/create">New blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;