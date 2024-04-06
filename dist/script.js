function countryshow() {
  let countryies = document.querySelector(".countryies");
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((country) => {
        let cards = document.createElement("a");
        cards.classList.add("country-cards");

        
let allcards = `
     <a href="#" class="inline-block country-cards w-[250px]  bg-gray-500 mx-12 my-12 m-52 p-1 rounded-md shadow-slate-200 cursor-pointer ">
     <img class=" w-[250px]    border-r-4 bg-slate-500 mb-3 rounded-md" src="${
       country.flags.svg
     }" alt="">
    <h2 class="text-white text-3xl mb-2 mx-6">${country.name.common}</h2>
    <p class="text-white text-1xl mb-2 mx-6"><span> <b> Population : </b></span>${country.population.toLocaleString(
      "en-IN"
    )}</p>
    <p class="text-white text-1xl mb-2 mx-6"><span> <b> Region : </b></span>${
      country.region
    }</p>
    <p class="text-white text-1xl mb-2 mx-6"><span> <b>Capital :</b> </span>${
      country.capital
    }</p>
    </a>
    `;
    cards.innerHTML = allcards;
    countryies.append(cards);
    
      });
    });
}
countryshow();