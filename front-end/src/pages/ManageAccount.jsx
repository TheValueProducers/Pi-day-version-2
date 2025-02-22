import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
const ManageAccount = () => {
    const [users, setUsers] = useState([
        { id: 1, username: "john_doe", password: "123456", realName: "John Doe", email: "john@example.com", role: "Admin" },
        { id: 2, username: "jane_smith", password: "abcdef", realName: "Jane Smith", email: "jane@example.com", role: "User" },
        { id: 3, username: "mark_wilson", password: "qwerty", realName: "Mark Wilson", email: "mark@example.com", role: "Moderator" },
    ]);

    
    return(
        <div className="w-full  h-screen flex justify-center items-center 2">
            <div className="h-2/3 w-4/5 flex flex-col justify-evenly ">
                <Link to = "/admin/create-account" className="text-center bg-[#8E74D0] text-3xl w-1/5  text-white px-5 py-3 rounded-xl cursor-pointer hover:bg-white transition-colors duration-400 ease-in-out hover:text-[#8E74D0] ">Create New</Link>
                <table className="w-full h-2/3  border-collapse border-1">
                    <thead className="h-1/7 border-b">
                        <th className="font-large text-xl">No.</th>
                        <th className="font-large text-xl">Username</th>
                        <th className="font-large text-xl">Password</th>
                        <th className="font-large text-xl">Real Name</th>
                        <th className="font-large text-xl">Email</th>
                        <th className="font-large text-xl">Role</th>
                    </thead>
                    <tbody className="overflow-scroll">
                        {users.map(user => {
                            return (<tr className="">
                                <td className="text-xl text-center">{user.id}</td>
                                <td className="text-xl text-center">{user.username}</td>
                                <td className="text-xl text-center">{user.password}</td>
                                <td className="text-xl text-center">{user.realName}</td>
                                <td className="text-xl text-center">{user.email}</td>
                                <td className="text-xl text-center">{user.role}</td>
                            </tr>)
                        })}
                
                        

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ManageAccount;