export function fetchCountries(name){
    const url = `https://restcountries.com/v3.1/name/${name}?fields=name,flags,capital,population,languages,flags`
    return fetch(url)
}