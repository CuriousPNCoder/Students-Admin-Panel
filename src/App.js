import './App.css';
// import Addremove from "./Components/Practice/addremove";
import Arrayprops from "./Components/Practice/arrayprops"
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Registration from './Components/Practice/registration';
import Studentlist from './Components/Practice/studentlist';



function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Arrayprops />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="/studentlist" element={<Studentlist />}></Route>
          </Routes>
        </BrowserRouter>
        {/* <Addremove /> */}
        {/* <Arrayprops /> */}
      </ChakraProvider>
    </>
  );
}

export default App;
