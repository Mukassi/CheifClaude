import { useState } from 'react';

export default function Main() {
  const [ingredients, setIngredients] = useState(['Chicken', 'Oregano', 'Tomatoes']);
  function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get('ingredient');
    console.log('click', newIngredient, ingredients);
    setIngredients((prev) => {
      return [...prev, newIngredient];
    });
  }
  return (
    <main className="py-[70px] mx-auto flex flex-col max-w-[600px] px-[10px]">
      <form className="w-full flex items-center justify-center h-[38px] gap-3" onSubmit={submitForm}>
        <input
          placeholder="e.g. oregano"
          className="flex-1 h-full border border-solid border-[#D1D5DB] rounded-md py-[9px] px-[13px] shadow text-[14px] focus-visible:!outline-gray-400 "
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button className="w-max h-full flex items-center px-[35px] text-white rounded-md py-[9px]  bg-black text-[14px]">
          <span>+ Add ingredient</span>
        </button>
      </form>
      <ul>{ingredients.map((ingredient) => ingredient && <li key={ingredient}>{ingredient}</li>)}</ul>
    </main>
  );
}
