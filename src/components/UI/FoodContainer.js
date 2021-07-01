import Button from "./Button";

const FoodContainer = (props) => {
  return (
    <div
      className={`${"h-40 w-40 rounded-hpic relative"} ${props.foodBgColor}`}
    >
      <div className="absolute bottom-3 w-full text-center justify-items-center">
        <img src={props.foodImage} />
        <p className="text-sm">{props.foodName}</p>
        <p className="text-xl font-semibold">{props.foodPrice}</p>
      </div>
      <Button className="absolute bottom-0 right-0 rounded-full h-10 w-10 text-3xl text-center  ">
        +
      </Button>
    </div>
  );
};

export default FoodContainer;
