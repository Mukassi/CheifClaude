const IngredientsForm = ({ submitForm }) => {
  return (
    <form className="w-full flex items-center justify-center gap-3" onSubmit={submitForm}>
      <input
        placeholder="e.g. oregano"
        className="w-full flex-1 h-full border border-solid border-[#D1D5DB] rounded-md py-[9px] px-[13px] shadow text-[14px] focus-visible:outline-blue-400"
        aria-label="Add ingredient"
        name="ingredient"
      />
      <button className="w-max h-full flex items-center px-[15px] text-white rounded-md py-[9px]  bg-black text-[14px] focus-visible:outline-blue-400 sm:px-[35px] hover:bg-black/85">
        <div>
          + Add<span className="hidden sm:inline"> ingredient</span>
        </div>
      </button>
    </form>
  );
};

export default IngredientsForm;
