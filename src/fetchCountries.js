const BASE_URL = "https://restcountries.com/v3.1/";
export function fetchCountries(name) {
    return fetch(`${BASE_URL}name/${name}?fields=name,flags,capital,languages,population`).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
        return resp.json();
    }).catch(err => console.log(err));
}