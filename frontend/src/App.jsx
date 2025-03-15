import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AddDebtor from "./pages/AddDebtor";
import CreditManagerDash from "./pages/CreditManagerDash";
import Blacklist from "./pages/Blacklist";
import ViewDebtors from "./pages/ViewDebtors";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AddDebtor" element={AddDebtor} />
            <Route path="/creditmanager" element={<CreditManagerDash />}>
              <Route path="/creditmanager/AddDebtor" element={AddDebtor} />
            </Route>
            <Route path="/Blacklist" element={Blacklist} />

            <Route path="/ViewDebtors" element={ViewDebtors} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
