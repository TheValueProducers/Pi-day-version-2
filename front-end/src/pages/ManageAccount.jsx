import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import AdminNav from "../components/AdminNav";
import axios from "axios";
const ManageAccount = () => {
    const token = localStorage.getItem("token")
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/v2/admin/display-account", {
                    headers: {
                        Authorization: `Bearer ${token}`, // ✅ Send token in headers
                    }
                });
                
                if (response?.data && response.data.teachers.length > 0) {
                    setUsers(response.data.teachers);
                }
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchData();
    }, []);

    
    return(
        <>
        <AdminNav />
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
                                        {users.map((user, index) => {
                                            return (<tr className="odd:bg-white bg-gray-300">
                                                <td className="py-4 text-xl text-center">{index+1}</td>
                                                
                                                <td className="py-4 text-xl text-center">{user.username}</td>
                                                <td className="py-4 text-xl text-center">{user.password}</td>
                                                <td className="py-4 text-xl text-center">{user.full_name}</td>
                                                <td className="py-4 text-xl text-center">{user.email}</td>
                                                <td className="py-4 text-xl text-center">Teacher</td>
                                            </tr>)
                                        })}
                                
                                    
                                    </tbody>
                                </table>
                            </div>
                        

                        </div>
            </div>
        </div>
        </>

       
    )
}

export default ManageAccount;