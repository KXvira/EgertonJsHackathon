import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddDebtor from "./pages/AddDebtor";
import CreditManagerDash from "./pages/CreditManagerDash";
import Blacklist from "./pages/Blacklist";
import ViewDebtors from "./pages/ViewDebtors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creditmanager" element={<CreditManagerDash />}>
          <Route path="AddDebtor" element={<AddDebtor />} />
          <Route path="ViewDebtors" element={<ViewDebtors />} />
          <Route path="Blacklist" element={<Blacklist />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
