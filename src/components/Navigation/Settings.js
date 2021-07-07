import Button from "../UI/Button";
import { IoSettings } from "react-icons/io5";

const Settings = (props) => {
  return (
    <Button className="w-36 h-11 text-left pl-4 flex gap-3 pt-2">
      <IoSettings size="22" />
      <span className="font-mono tracking-wide text-sm font-medium pt-0.5">
        Settings
      </span>
    </Button>
  );
};

export default Settings;
