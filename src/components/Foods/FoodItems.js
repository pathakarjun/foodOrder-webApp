import FoodContainer from "../UI/FoodContainer";

const DUMMY_FOODITEMS = [
  {
    id: "fi1",
    name: "Burger",
    price: "$10.00",
    image: null,
    bgColor: "bg-yellow-200",
  },
  {
    id: "fi2",
    name: "Pizza",
    price: "$14.49",
    image: null,
    bgColor: "bg-red-200",
  },
  {
    id: "fi3",
    name: "Cake",
    price: "$7.99",
    image: null,
    bgColor: "bg-purple-200",
  },
  {
    id: "fi4",
    name: "Hot dog",
    price: "$4.49",
    image: null,
    bgColor: "bg-green-200",
  },
  {
    id: "fi5",
    name: "Fries",
    price: "$2.99",
    image: null,
    bgColor: "bg-yellow-200",
  },
  {
    id: "fi6",
    name: "Coke",
    price: "$2.49",
    image: null,
    bgColor: "bg-gray-200",
  },
  {
    id: "fi7",
    name: "Chicken Fingers",
    price: "$16.00",
    image: null,
    bgColor: "bg-pink-200",
  },
  {
    id: "fi8",
    name: "Ice Cream",
    price: "$3.49",
    image: null,
    bgColor: "bg-blue-200",
  },
  {
    id: "fi9",
    name: "Pasta",
    price: "$7.99",
    image: null,
    bgColor: "bg-red-200",
  },
  {
    id: "fi10",
    name: "Chicken Sandwich",
    price: "$7.99",
    image: null,
    bgColor: "bg-yellow-200",
  },
  {
    id: "fi11",
    name: "Frozen Drinks",
    price: "$3.99",
    image: null,
    bgColor: "bg-gray-200",
  },
  {
    id: "fi12",
    name: "Donut",
    price: "$2.00",
    image: null,
    bgColor: "bg-indigo-200",
  },
];

const FoodItems = () => {
  const foodList = DUMMY_FOODITEMS.map((food) => (
    <FoodContainer
      foodName={food.name}
      foodPrice={food.price}
      foodImage={food.image}
      foodBgColor={food.bgColor}
    />
  ));

  return (
    <div className="flex flex-wrap justify-around gap-4  pb-16">{foodList}</div>
  );
};

export default FoodItems;
