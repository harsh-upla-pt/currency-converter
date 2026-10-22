import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Box({ From, To, convertedValue, setValue, setCurrValue,currVal }) {
  const [isDropped, setIsDropped] = useState(false);
  // const [selectedCurrency, setSelectedCurrency] = useState("");

  const dropdownRef = useRef(null);

  const Currencies = useSelector((state) => state.currencies);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropped(false);
      }
    }

    if (isDropped) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropped]);

  return (
    <div className={`relative w-full bg-[#aab3ba] flex justify-between p-2 ${isDropped ? "z-20" : ""}`}>
      <div className="flex flex-col gap-3 ">
        <h2 className="text-[#232725ab] text-2xl">{From ? "From" : "To"}</h2>
        <input
          type="number"
          className={`focus:outline-none text-xl p-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                    [&::-webkit-outer-spin-button]:appearance-none ${To && "select-none"} `}
          disabled={To ? true : false}
          placeholder="Enter amount"
          value={To && String(convertedValue)}
          onChange={(e) => {setValue(Number(e.target.value))}}
        />
      </div>
      <div className="flex flex-col gap-3" ref={dropdownRef}>
        <h2 className="text-end text-2xl text-[#232725ab]">Currency Type</h2>
        <div className="relative">
          <button
            type="button"
            className="flex justify-evenly cursor-pointer text-xl p-1 appearance-none w-full"
            aria-expanded={isDropped}
            onClick={() => {
              setIsDropped((prev) => !prev);
            }}
          >
            {currVal ? currVal : "Currency"}
            <span
              className={`${isDropped ? "rotate-0" : "rotate-180"} inline-block transition-all duration-300 text-center relative top-0.5`}
            >
              ^
            </span>
          </button>
          {isDropped && (
            <div
              className="absolute top-full right-0 z-30 pointer-events-auto bg-[#008000a4] flex flex-col text-white transition-all duration-500 max-h-50 overflow-y-auto"
            >
              {Currencies &&
                Currencies.map(([key, value]) => (
                  <input
                    type="button"
                    key={`${value}-${key}`}
                    className="border-b border-b-[#ffffff70] px-3 py-1 cursor-pointer text-[16px] text-left"
                    value={key}
                    onClick={(e) => {
                      setCurrValue(e.target.value);
                      setIsDropped(false);
                    }}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Box;
