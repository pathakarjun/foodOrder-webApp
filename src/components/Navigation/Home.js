import Button from "../UI/Button";
import { AiFillHome } from "react-icons/ai";

const Home = (props) => {
  return (
    <Button className="w-36 h-11 text-left pl-4 flex gap-3 pt-2">
      <AiFillHome size="22" />
      <span className="font-mono tracking-wide text-sm font-medium pt-0.5">
        Home
      </span>
    </Button>
  );
};

export default Home;
