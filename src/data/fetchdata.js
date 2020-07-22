
async function myFetch(str) {
  // await response of fetch call
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${str}`
  );
  // only proceed once promise is resolved
  let data = await response.json();
  // only proceed once second promise is resolved
  console.log(data.meals);
  return data;
}




export default myFetch ;
