const form = document.getElementById('form');
let search = document.getElementById('search');
let result = document.getElementById('result');
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');

let resultTitle = document.getElementById('resultTitle');
const more = document.getElementById('more');



// Event listeners
form.addEventListener('submit', e => {
    e.preventDefault();
  
    let searchTerm = search.value.trim();
    searchTerm = searchTerm.split(" ").join("_");
  
    if (!searchTerm) {
      alert('Please type in a search term');
    } else {
      searchWords(searchTerm);
    }
  });
  
  // Get Meaning button click
  result.addEventListener('click', e => {
    const clickedEl = e.target;
  
    
  });



  // Search for words

async function searchWords(term) {

  let searchTerm = search.value;
  
  let apiURL = 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=30&srsearch=%27' + searchTerm;


  const res = await fetch(`${apiURL}/suggest/${term}`);
  const data = await res.json();
    console.log(data);
  showData(data);
}

// Show words in DOM
function showData(data) {
    resultTitle.innerText =  data.query.search[0].title;
    result.innerHTML = data.query.search[0].snippet;
    result1.innerHTML =  data.query.search[1].snippet;
    result2.innerHTML = data.query.search[2].snippet;
    result3.innerHTML =  data.query.search[3].snippet;
    
    link.href = "https://en.wikipedia.org/wiki/" + search.value;
    link.innerHTML = "Read More"; 


}


const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

/*SCROLL HOME*/ 
sr.reveal('.container',{interval: 200}); 
sr.reveal('.space' ,{interval: 200});
sr.reveal('.result',{interval: 200});

  

