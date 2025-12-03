import { Link } from "react-router-dom";

const HeroTextData = [
  {
    title: "Variety Brands",
    description:
      "Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio",
  },
  {
    title: "Awesome Suports",
    description:
      "Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit",
  },
  {
    title: "Maximum Freedom",
    description:
      "Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in",
  },
  {
    title: "flexibility on the go",
    description:
      "Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis.faucibus rhoncus. Iaculis dignissim aenean pellentesque nisl",
  },
];

const HeroText = () => {
  return (
    <>
      <div className="flex justify-between md:flex-nowrap flex-wrap md:gap-12 gap-9 mx-auto md:mt-[120px] mt-[60px]">
        <h1 className=" font-worksans font-bold md:text-5xl text-4xl md:text-start text-center">
          Where every drive feels extraordinary
        </h1>
        <div className=" grid grid-cols-2 gap-4">
          {HeroTextData.map((item) => (
            <div key={item.title}>
              <h1 className="font-worksans font-semibold text-3xl leading-8">
                {item.title}
              </h1>
              <p className="font-inter font-normal text-base mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Introduction = () => {
  return (
    <>
      <div>
        <h1 className="md:text-[50px] text-[32px] font-bold font-worksans text-center mt-6 text-main ">
          About Us
        </h1>
        <div className=" flex items-center gap-2 justify-center">
          <Link rel="stylesheet" to="/">
            <button className="font-worksans font-normal text-[20px] text-graycus2 cursor-pointer">
              Home
            </button>
          </Link>
          <span className="font-worksans font-normal text-[20px] text-graycus2">
            /
          </span>
          <Link rel="stylesheet" to="/about">
            <button className="font-worksans font-normal text-[20px] text-main cursor-pointer">
              About Us
            </button>
          </Link>
        </div>
        <HeroText />
      </div>
    </>
  );
};

export default Introduction;
