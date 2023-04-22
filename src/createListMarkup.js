export function createCountryListMarkup(arr) {
    return arr.map(({flags:{svg, alt}, name:{official}})=> `<li class="country-list-item"><img class="country-item-img" src="${svg}" alt="${alt}" width="70"><p class="country-item-name">${official}</p></li>`
    ).join("");
}