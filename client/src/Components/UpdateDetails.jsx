import axios from 'axios';
import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';


export default function UpdateDetails() {
    const [idParam] = useSearchParams();
    const userId = idParam.get("id");

    const [user, Setuser] = React.useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/company/search/${userId}`)
        .then((res) => { Setuser(res.data) })
        .catch((err)=>{console.log(err);})
    }, [])


    

    function handleData(e){
    const { value, name } = e.target;
    Setuser(prevData => {
      return {
        ...prevData,
        [name] : value
      }
    });
  }
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        if (user.companyName === "" || user.description === "" || user.phoneNumber === "" || user.Linkedin === "") {
            alert("Please fill all details to continue...");
        } else {
            axios.put(`http://localhost:8000/company/UpdateDetails/${userId}`, user).then((res) => console.log(res))
                .catch((err) => console.log(err));
            
            navigate('/')
        }
    }

    return (
      <div className="h-full flex flex-col justify-center items-center" >
        {/* <h1 className="my-5 text-3xl antialiased font-medium tracking-wider align-middle">ADD DETAILS</h1> */}

        <div class="p-4 text-5xl font-extrabold ...">
          <span class=" bg-clip-text text-transparent text-indigo-400 ">ADD DETAILS</span>
        </div>  

        <div className=" h-5/6 w-7/12 flex flex-col items-center justify-center">

          <div className="h-full w-full flex bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50  items-center justify-center border-0 border-sky-100 shadow-2xl opacity-90">

            <form onSubmit={handleSubmit} className=" flex flex-col w-2/3 justify-center">
                <input type="text"
                className="h-12 ps-4 bg-white-300 outline-white border rounded-md shadow-xl opacity-90"
                placeholder="Company Name"
                onChange={handleData}
                value={user.companyName}
                autoComplete="off"
                name="companyName"
              />
            <br />
                <textarea className="p-4 bg-white-300 outline-white border rounded-md shadow-xl opacity-90 resize-none"
                name="description"
                placeholder="Description..."
                autoComplete="off"
                cols="20"
                rows="10"
                onChange={handleData}
                value={user.description} />
                <br />
                
                <input className="h-12 ps-4 bg-white-300 outline-white border rounded-md shadow-xl opacity-90"
                type="text"
                name="Linkedin"
                placeholder="Linkedin url"
                autoComplete="off"
                onChange={handleData}
                value={user.Linkedin} />
            
                <br />

                <input className="border border-white-500 h-12 ps-4 bg-white-300 outline-white border rounded-md shadow-xl opacity-90"
                type="text"
                maxLength={10}
                name="phoneNumber"
                placeholder="phone no."
                autoComplete="off"
                onChange={handleData}
                value={user.phoneNumber} />
            
                <br />
                
              <div className="flex justify-center">
                <button className="text-white bg-violet-800 hover:bg-violet-600 w-32 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75">Add</button>
              </div>
      
              </form>
            
        </div>
      </div>
      </div>
    );
}
