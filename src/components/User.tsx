import React, { useState } from "react";
import {RiDeleteBin6Line} from "react-icons/ri";
import {RiEdit2Line} from "react-icons/ri";
 const User = ({id, email, name, onDelete, onEdit}:{id:number, email:string, name:string, onDelete:any, onEdit:any}) => {
    // const [newName, setnewName] = useState("");
    // const [newEmail, setnewEmail] = useState("");
    const [edit, setedit] = useState(false);
    const showFromedit = () => {
        setedit(!edit);
    }
    const handleDelete = () => {
        onDelete(id);
    }
    const handleEdit = (e:any) => {
        // console.log(newName);
        e.preventDefault();
        onEdit(id, e.target.name.value, e.target.email.value);
        setedit(!edit);
        // e.preventDefault();
    }
    // const handleChange = (e:any) => {
        
        
    //     setnewName(e.target.value);
    // }

    // const temp = () => {
        
    //     console.log("to");
    //     return(
    //         <form>
    //             {/* {console.log("to")} */}
              
    //         </form>
    //         )
    // }

    return(<>
    <div className="w-max h-max text-black border-b-2">
       
        <div className="flex items-center">
            <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""/>
            <div className="font-medium text-start flex-initial w-64">
                <div>{name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{email}</div>
                
            </div>
            <div className="flex-1 w-fit">
                <span className="bg-green-50 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full dark:bg-green-700 dark:text-green-300">Active</span>
            </div>
            <div className="flex-1 w-fit basis-1/8 mx-2" >
                Admin
                
            </div>
            <div className="flex-1 w-fit basis-1/8 mx-2" >
                <div>15 jan
                    <small>4:59pm</small>
                </div>
                
                
            </div>
            <button onClick={showFromedit} className="flex-1 w-fit basis-1/8 mx-2" >
            <RiEdit2Line/>
                
            </button>
            <button onClick={handleDelete} className="flex-1 w-fit basis-1/8 mx-2" >
                
                <RiDeleteBin6Line />
                
            </button>
            
            
           
        </div>
        {edit && (
        <form onSubmit={handleEdit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
                {/* <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">New Name</label> */}
                <input placeholder="Name" name="name" defaultValue={name} type="text" className="  bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                <input placeholder="Email" name="email" defaultValue={email} type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
              </div>
              
              <button onSubmit={handleEdit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      )}
        
        

        
    </div>
    </>)
}
export default User;