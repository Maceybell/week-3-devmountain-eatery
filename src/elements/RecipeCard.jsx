import React from "react";
import styles from "./RecipeCard.module.css";
import { useNavigate } from "react-router-dom";


const RecipeCard = ({recipe}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.food}>
          <img
            src={recipe.image_url} 
            alt="food"
            className={styles.food_img}
          ></img>
          <p className={styles.name}>{recipe.recipe_name}</p>
        </div>
        

        <button className={styles.more_btn} onClick={handleClick}>
          See More
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
