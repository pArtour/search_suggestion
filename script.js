let stringArray = ['Russia', 'Kazakhstan', 'Estonia', 'Ukrain', 'Belarus', 'Taiwan', 'Bruneu', 'China', 'Kirgizstan', 'Hungary', 'Unated Kingdom', 'USA', 'Brazil', 'Bolivia', 'Turkey'];
let countriesBlock = document.querySelector('.countries'),
    countriesInput = countriesBlock.querySelector('.countries-input'),
    countriesList = countriesBlock.querySelector('.countries-list');
//initialization of coounties array and DOM elements as variables
  

const printResults = (parent, elem) => {
  let li = document.createElement('li');
  li.textContent = elem;
  parent.appendChild(li);
}
//display suggestions or results on the page

const findString = (str, arr) => {
  let reg = new RegExp(str, 'gi');
  arr.forEach(elem => {
    if (elem.match(reg)) {
      printResults(countriesList, elem)
    }
  });
}
//look for matches of the input string in the array


function fillList(parent, input) {
  if (input.value) {
    parent.innerHTML = '';
    findString(input.value, stringArray.sort());
  } else {
    parent.innerHTML = '';
  }
}
//Fill the list with li elements


countriesInput.addEventListener('keyup', function () {
  fillList(countriesList, this);
});
//show results on keyup