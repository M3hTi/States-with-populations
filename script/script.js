let states = []

const information = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"


// Fetch data immediately when the script loads
fetch(information)
    .then(response => {
        return response.json()
        // console.log(response)    
    })
    .then(data => {
        states.push(...data);

    })
    .catch(error => console.error("Error:",error))



const findMatches = function (wordToMatch , cities) {
    return states.filter(state =>{
        const regex = new RegExp(wordToMatch, 'gi')
       return state.city.match(regex) || state.state.match(regex)
    })
}

const displayMatch = function() {
    // console.log(this.value);
    const matchArray = findMatches(this.value, states);
    const html = matchArray.map(state => `
        <li>
            ${state.city}, ${state.state}
            <span class="population">${(state.population)}</span>
        </li>
    `).join('');
    document.querySelector('.suggestions').innerHTML = html;
};
let inputElement = document.querySelector('.search');
let suggestionElement = document.querySelector('.suggestions')
inputElement.addEventListener('input',displayMatch)





