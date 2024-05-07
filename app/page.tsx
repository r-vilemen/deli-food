import Header from "./src/components/header";
import Search from "./src/components/search";

const Home = () => {
  return (
    <>
      <Header />
      <div className="pt6 px-5">
        <Search />
      </div>
    </>
  );
};

export default Home;
