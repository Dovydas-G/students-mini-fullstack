import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageStudents } from "./pages/PageStudents";
import { BasicLayout } from "./layout/BasicLayout";
import { PageBasketball } from "./pages/PageBasketball";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route Component={BasicLayout}>
        <Route path='/' element={<PageStudents />} />
        <Route path='/basketball' element={<PageBasketball />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}


export default App;