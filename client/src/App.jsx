import {  
    BrowserRouter as Router,  
    Routes,  
    Route,
    Link    
} from 'react-router-dom';  
import {FcRefresh} from "react-icons/fc"
import AddDetails from './Components/AddDetails';
import Details from './Components/Details';
import UpdateDetails from './Components/UpdateDetails';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [details, setDetails] = useState([]);
  const [searchData, setSearchData] = useState([]);

  
  // $Fetch data from server and to set State.
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/company/')
        .then(details => {
          setDetails(details.data);
          return details;
          // console.log(details.data);
        }).then((data) => {
          setSearchData(data.data);
          return
        })
        .catch(err => console.log(err));
  }, [])

  // $To handle the changed data and refresh the data.
  function handleRefresh(){
      axios.get('http://localhost:8000/company/')
        .then(details => {
          setDetails(details.data);
          // console.log(details.data);
        })
        .catch(err => console.log(err));
  }

  // $To handle the search data and details
  function handleSearchChange(e) {
    if (!e.target.value) return handleRefresh() ;
    
    const value = e.target.value.trim();
    const result = details.filter(data => data.companyName.toLowerCase().trim().includes(value));
    
    if (result.length === 0) return handleRefresh();
    setDetails(result)
  }

  // $To send each item object to Details component and displaying it
  const data = details.map((item) => { 
    return <Details {...item} />
  })
   
  return (
    <div className='h-screen overflow-y-scroll no-scrollbar bg-gradient-to-r from-gblue to-royal'>

      <Router >
        <div className='sticky top-0 z-30 flex flex-direction: row justify-end items-center  space-x-10 > * + * bg-gray-800 opacity-80 bg-clip-padding backdrop-filter backdrop-blur-2xl border-b-2 border-gray-500 text-white py-3 shadow-sky-500/50 px-4 '>
          
          <input type="text" placeholder='search... ' className='ps-4 w-5/12 h-10 border rounded-lg text-black outline-none' onChange={handleSearchChange}/>
         
          <Link className='text-white bg-black hover:bg-sky-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-7 py-3 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 opacity-100' to="/"> Show</Link>
          
          <Link className='text-white bg-black hover:bg-sky-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-7 py-3 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 opacity-100' to="/add"> Add</Link>
          
          <button className='flex text-slate-700 bg-white rounded-lg font-medium hover:bg-gray-400 items-center px-6 py-2 ' onClick={handleRefresh}>Refresh <span className='px-1'><FcRefresh/></span></button>
        </div>
        
        
      <Routes>
        <Route path="/" element={data}/>
          <Route path="/add" element={<AddDetails />} />
          <Route exact path='update' element={ <UpdateDetails/> } />
      </Routes>
      </Router>
      
      {/* {data} */}
    </div>
  );
}

export default App;
