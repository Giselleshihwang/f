const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');
function displayProphets(prophets){
    const forEach = (prophets) => {
        prophets.forEach((prophet) => {
            let section = document.createElement("section")
            let sectionHTML = <h3>${prophet.name} ${prophet.lastName} </h3>
            <p>Date of Birth: ${prophet.birthday}</p>
            <p>Place of Birth: </p>
            section/innerHTML = sectionHTML;
            section.appendChild(section)
      
        });
      }
}

async function getProphetData(){
    const response = await fetch(url);
    if(response.ok){
        const data = await response.json();
        displayProphets(data.prophets);
    }
    else{
        console.error("NOT WORKING!!!")
    }
}