import headImage from "../../Asset/usedImages/IMG_header.jpeg";
import FoodContainer from "../UI/FoodContainer";

const HeroPage = (props) => {
  return (
    <div>
      <p className="text-2xl font-mono">Delightful</p>
      <p className="text-5xl font-sans pb-10">Dinner Shack</p>
      <img
        src={headImage}
        className="object-cover object-buttom h-64 w-full rounded-hpic pb-10"
      ></img>
    </div>
  );
};

export default HeroPage;
