import { Fragment } from "react-is";
import CheckoutButton from "./components/Layout/CheckoutButton";
import Favorite from "./components/Navigation/Favorite";
import Home from "./components/Navigation/Home";
import Settings from "./components/Navigation/Settings";
import Profile from "./components/User/Profile";

function App() {
  return (
    <div className="bg-gray-reqGray flex h-screen px-8 py-8">
      <div className="w-1/6 relative pr-8 pt-16">
        <Profile />
        <div className="grid  grid-cols-1 gap-4 justify-items-center pb-12 border-b">
          <Home />
          <Favorite />
          <Settings />
        </div>
      </div>
      <div className="flex w-5/6 bg-white rounded-req	relative px-8 pt-8">
        <div className="w-4/6 relative pr-8"></div>
        <div className="w-2/6 relative px-8 py-8"></div>
      </div>
    </div>
  );
}

export default App;
