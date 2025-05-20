'use strict';
document.addEventListener('DOMContentLoaded', () => {
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
let currDay = date.getDate();
const realMonth = currMonth; //maybe stop currDay from lighting up when looking at other months
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
        if (["April", "September", "June", "November"].includes(months[currMonth]))
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
document.querySelector('.prev').addEventListener('click', () => {
    if (currMonth === 0)
    {
        currYear -= 1;
        currMonth = 11;
    }
    else
    {
        currMonth -= 1;
    }
    renderHeader();
    showDates();
})

document.querySelector('.next').addEventListener('click', () => {
    if (currMonth === 11)
    {
        currYear += 1;
        currMonth = 0;
    }
    else
    {
        currMonth += 1;
    }
    renderHeader();
    showDates();
})

//Render body of calendar
function showDates() {
    let datesStart = document.createElement('ul');

    //Get # of days in the current month
    let daysInMonth = (currMonth === 1) ? (leapYear() === "leap" ? 29 : 28) : kindOfMonth();

    const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();

    //Get days of pevious month
    const prevMonth = (currMonth === 0) ? 11 : currMonth - 1;
    const prevYear = (currMonth === 0) ? currYear - 1 : currYear;
    const numOfDaysPrev = new Date(prevYear, prevMonth + 1, 0).getDate();

    //Render previous month
    for (let i = firstDayOfMonth - 1; i >= 0; i--)
    {
        const day = document.createElement('li');
        day.textContent = numOfDaysPrev - i;
        day.classList.add('otherMonths');
        datesStart.appendChild(day);
    }

    //Render current month
    for (let i = 1; i <= daysInMonth; i++)
    {
        const day = document.createElement('li');
        day.textContent = i;
        if (i === currDay && currMonth === realMonth)
        {
            day.id = 'active';
        }
        datesStart.appendChild(day);
    }

    //Render next month
    const totalCells = firstDayOfMonth + daysInMonth;
    const trailingCells = 7 - (totalCells % 7);
    if (trailingCells < 7)
    {
        for (let i = 1; i <= trailingCells; i++)
        {
            const day = document.createElement('li');
            day.textContent = i;
            day.classList.add('otherMonths');
            datesStart.appendChild(day);
        }
    }
    /*
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
    //document.querySelector('.dates').innerHTML = '';
    //document.querySelector('.dates').appendChild(datesStart);
    */
    let layout = document.getElementById('dates');
    layout.innerHTML = '';
    layout.appendChild(datesStart);
}

function renderCalendar()
{
    renderHeader();
    showDates();
}

renderCalendar();
})