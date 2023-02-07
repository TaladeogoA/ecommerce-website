// import CategoryItem from "./components/category-item/CategoryItem";
// import categories from "./assets/categories.json";
import "./App.scss";
import CategoriesContainer from "./components/categories-container/CategoriesContainer";

const App = () => {
  return (
    <CategoriesContainer />
    // <div className="categories__container">
    //   {categories.map((category) => {
    //     return <CategoryItem key={category.id} category={category} />;
    //   })}
    // </div>
  );
};

export default App;
