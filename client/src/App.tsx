import { useEffect, useState } from "react";
import axios from "./api/axios";

const App = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    let isMounted = true;
    const fetchFromServer = async () => {
      try {
        const response = await axios.get("/");

        if (isMounted) setMessage(response.data);
      } catch (error) {
        console.log(error);
        setMessage("Couldn't connect to the server!");
      }
    };
    fetchFromServer();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 grid place-content-center">
      <div className="bg-zinc-900 p-8 rounded-lg">
        <h1 className="text-blue-500 text-xl font-bold">{message}</h1>
      </div>
    </div>
  );
};

export default App;
