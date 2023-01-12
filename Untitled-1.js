// format date for user custom input for date
const formatDateCustom = (date) => {

    // take in the format and split it from the forward slash
    let [month, day, year] = date.split('/');

    //if the month format is less than 2 digits then add a 0 
    if (month.length === 1) {
        month = '0' + month;
    }
    //if the day format is less than 2 digits then add a 0
    if (day.length === 1) {
        day = '0' + day;
    }

    // format the date to the correct output YYYY-MM-DD
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
   
}

// format date for user selected input 
function formatDateUser(dateInput) {
    // Take in input and split the data from
    const dateArr = dateInput.split('/');
    const year = dateArr[2];
    let month = dateArr[0];
    let day = dateArr[1];

    //if the month format is less than 2 digits then add a 0
    if(month.length < 2) {
        month = '0' + month
    }

    //if the day format is less than 2 digits then add a 0
    if(day.length < 2) {
        day = '0' + day
    }

    // format the date to the correct output YYYY-MM-DD
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate 
}
