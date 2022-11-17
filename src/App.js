import React from "react";
import Movielist from "./components/Movielist";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./constexts/MovieContext";
import { UserProvider } from "./constexts/UserContext";


function App() {

  return (
  <div>
      <UserProvider>
        <MovieProvider>
          <Navbar />
          <Movielist />
        </MovieProvider>
      </UserProvider>
  </div>
  );
}

export default App;
