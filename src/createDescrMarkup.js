export function createCountryDescrMarkup(arr) {
    return arr.map(({ flags: { svg, alt }, name: { official }, capital, languages, population }) => 
    `<div class="basic-features">
      <img class="country-item-img" src="${svg}" alt="${alt}" width="70">
      <h2 class="country-descr-name">${official}</h2>
    </div>
    <ul class="country-desc">
      <li>
        <p class="feature-value"><span class="feature-name">Capital: </span>${capital}</p>
      </li>
      <li>
        <p class="feature-value"><span class="feature-name">Population: </span>${population}</p>
      </li>
      <li>
        <p class="feature-value"><span class="feature-name">Languages: </span>${Object.values(languages).join(", ")}</p>
      </li>
    </ul>`
).join("");
}