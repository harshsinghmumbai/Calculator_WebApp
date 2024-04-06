const Calculator = () => {
  return (
    <>
      <div
        id="parent_container"
        className="flex justify-center items-center h-screen"
      >
        <div
          id="calculator_part"
          className="border-2 border-black rounded-t-xl rounded-b-xl p-2"
        >
          <div id="input_part" className="">
            <input
              type="text"
              className="outline-none border-[9px] border-black rounded-t-xl w-[16rem] h-[5rem] text-4xl text-right text-red-500 font-semibold font-serif "
            />
          </div>
          <div
            id="name_part"
            className="text-2xl font-bold bg-[#d1d2d9] text-center leading-6 py-1 tracking-wider"
          >
            Calculator
          </div>
          <div
            id="input_part"
            className="grid grid-cols-4 grid-rows-5 gap-3 gap-y-4 p-3 py-4 bg-[#101827] rounded-b-xl"
          >
            <input
              type="button"
              className="outline-none bg-[#fda5a5] w-12 h-12 rounded-xl text-center text-2xl font-bold "
              value="C"
            />
            <input type="button" className="btn" value="<" />
            <input type="button" className="btn" value="%" />
            <input
              type="button"
              className="outline-none bg-[#f9a9d4] w-12 h-12 rounded-xl text-center text-2xl font-bold "
              value="/"
            />
            <input type="button" className="btn" value="7" />
            <input type="button" className="btn" value="8" />
            <input type="button" className="btn" value="9" />
            <input
              type="button"
              className="outline-none bg-[#f9a9d4] w-12 h-12 rounded-xl text-center text-2xl font-bold "
              value="*"
            />
            <input type="button" className="btn" value="4" />
            <input type="button" className="btn" value="5" />
            <input type="button" className="btn" value="6" />
            <input
              type="button"
              className="outline-none bg-[#a5b4fb] w-12 h-12 rounded-xl text-center text-2xl font-bold "
              value="-"
            />
            <input type="button" className="btn" value="1" />
            <input type="button" className="btn" value="2" />
            <input type="button" className="btn" value="3" />
            <input
              type="button"
              className="outline-none bg-[#d8b4fe] w-12 h-12 rounded-xl text-center text-2xl font-bold "
              value="+"
            />
            <input type="button" className="btn" value="0" />
            <input type="button" className="btn" value=">" />
            <input type="button" className="btn" value="." />
            <input
              type="button"
              className="outline-none bg-[#fdba74] w-12 h-12 rounded-xl text-center text-2xl font-bold "
              value="="
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
