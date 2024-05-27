function Button({ value }) {
  return (
    <button className="md:text-xl mr-2 mb-2 py-1 md:py-2 pl-5 pr-[.8rem] w-fit rounded-full  bg-gray-800  bg-gradient-to-b text-white from-[#115DCE] to-[#042B66] list-none">
      {value}
    </button>
  );
}

export default Button;
