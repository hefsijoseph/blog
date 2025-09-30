import Navbar from "./Navbar";
import Home from "./Home";
import NewBlog from "./NewBlog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // dynamic values or variables
  // const title = 'Welcome to the new blog';
  // const likes = 50;

  // const link = "https://www.google.com"

  // in react we can not output object and boolean in template
  // const person = { name: 'yoshi', age: 30}

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<NewBlog />} />
          </Routes>
          {/* <h1>{ title }</h1>
      <p>liked { likes } times</p> */}

          {/* we can write direct dynamic values in curly braces */}

          {/* <p>{ 10 }</p>
      <p>{ " hello ninjas" } </p>
      <p>{ [1,2,3,4,5] }</p>
      <p>{ Math.random() * 10 }</p> */}

          {/* use dynamic value in attribute */}
          {/* <a href={ link }>Go Google site</a> */}
        </div>
      </div>
    </Router>
  );
}

// export component so we can
export default App;
