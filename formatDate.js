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

const dateList = document.getElementById('dateList');

const dateArray = [
    '12/30/1997',
    '8/6/2023',
    '05/2/2013',
    '3/17/1888'
]
// console.log(dateArray)



const formatDateCustom = (date) => {


    let [month, day, year] = date.split('/');

    if (month.length === 1) {
        month = '0' + month;
    }

    if (day.length === 1) {
        day = '0' + day;
    }

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
   

    // // // parse data into javascript Date Object 
    // // const date = new Date(dateInput);

    // //extract the day,month, year from the date object
    // const year = date.getFullYear();
    // let month = date.getMonth(); /*since the function getMonth() returns zero based
    // we need to add 1 */
    // month += 1;
    // const day = date.getDate()
    

    // //pad the month and day with leading zeros, if necessary
    // const padMonth = month.toString().padStart(2, '0');
    // const padDay = day.toString().padStart(2, '0')

    // const formattedDate = `${year}-${padMonth}-${padDay}`;
    // return formattedDate
   
}

// map through date array and create a list item, insert the formatted date from array, append to page
// dateArray.map(date => {
//     const listItem = document.createElement('li');
//     listItem.textContent = formatDate(date)
//     dateList.appendChild(listItem);
// })



// get form by its Id and handle form submission
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    // upon submitting prevent page refresh
    event.preventDefault();

    // handle form submission for both regular date formatting and user custom date
    handleSubmit();
})


// Handle form submission from regular format and custom date submission
function handleSubmit() {
    const output = document.getElementById('output');
    const dateInput = document.getElementById('dateInput').value;
    console.log(dateInput)
    const customDate = document.getElementById('customDate').value;


    // check if dateInput is filled 
    if (dateInput) {
        // format user selected date Input 
        let formatted = formatDate(dateInput);
        console.log(formatted)
        const pageOutput = document.createElement('p')
        pageOutput.innerText = formatted;
        output.appendChild(pageOutput)
    } else if (customDate) {
        // format user custom date input 
        let formatted =  formatDateCustom(customDate)
        console.log(formatted)
        const pageOutput = document.createElement('p')
        pageOutput.innerText = formatted;
        output.appendChild(pageOutput)
    } else {
        alert('Please select or enter a custom date to continue !')
    }

    
}

// page refresh