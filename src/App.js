import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authenticate from "./routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<div>I am the shop page!</div>} />
        <Route path="/auth" element={<Authenticate />} />
      </Route>
    </Routes>
  );
};

export default App;
