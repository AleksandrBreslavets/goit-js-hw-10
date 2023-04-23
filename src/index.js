import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { refs } from './refs';
import { createCountryListMarkup } from './createListMarkup';
import { createCountryDescrMarkup } from './createDescrMarkup';

const DEBOUNCE_DELAY = 300;
refs.input.addEventListener("input", debounce(onInput, DEBOUNCE_DELAY));
function onInput(evt) {
    const countryName = evt.target.value.trim();
    fetchCountries(countryName).then(countriesList => {
        if (countriesList.length > 10) {
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
            return;
        }
        if (countriesList.length >= 2 && countriesList.length <= 10) {
            refs.listOfCountries.innerHTML = createCountryListMarkup(countriesList);
            refs.countryDescr.innerHTML = "";
            return;
        }
        if (countriesList.length === 1) {
            refs.listOfCountries.innerHTML = "";
            refs.countryDescr.innerHTML = createCountryDescrMarkup(countriesList);
            return;
        }
    }).catch((err) => {
        if (err.status = "404") {
            Notiflix.Notify.failure('Oops, there is no country with that name');
        }
        else { console.log(err.message) };
        refs.listOfCountries.innerHTML = "";
        refs.countryDescr.innerHTML = "";
    });
}
