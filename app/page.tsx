import CategoryList from "./src/components/category/category-list";
import Header from "./src/components/header";
import Search from "./src/components/search";

const Home = () => {
  return (
    <>
      <Header />
      <div className="pt6 px-5">
        <Search />
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>
    </>
  );
};

export default Home;
