import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
var debounce = require('lodash.debounce');

const input = document.querySelector('input#search-box');
const list = document.querySelector('.country-list');
const info = document.querySelector('.country-info');

function sendValue() {
    list.innerHTML='';
    info.innerHTML='';

  fetchCountries(input.value.trim())
    .then(response => {
        if (!response.ok) {
            Notiflix.Notify.failure('Oops, there is no country with that name');
          } else {}
        return response.json()
    })
    .then(data => {
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (data.length > 1) {
        const listCountry = data
          .map(
            i =>
              `<li class='item'><div class='wrapper'><img src='${i.flags.svg}' /></div>${i.name.official}</li>`
          )
          .join('');
        list.insertAdjacentHTML('beforeend', listCountry);
      } else {
        const country = `<p><strong>Capital: </strong>${data[0].capital}</p>
        <p><strong>Population: </strong>${data[0].population}</p>
        <p><strong>Lang: </strong>${Object.keys(data[0].languages)}</p>`;

        info.insertAdjacentHTML('beforeend', country);
      }
    })
    .catch(error => {
      console.error(error);
    });
}

input.addEventListener('input', debounce(sendValue, DEBOUNCE_DELAY));
