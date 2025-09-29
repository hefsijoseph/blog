import { useState } from "react";

const Home = () => {
    
    // useState used to make values reactive
    // where by we destructure variable 
    // and function that used to change that variable

    // const [name, setName] = useState('mario')
    // const [age, setAge] = useState(25)

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...',author: 'mario', id: 1},
        { title: 'Welcome party', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        { title: 'Web dev top tips!', body: 'lorem ipsum...', author: 'mario', id: 3}
    ])

    // let name = 'mario'
    // click events 

    // const handleClick = (e) => {
    //     console.log('you clicked me ', e);
    // }


    // const handleClick = () => {
    //     // name = 'luigi';
    //     // console.log(name)

    //     // setName('hefsi')
    //     // setAge(30)
    // }
   
    // events object we accesses to when event occured

    // const handleClickAgain = (name, e) => {
    //    console.log('hello  ' + name, e.target);
    // }

    return ( 
        <div className="home">

              {/* when output list in map 
              each root element must have a key */}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                  <h2>{ blog.title }</h2>
                  <p>Written by { blog.author }</p>
                </div>
            ))}
          
             {/* automaticaly run/invoke a function without click */}
            {/* <button onClick={ handleClick('yoshi') }>click me</button> */}

            {/* pass arguements in function use anonymous function */}

            {/* <button onClick={ (e) => {
                handleClickAgain('hefsi ', e);
            }}>click me again</button>
            <button onClick={ handleClick }>click me</button> */}
            {/* <p>{ name } is {age} years old</p> */}
        </div>
     );
}
 
export default Home;