import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/Navigation";
import Home from "./components/routes/home/Home";
import SignIn from "./components/routes/sign-in/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
