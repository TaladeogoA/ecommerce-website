import "./CategoryItem.scss";

const CategoryItem = ({ category }) => {
  return (
    <div className="category__container">
      <div
        className="bg__img"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div className="category__content__container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
