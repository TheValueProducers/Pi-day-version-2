const axios = require('axios');

(async () => {
    try {
        const response = await axios.post(
            "https://pi-day-v2.onrender.com/api/v2/student/register",
            {  
                username: "john_doe",
                password: "SecurePass123",
                fullName: "John Doe",
                email: "johndoe@example.com",
                yearGroup: "12",
                classGroup: "A"
            }, 
            { headers: { "Content-Type": "application/json" } }
        );
        console.log("handling response");

        if (response.status === 201) {
            console.log("✅ Account created successfully!");
        }
    } catch (err) {
        console.error("❌ Error:", err.response?.data?.message || err.message);
    }
})();