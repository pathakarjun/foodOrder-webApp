import userAvatar from "../../Asset/avatar/Asset28.png";

const USER_DATA = {
  id: "u1",
  name: "Arjun Pathak",
  staddress: "1338  Valley Drive, Newark",
  state_country: "Pennsylvania, USA",
};
const Profile = (props) => {
  return (
    <div className="grid  grid-cols-1 gap-1 justify-items-center pb-14">
      <ul>
        <img
          src={userAvatar}
          className="object-contain h-28 w-28 rounded-req border-6 border-white"
        />
      </ul>
      <ul className="text-2xl font-medium font-sans">{USER_DATA.name}</ul>
      <ul className="grid grid-cols-1 text-xs justify-items-center text-gray-500">
        <ul>{USER_DATA.staddress}</ul>
        <ul>{USER_DATA.state_country}</ul>
      </ul>
    </div>
  );
};

export default Profile;
