import { useState } from 'react';

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);
  function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get('ingredient');
    if (newIngredient) {
      setIngredients((prev) => {
        return [...prev, newIngredient];
      });
      event.currentTarget.reset();
    }
  }

  function handleRecipeShown() {
    setRecipeShown((prev) => !prev);
  }
  return (
    <main className="py-[70px] mx-auto flex flex-col max-w-[600px] px-[10px] gap-12">
      <form className="w-full flex items-center justify-center gap-3" onSubmit={submitForm}>
        <input
          placeholder="e.g. oregano"
          className="w-full flex-1 h-full border border-solid border-[#D1D5DB] rounded-md py-[9px] px-[13px] shadow text-[14px] focus-visible:outline-blue-400"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button className="w-max h-full flex items-center px-[15px] text-white rounded-md py-[9px]  bg-black text-[14px] focus-visible:outline-blue-400 sm:px-[35px]">
          <div>
            + Add<span className="hidden sm:inline"> ingredient</span>
          </div>
        </button>
      </form>
      {!!ingredients.length && (
        <div className="flex flex-col gap-12 py-5">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl text-[##141413] font-semibold">Ingredients on hand:</h2>
            <ul className="list-disc pl-7 text-[#475467] text-lg">
              {ingredients.map((ingredient, index) => ingredient && <li key={ingredient + index}>{ingredient}</li>)}
            </ul>
          </div>
        </div>
      )}
      <div className="flex justify-between bg-[#F0EFEB] py-7 px-10 rounded gap-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium">Ready for a recipe?</h3>
          <div className="font-normal text-[##6B7280] text-sm">Generate a recipe from your list of ingredients</div>
        </div>
        <div className="flex items-end">
          <button
            className="px-3 py-2 bg-[#D17557] rounded-lg text-white text-sm focus-visible:outline-blue-400"
            onClick={handleRecipeShown}
          >
            Get a recipe
          </button>
        </div>
      </div>
      {recipeShown && (
        <section>
          <h2>Chef Claude Recommends:</h2>
          <article className="suggested-recipe-container" aria-live="polite">
            <p>
              Based on the ingredients you have available, I would recommend making a simple a delicious{' '}
              <strong>Beef Bolognese Pasta</strong>. Here is the recipe:
            </p>
            <h3>Beef Bolognese Pasta</h3>
            <strong>Ingredients:</strong>
            <ul>
              <li>1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
            </ul>
            <strong>Instructions:</strong>
            <ol>
              <li>Bring a large pot of salted water to a boil for the pasta.</li>
              <li>
                In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a
                wooden spoon, until browned and cooked through, about 5-7 minutes.
              </li>
              <li>
                Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is
                translucent.
              </li>
              <li>Stir in the tomato paste and cook for 1 minute.</li>
              <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
              <li>
                Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the
                flavors to meld.
              </li>
              <li>
                While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and
                return it to the pot.
              </li>
              <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
              <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
            </ol>
          </article>
        </section>
      )}
    </main>
  );
}
