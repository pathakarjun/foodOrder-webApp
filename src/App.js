import Order from "./components/Cart/Order";
import HeroPage from "./components/Layout/HeroPage";
import Favorite from "./components/Navigation/Favorite";
import Home from "./components/Navigation/Home";
import Settings from "./components/Navigation/Settings";
import Profile from "./components/User/Profile";

function App() {
  return (
    <div className="bg-gray-reqGray flex h-auto px-8 py-8 ">
      <div className="w-1/6 relative pr-8 pt-16">
        <Profile />
        <div className="grid  grid-cols-1 gap-3 justify-items-center pb-12 border-b">
          <Home />
          <Favorite />
          <Settings />
        </div>
      </div>
      <div className="flex flex-grow w-5/6 h-auto bg-white rounded-req px-10 pt-10">
        <div className="w-4/6  pr-8">
          <HeroPage />
        </div>
        <div className="flex w-2/6  px-8">
          <Order />
        </div>
      </div>
    </div>
  );
}

export default App;
