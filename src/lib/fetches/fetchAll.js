import axios from "axios";
import { useDispatch } from "react-redux";
import { addCurrencies } from "../../features/currency/currencySlice";

const FetchAllCurrencies = async () => {
  const dispatch = useDispatch();

  axios
    .get(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json",
    )
    .then((dt) => {
      dispatch(addCurrencies(Object.entries(dt.data)));
    })
    .catch((e) => {
      console.log(e);
    });
};

export default FetchAllCurrencies;
