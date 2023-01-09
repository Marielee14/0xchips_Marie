import React from "react";
import NavBar from "./components/templates/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OtherdeedForOtherside from "./pages/OtherdeedForOtherside";
import NFTs from "./pages/NFTs";
import MyPage from "./pages/MyPage"
import Footer from "./components/templates/Footer";
import Tabs from "./components/templates/Tabs";

import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";

import GameTabs from "./components/templates/Tabs";

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>

          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/nfts" element={<NFTs />} />
            <Route path="/OdForOs" element={<OtherdeedForOtherside />} />
            <Route path="/myPage" element={<MyPage />} />
            <Route path="/game" element={<GameTabs/>} />
          
          
          </Routes>
          <Footer />
 
      </ChakraProvider>
    </Router>
  );
}

export default App;
