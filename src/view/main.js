import "../component/foodcard.js";
import "../component/foodlist.js";
import "../component/myheader.js";
import "../view/main.js";
import myFetch from "../data/fetchdata.js";
import randomfood from "../data/fetchrandom.js";

const main = () => {
  const searchElement = document.querySelector("my-header");
  const listfood = document.querySelector("food-list");

  const onButtonSearchClicked = async () => {
    event.preventDefault();
    try {
      const result = await myFetch(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const onRandom = async () => {
    try {
      const result = await randomfood();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    listfood.data = results.meals;
  };

  const fallbackResult = (message) => {
    listfood.renderError(message);
  };
  searchElement.clickEvent = onButtonSearchClicked;
  searchElement.random = onRandom;
};

export default main;
