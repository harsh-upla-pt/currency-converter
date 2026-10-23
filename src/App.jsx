import { ArrowDownUpIcon } from "@animateicons/react/lucide";
import Box from "./components/Box";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [firstCurrency, setFirstCurrency] = useState("");
  const [secondCurrency, setSecondCurrency] = useState("");
  const [firstVal, setFirstVal] = useState(0);
  const [secVal, setsecVal] = useState(0);
  const [fetchedValue, setFetchedValue] = useState(0);
  const [error, setError] = useState("");

  const handleConvert = useCallback(() => {
    if (!firstCurrency) {
      console.log('//////////',firstCurrency);
      setError(`Select the currency to convert.`);
      return;
    }
    if (firstCurrency == secondCurrency) {
      setError(`Both currency can not be same.`);
      return;
    }

    console.log("converting...");

    axios
      .get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${firstCurrency}.json`,
      )
      .then((dt) => {
        console.log(secondCurrency);
        console.log(dt.data[firstCurrency][secondCurrency]);
        setFetchedValue(
          Number(firstVal) * Number(dt.data[firstCurrency][secondCurrency]),
        );
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log("api process finished .");
        setError("")
      });
  }, [firstCurrency,secondCurrency,firstVal,secVal]) 

  const handleSwap = ()=>{
    setFirstCurrency(secondCurrency)
    setSecondCurrency(firstCurrency)
  }

  useEffect(() => {
    // FetchAllCurrencies();
    // console.log(curr);
    console.log("firstCurrency : ", firstCurrency);
    console.log("secCurrency : ", secondCurrency);
    console.log("FirstVal : ", firstVal);
    console.log("secVal : ", secVal);
    console.log("fetched Val : ", Number(fetchedValue));
    
  }, [firstCurrency, secondCurrency, firstVal, secVal, fetchedValue]);

  return (
    <div className="bg-[url('https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg')] h-screen bg-no-repeat bg-cover flex items-center justify-center ">
      <div className="w-[40%] bg-[#0080004b] backdrop-blur-[10px] flex justify-center items-center p-3 pt-10">
        <div className="w-full flex flex-col gap-3 justify-center items-center ">
          <div className="w-full flex flex-col gap-5 relative">
            <Box
             From
              setValue={setFirstVal}
             setCurrValue={setFirstCurrency}
                currVal={firstCurrency}
                />
            <Box
              To
              setValue={setsecVal}
              currVal={secondCurrency}
              convertedValue={Number(fetchedValue)}
              setCurrValue={setSecondCurrency}
            />
            <button
            onClick={handleSwap}
             className="text-white p-2 absolute top-[38%] left-[45%] border-2 bg-[#206492] border-[#aab3ba] flex items-center gap-2 cursor-pointer z-100">
              Swap
              <ArrowDownUpIcon
                className="size-4 cursor-pointer "
                isAnimated
                size={20}
                duration={0.5}
                color="#fff"
              />
            </button>
          </div>
          <div
            className={`text-center text-red-600 font-medium duration-100 transition-transform `}
          >
            {error}
          </div>
          <button
            className="bg-[#256d9c] text-2xl p-2 text-white cursor-pointer hover:bg-[#276691] transition-all duration-300 w-full"
            onClick={handleConvert}
          >
            {firstCurrency && secondCurrency
              ? `Convert ${firstCurrency} to ${secondCurrency}`
              : "Convert"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
