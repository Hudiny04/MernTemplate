import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/components/Navbar";
import  Category1   from "./pages/Category1/Category1";
import  Category2  from "./pages/Category2";
import  Category3  from "./pages/Category3";
import  Category4  from "./pages/Category4";
import Category1Details from "./pages/Category1/Category1Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category1" element={<Category1 />} />
            <Route path="/category2" element={<Category2 />} />
            <Route path="/category3" element={<Category3 />} />
            <Route path="/category4" element={<Category4 />} />
           
            <Route path="/category1/:id" element={<Category1Details />} />
          

             
            <Route path="*" element={<h1>404: Not Found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
