import React, { useEffect } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const status = localStorage.getItem("status");
    const game_id = localStorage.getItem("game_id");

    // 🔹 Extract role from URL path
    const roleFromPath = location.pathname.split("/")[1];
    const currentPage = location.pathname.split("/")[2];

    console.log("Current Page:", currentPage);
    console.log("Game Status:", status);

    let decodedToken = null;

    // ✅ Always decode the token to prevent ESLint hook errors
    if (token && token.split(".").length === 3) {
        try {
            decodedToken = jwtDecode(token);
        } catch (error) {
            console.error("Token decoding failed:", error);
            localStorage.removeItem("token");
        }
    }

    // ✅ Move `useEffect` to the top level before any `return`
    useEffect(() => {
        if (status === "in_game" && game_id) {
            if (roleFromPath === "student") {
                navigate(`/student/test/${game_id}`, { replace: true });
            } else if (roleFromPath === "teacher") {
                navigate(`/teacher/host-test/${game_id}`, { replace: true });
            }
        }

        if (
            (currentPage === "host-test" && roleFromPath === "teacher" && status === "out_game") ||
            (currentPage === "test" && roleFromPath === "student" && status === "out_game")
        ) {
            navigate(`/${roleFromPath}/home`, { replace: true });
        }
    }, [status, game_id, roleFromPath, currentPage, navigate]);

    // 🔹 If token is missing or invalid, redirect to sign-in
    if (!decodedToken) {
        return <Navigate to="/sign-in" replace />;
    }

    // 🔹 Verify user role matches the URL path role
    if (decodedToken.role !== roleFromPath) {
        console.warn(`Unauthorized access attempt by ${decodedToken.role}`);
        return <Navigate to="/sign-in" replace />;
    }

    return children;
};

export default ProtectedRoute;