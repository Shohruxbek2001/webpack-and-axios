
// Make a request for a user with a given ID



const axios = require('axios');

//get all areas
let list = document.getElementById("countr") 
axios.get('https://api.hh.ru/areas/')
  .then(function (response) {
    // handle success
    let arr = response.data;
    for (let i = 0; i < arr.length; i++)  {
      console.log(arr[i].name, arr[i].id)
      list.innerHTML += `
        <option id="${arr[i].id}">
            ${arr[i].name}
        </option>
      `
      for (let j = 0; j < arr[i].areas.length; j++)  {
        console.log('  ' + arr[i].areas[j].name, arr[i].areas[j].id);
        list.innerHTML += `
        <option id="${arr[i].areas[j].id}">
            ${arr[i].areas[j].name}
        </option>
      `
      }   
     }
     
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


  // search jobs

function getJobs() {
  let jobi = document.getElementById("brandsList")
  jobi.innerHTML = ""
  let str = document.getElementById("queryInput").value 
  let ide = document.getElementById("countr")
  let ids = parseInt(ide.options[ide.selectedIndex].id)
  axios.get('https://api.hh.ru/vacancies/', {
  params: {
    text: str,
    area: ids
  }
})
  .then(function (response) {
    // handle success
    let jobs = response.data.items
    for(let e = 0; e < jobs.length; e++)  {
      jobi.innerHTML +=  `
        <li>
          ${jobs[e].name}
        </li>
      `
      console.log()
    }
    console.log(jobs);
    
    console.log(str, )      
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

document.getElementById("searchBtn").addEventListener("click", getJobs)
