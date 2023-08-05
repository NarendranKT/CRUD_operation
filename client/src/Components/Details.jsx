import axios from 'axios'
import { createSearchParams, useNavigate } from 'react-router-dom';
import UpdateDetails from './UpdateDetails';
import {GrRefresh} from "react-icons/gr"

export default function Details(props) {
    const navigate = useNavigate();
    const { _id, companyName, description, Linkedin, phoneNumber } = props;
    
    function handleDelete(id) {
        axios.delete(`http://localhost:8000/company/DeleteDetails/${id}`)
            .then((res) => console.log(res))
            .catch((err)=>console.log(err))
    }

    function handleUpdate(id) {
        navigate({
            pathname: "/update",
            search: createSearchParams({ id }).toString()
        });
    }


    return (
        <div className="p-5 flex flex-col items-center  ">

            <div className="p-5 w-8/12 flex flex-col bg-white rounded-md  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 border-0 border-sky-100 shadow-2xl opacity-90">

                <table className=" table-auto border-spacing-1 flex flex-col mx-5">
                    <tr  className=" p-3">
                        <th >Company Name  :</th>
                        <td className="pl-8">{ companyName }</td>
                    </tr>

                    <tr className=" p-3">
                        <th className='mx-4'>Description  :</th>
                        <div><td className="pl-16">{ description }</td></div>
                    </tr>

                    <tr className=" p-3">
                        <th>Phone Number  :</th>
                        <td className=" pl-10">{ phoneNumber }</td>
                    </tr>
                </table>
                
                <div className="text-white flex justify-center justify-items-center ">

                    <button className="mt-3 mr-7 bg-indigo-800 hover:bg-violet-700 w-20 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75 ps-1 pe-1"><a href={Linkedin} target="-blank"> Linkedin </a></button>

                    <button className="mt-3 mr-7 bg-indigo-800 hover:bg-violet-700 w-20 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75 ps-1 pe-1"
                            onClick={()=> handleUpdate(_id)}
                    >Edit</button>

                    <button className="p-1 mt-3 mr-7 bg-indigo-800 hover:bg-violet-700 w-20 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75 ps-1 pe-1"
                            onClick={()=> handleDelete(_id)}
                    >Delete</button>

                </div>
            </div>

        
        </div>
        // <li key={companyName}> { companyName}</li>
        
    )
} 
