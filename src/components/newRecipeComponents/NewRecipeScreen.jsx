import React, { useState } from "react";
import styles from "./NewRecipe.module.css";
import { Formik } from "formik";
import axios from "axios";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };
  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  

  axios
    .post(`https://recipes.devmountain.com/recipes`, values)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const ingredientDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    );
  });

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.title_recipe}>
              <input
                type="text"
                placeholder="Recipe Name"
                name="recipeName"
                value={values.recipeName}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Image Url"
                name="imageURL"
                values={values.imageURL}
                onChange={handleChange}
              />
            </div>
            <div className={styles.radio_container}>
              <span>
                <input
                  type="radio"
                  value="Cook"
                  name="type"
                  onChange={handleChange}
                />
                <h4>Cook</h4>
              </span>
              <span>
                <input
                  type="radio"
                  value="Bake"
                  name="type"
                  onChange={handleChange}
                />
                <h4>Bake</h4>
              </span>
              <span>
                <input
                  type="radio"
                  value="Drink"
                  name="type"
                  onChange={handleChange}
                />
                <h4>Drink</h4>
              </span>
            </div>
            <div className={styles.recipe_data}>
              <input
                type="text"
                name="prepTime"
                placeholder="Prep Time"
                values={values.prepTime}
                onChange={handleChange}
              />
              <input
                type="text"
                name="cookTime"
                placeholder="Cook Time"
                values={values.cookTime}
                onChange={handleChange}
              />
              <input
                type="text"
                name="serves"
                placeholder="Serves"
                values={values.serves}
                onChange={handleChange}
              />
            </div>
            <h1>Ingredients</h1>
            <div className={styles.input_container}>
              <div className={styles.ingredient_inputs}>
                <input
                  type="text"
                  placeholder="Ingredient"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
              </div>
              <ul>{ingredientDisplay}</ul>
            </div>
            <button
              type="button"
              className={styles.add_btn}
              onClick={addIngredient}
            >
              Add Another
            </button>
            <textarea
              name="instructions"
              rows={5}
              placeholder="Type recipe instructions"
              value={values.instructions}
              onChange={handleChange}
            />
            <button type="submit" className={styles.submit_btn}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
