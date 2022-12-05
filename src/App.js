import { useEffect, useState } from "react";
import { SignClient } from "@walletconnect/sign-client";
import "./App.css";

function App() {
  const [signClient, setSignClient] = useState();

  async function createClient() {
    try {
      const client = await SignClient.init({
        projectId: process.env.REACT_APP_PROJECT_ID,
      });
      setSignClient(client);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (!signClient) {
      createClient();
    }
  }, [signClient]);

  return (
    <div className="App">
      <h1>Youtube Tutorial</h1>
    </div>
  );
}

export default App;
