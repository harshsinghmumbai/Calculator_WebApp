import { useState } from "react";

const Calculator = () => {
  const [currentvalue, setcurrentvalue] = useState("");

  const clickhandle = (e /*value passsed here as a parameter*/) => {
    setcurrentvalue(currentvalue.concat(e.target.value));
  };

  const cleardata = () => {
    setcurrentvalue("");
  };

  const calculate = () => {
    setcurrentvalue(
      eval(currentvalue),
      toString() /*any error as null or not-valid should be convert into string*/
    );
  };
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
              className="outline-none border-[9px] border-black rounded-t-xl w-[16rem] h-[5rem] text-4xl text-right text-red-500 font-semibold font-mono "
              value={currentvalue} //to show current value on calculator screen//
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
              value="C" //initial value of input button//
              onClick={cleardata}
            />
            <input
              type="button"
              className="btn"
              value="<" //initial value of input button//
              onClick={clickhandle}
            />
            <input
              type="button"
              className="btn"
              value="%" //initial value of input button//
              onClick={clickhandle}
            />
            <input
              type="button"
              className="outline-none bg-[#f9a9d4] w-12 h-12 rounded-xl text-center text-2xl font-bold "
              value="/" //initial value of input button//
              onClick={clickhandle}
            />
            <input
              type="button"
              className="btn"
              value="7" //initial value of input button//
              onClick={clickhandle}
            />
            <input
              type="button"
              className="btn"
              value="8" //initial value of input button//
              onClick={clickhandle}
            />
            <input
              type="button"
              className="btn"
              value="9" //initial value of input button//
              onClick={clickhandle}
            />
            <input
              type="button"
              className="outline-none bg-[#f9a9d4] w-12 h-12 rounded-xl text-center text-2xl font-bold "
              value="*" //initial value of input button//
              onClick={clickhandle}
            />
            <input
              type="button"
              className="btn"
              value="4" //initial value of input button//
              onClick={clickhandle}
            />
            <input
              type="button"
              className="btn"
              value="5" //initial value of input button//
              onClick={clickhandle}
            />
            <input
              type="button"
              className="btn"
              value="6"
              onClick={clickhandle}
            />
            <input
              type="button"
              className="outline-none bg-[#a5b4fb] w-12 h-12 rounded-xl text-center text-2xl font-bold "
              value="-"
              onClick={clickhandle}
            />
            <input
              type="button"
              className="btn"
              value="1"
              onClick={clickhandle}
            />
            <input
              type="button"
              className="btn"
              value="2"
              onClick={clickhandle}
            />
            <input
              type="button"
              className="btn"
              value="3"
              onClick={clickhandle}
            />
            <input
              type="button"
              className="outline-none bg-[#d8b4fe] w-12 h-12 rounded-xl text-center text-2xl font-bold "
              value="+"
              onClick={clickhandle}
            />
            <input
              type="button"
              className="btn"
              value="0"
              onClick={clickhandle}
            />
            <input
              type="button"
              className="btn"
              value=">"
              onClick={clickhandle}
            />
            <input
              type="button"
              className="btn"
              value="."
              onClick={clickhandle}
            />
            <input
              type="button"
              className="outline-none bg-[#fdba74] w-12 h-12 rounded-xl text-center text-2xl font-bold "
              value="="
              onClick={calculate}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
