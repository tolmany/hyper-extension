const Header = () => {
  return (
    <div className="w-full h-8 bg-[#0DCAF0] flex relative justify-center ">
      <div className="text-lg text-white font-bold">HyperExtension</div>
      <div
        className="text-lg text-white font-bold absolute right-5 cursor-pointer"
        onClick={() => window.close()}
      >
        &times;
      </div>
    </div>
  );
};

export default Header;
