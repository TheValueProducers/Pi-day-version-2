import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import AdminNav from "../components/AdminNav";

const CreateAccount = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [realName, setRealName] = useState("");
    const [email, setEmail] = useState("");
    const token = localStorage.getItem("token");

    const createAccount = async (e) => {
        e.preventDefault(); // Prevent form submission reload

        // ✅ Input Validation
        if (username.length <= 6 || username.length > 12) {
            alert("Username length must be longer than 6 characters and less than 12 characters");
            return;
        } else if (password.length <= 6) {
            alert("Password length must be longer than 6 characters.");
            return;
        } else if (realName.trim() === "") {
            alert("Real name cannot be empty.");
            return;
        } else if (email.trim() === "" || !email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        try {
            const response = await axios.post("https://pi-day-version-2.onrender.com/api/v2/admin/create-account", {
                username,
                password,
                full_name: realName,
                email,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`, // ✅ Send token in headers
                },
            });

            if (response.status === 201) {
                alert("Teacher account has been created successfully.");
                navigate("/admin/setting"); // Redirect after success
            } else {
                alert("Failed to create account. Please try again.");
            }
        } catch (err) {
            console.error("Error creating account:", err);
            alert("An error occurred while creating the account.");
        }
    };

    return (
        <>
            <AdminNav />
            <div className="bg-[#574979] min-h-screen">
                <div onClick={() => navigate("/admin/manage-account")} className="absolute top-3 left-3 text-sm md:text-xl md:top-6 md:left-6 flex items-center gap-2 cursor-pointer">
                    <ArrowLongLeftIcon className="size-8 text-white" />
                    <p className="text-xl font-semibold text-white">Go Back</p>
                </div>

                <div className="w-full h-screen flex justify-center items-center">
                    <form className="flex flex-col items-center justify-evenly w-1/2 md:bg-white gap-8 py-8 px-4 rounded-lg shadow-lg" onSubmit={createAccount}>
                        <h1 className="text-3xl font-medium text-center text-white md:text-black">Create Account</h1>

                        <div className="w-full flex flex-col items-center gap-6">
                            <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="Username" className="border-1 text-xl px-4 py-2 bg-white md:w-2/3 border rounded-md" />
                            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" className="border-1 text-xl px-4 py-2 bg-white md:w-2/3 border rounded-md" />
                            <input onChange={(e) => setRealName(e.target.value)} value={realName} type="text" placeholder="Real Name" className="border-1 text-xl px-4 py-2 bg-white md:w-2/3 border rounded-md" />
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" className="border-1 text-xl px-4 py-2 bg-white md:w-2/3 border rounded-md" />

                            <button type="submit" className="text-center bg-[#8E74D0] text-lg md:text-xl font-medium text-white px-8 py-2 rounded-lg cursor-pointer hover:bg-white transition-colors duration-300 ease-in-out hover:text-[#8E74D0]">
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateAccount;