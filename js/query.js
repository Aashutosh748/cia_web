const call = () => {
    fetch('https://cia.atria.edu/api/v2/events/?format=json', {
        method: 'get'
    }).then(response => response.json())
        .then(jsonData => console.log(jsonData[0]));
};
const makeEvent = () => {
    
};
const getEvents = () => {

};
//call()