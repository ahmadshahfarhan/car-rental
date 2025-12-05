import Testing from "../../../assets/hero/new.png";

const BlogData = [
  {
    title: "How to choose the right car",
    time: "News / 12April 2024",
    image: Testing,
  },
  {
    title: "Which plan is right for me?",
    time: "News / 12April 2024",
    image: Testing,
  },
  {
    title: "Enjoy Speed, Choice & Total Control",
    time: "News / 12April 2024",
    image: Testing,
  },
];  
const Blog = () => {
  return (
    <>
      <div>
        <h1 className="md:text-5xl text-3xl text-main font-worksans font-bold text-center">
          Latest blog posts & news
        </h1>
        <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-[40px]">
          {BlogData.map((item) => (
            <div className=" space-y-3">
              <img src={item.image} className=" rounded-[20px]" alt="" />
              <h1 className=" font-worksans font-semibold text-xl text-main">
                {item.title}
              </h1>
              <p className=" font-worksans font-normal text-graycus2">
                {item.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
