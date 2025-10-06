import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from './../App';
import { checkAuth } from "./auth";
import { AuthProvider } from "../contexts/AuthContext";

async function Root() {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    

    useEffect(() => {

        async function init() {

            try{
               
                const data = await checkAuth()

                if(data?.authenticated){
                    setUser(data.user)
                }

            }catch(err){
                console.log("Not authenticated");
            }
       finally {
        setLoading(false);
            
        }
    }

    init()

    },[])

    if (loading) {
    return <div className="text-center p-10">Loading...</div>;
  }

  return (
    
    <AuthProvider >
      <App />
    </AuthProvider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

Root()