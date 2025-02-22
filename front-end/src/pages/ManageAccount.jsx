import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import AdminNav from "../components/AdminNav";
const ManageAccount = () => {
    const [users, setUsers] = useState([
        { id: 1, username: "john_doe", password: "123456", realName: "John Doe", email: "john@example.com", role: "Admin" },
        { id: 2, username: "jane_smith", password: "abcdef", realName: "Jane Smith", email: "jane@example.com", role: "User" },
        { id: 3, username: "mark_wilson", password: "qwerty", realName: "Mark Wilson", email: "mark@example.com", role: "Moderator" },

     
    ]);

    
    return(
        <div className="bg-[#574979]">


            <div className="w-full h-screen mx-auto container flex justify-center items-center 2">
                        <div className="w-4/5 flex flex-col gap-10 justify-center items-center ">

                            <div className="flex w-full item-center justify-start">
                                <Link to = "/admin/create-account" className="text-center bg-[#8E74D0] text-2xl  text-white px-5 py-3 rounded-xl cursor-pointer hover:bg-white transition-colors duration-400 ease-in-out hover:text-[#8E74D0] ">Create New</Link>
                            </div>
                        
                        
                            <div className="w-full overflow-auto h-[400px] ">
                                <table className="w-full sticky ">
                                    <thead className="bg-[#8E74D0] text-white">
                                        <th className="py-4 font-large text-xl">No.</th>
                                        <th className="py-4 font-large text-xl">Username</th>
                                        <th className="py-4 font-large text-xl">Password</th>
                                        <th className="py-4 font-large text-xl">Real Name</th>
                                        <th className="py-4 font-large text-xl">Email</th>
                                        <th className="py-4 font-large text-xl">Role</th>
                                    </thead>
                                    <tbody className=" overflow-y-auto">
                                        {users.map(user => {
                                            return (<tr className="odd:bg-white bg-gray-300">
                                                <td className="py-4 text-xl text-center">{user.id}</td>
                                                <td className="py-4 text-xl text-center">{user.username}</td>
                                                <td className="py-4 text-xl text-center">{user.password}</td>
                                                <td className="py-4 text-xl text-center">{user.realName}</td>
                                                <td className="py-4 text-xl text-center">{user.email}</td>
                                                <td className="py-4 text-xl text-center">{user.role}</td>
                                            </tr>)
                                        })}
                                
                                    
                                    </tbody>
                                </table>
                            </div>
                        

                        </div>
            </div>
        </div>

       
    )
}

export default ManageAccount;