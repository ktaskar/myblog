import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import { AddBlog } from "./components/addblog";

function App() {
  
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/addblog" element={<AddBlog />}></Route>
     </Routes>
   
    </div>
  );
}

export default App;
