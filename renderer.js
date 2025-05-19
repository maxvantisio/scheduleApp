'use strict';

document.addEventListener('DOMContentLoaded', () => {
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
let currDay = date.getDate();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let leapYear = () => {
    if (currYear % 100 === 0 ? currYear % 400 === 0 : currYear % 4 === 0)
    {
        return "leap";
    }
    else
    {
        return "noLeap";
    }
}
let kindOfMonth = () => {
    if (months[currMonth] != "February")
    {
        if (months[currMonth] == "April" || months[currMonth] == "September" || months[currMonth] == "June" || months[currMonth] == "November")
        {
            return 30;
        }
        else
        {
            return 31;
        }
    }
    return 28;
}
let dateNum = 30;

function renderHeader() {
    let month = document.getElementById('month')
    month.textContent = `${months[currMonth]}`

    let brk = document.createElement('br')

    let year = document.createElement('span');
    year.id = 'year'
    year.textContent = `${currYear}`

    month.appendChild(brk);
    month.appendChild(year);
}
//document.getElementById('year').textContent = `${year}`



function showDates() {
    let datesStart = document.createElement('ul');
    if (currMonth == "February")
    {
        if(leapYear() == "noLeap")
        {
            dateNum = 28;
        }
        else
        {
            dateNum = 29;
        }
    }
    else
    {
      dateNum = kindOfMonth();
    }

    for(let i = 0; i < dateNum; i++)
    {
        let newDate = document.createElement('li');
        //newDate.class = 'days'
        let number = document.createTextNode(`${i + 1}`);
        newDate.appendChild(number);
        if ((i + 1) == currDay)
        {
            newDate.id = 'active';
        } 
        datesStart.appendChild(newDate);
    }
    document.querySelector('.dates').appendChild(datesStart);
}

function renderCalendar()
{
    renderHeader();
    showDates();
}

renderCalendar();
})