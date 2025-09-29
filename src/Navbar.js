const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Blog </h1>
            <div className="links">
                <a href="/">Home</a>
                {/* how to apply inline css 
                 for background-color written as backgroundColor */}
                {/* <a href="/create" style={ { 
                    color: "white",
                    backgroundColor: 'rgb(10, 175, 112)',
                    borderRadius: '8px'
                 } }>New blog</a> */}

                 <a href="/create">New blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;