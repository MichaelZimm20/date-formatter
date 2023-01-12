// Coding Question 

/* Question: Return a string in the format YYYY-MM-DD given a date in the formats
MM/DD/YYYY,
M/D/YYYY,
MM/D/YYYY,
or M/D/YYYY
*/


// Sample Tests 

// formatDate('12/30/1997') = '1997-12-30'
// formateDate('8/6/2023') = '2023-08-06'
// formateDate('05/2/2013') = '2013-05-02'
// formatDate('3/17/1888') = '1888-03-17'


// using Moment.js to set the current date and time in the Header 
setInterval(function () {
    document.getElementById('currentDay').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000);


// this function takes care of formatting the date to YYYY-MM-DD
function formatDate(date) {
    
    let [month, day, year] = date.split('/')

    if (month.length === 1) {
        month = '0' + month;
    }

    if (day.length === 1) {
        day = '0' + day;
    }
    console.log(day.length)

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
}


// get form by its Id and handle form submission and innerText 
const form = document.getElementById('myForm');
const output = document.getElementById('output');

form.addEventListener('submit', function(event) {
    // upon submitting prevent page refresh
    event.preventDefault();

    // handle form submission for both regular date formatting and user custom date
    handleSubmit();
})


// Handle form submission from regular format and custom date submission
function handleSubmit() {
    const dateInput = document.getElementById('dateInput').value;
    console.log(dateInput, '01/11/2023')
    const customDate = document.getElementById('customDate').value;


    // check if dateInput is filled 
    if (dateInput) {
        // format user selected date Input 
        // let formatted = formatDate(dateInput);
        // console.log(formatted)
        const pageOutput = document.createElement('p')
        pageOutput.innerText = dateInput;
        output.appendChild(pageOutput)
    } else if (customDate) {
        // format user custom date input 
        let formatted =  formatDate(customDate)
        console.log(formatted)
        const pageOutput = document.createElement('p')
        pageOutput.innerText = formatted;
        output.appendChild(pageOutput)
    } else {
        alert('Please select or enter a custom date to continue !')
    }
 
}
