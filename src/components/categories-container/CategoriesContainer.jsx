import CategoryItem from "../category-item/CategoryItem";
import categories from "../../assets/categories.json";
import "./CategoriesContainer.scss";

const CategoriesContainer = () => {
  return (
    <div className="categories__container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoriesContainer;
