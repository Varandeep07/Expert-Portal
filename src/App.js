import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Route, Routes} from 'react-router-dom';
import ExpertList from './components/ExpertList'
import CustomNavbar from './components/NavBar';
import ExpertProfile from './components/ExpertProfile';
import About from './components/About';
import { useState } from 'react';
import data from './components/ExpertData.json';
import Pagination from './components/Pagination';

const App = () => {

  // Pagination logic starts
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const posts = data;
  
  // Get current Posts
  const indexOfLastPost = Math.min(posts.length,currentPage * postsPerPage);

  const indexOfFirstPost = indexOfLastPost - (indexOfLastPost===posts.length && posts.length%postsPerPage!==0? posts.length%postsPerPage:postsPerPage);
  
  // slicing the current page's profiles from json file
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost); 
 
  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  document.body.style.background = "#f2efd9";
  return (
      <div className="App">
        <CustomNavbar/>
        <Routes>
            <Route path = '/' element={<div className='container'><ExpertList posts={currentPosts}/><div className='mx-2'><Pagination postsPerPage = {postsPerPage} totalPosts = {posts.length} paginate={paginate}/></div></div>}/>

          <Route path = '/About' Component={About}/>
          <Route path='/ExpertProfile/:id' Component={ExpertProfile}/>
        </Routes>
      </div>  
  );
}

export default App;
