import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // useState used to make values reactive
  // where by we destructure variable
  // and function that used to change that variable

  // const [name, setName] = useState('mario')
  // const [age, setAge] = useState(25)



  // let name = 'mario'
  // click events

  const [name, setName] = useState("mario");
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

  const changeName = () => {
    setName("luigi");
  };
  // const handleDelete = (e, id) => {
  //   // 1. STOP the event from bubbling up to parent elements
  //   e.stopPropagation();
  //   // const newBlog = blogs.filter((blog) => blog.id !== id);
  //   // setBlogs(newBlog);
  // };

  // use effect runs for every render/ when place/ changes element in the dom
  // with this hook we can fetch data, perform authentication
  //   useEffect(() => {
  //     console.log("use effect ran");
  //   });

  // use effect with dependency that runs for only first render
  // useEffect(() => {
  //     console.log("use effect ran with [] ");
  //   }, []);

  // use effect render when name changes
  // you render this hook for any value changes
  // use of dependency used to control when this hook to run
  // useEffect(() => {
  //     console.log("use effect ran with [] ");
  //   }, [name]);

  // destructure ( get data that you need ) some of data from usefetch
  // name data as blogs in this context
  const { data:blogs, isPending, error } = useFetch("http://localhost:8000/blogs")

  return (
    <div className="home">
      {/* // passing props 
          //  from parent component to child component */}

      {/* conditional template in react 
          logical and 
          if blogs is null
          then evaluate false then does bother with right side
          when blogs have values then it will output blogs */}
    { error && <div>{ error }</div>}

      {isPending && <div>Loading...</div>}

      {blogs && (
        <BlogList
          blogs={blogs}
          title="All blogs!"
          // handleDelete={handleDelete}
        />
      )}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "mario")}
          title="Mario's blogs"
        />
      )}

      <p>{name}</p>
      <button onClick={changeName}>change name</button>

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
};

export default Home;
