const moreInfo = [
    {
        date: "December 1",
        title: "Első nap",
        content: "dsfsdfdfdfdsfdsfdsfds",
    },
    {
        date: "December 2",
        title: "",
        content: "",
    },
    {
        date: "December 3",
        title: "",
        content: "",
    },
    {
        date: "December 4",
        title: "",
        content: "",
    },
    {
        date: "December 5",
        title: "",
        content: "",
    },
    {
        date: "December 6",
        title: "",
        content: "",
    },
    {
        date: "December 7",
        title: "",
        content: "",
    },
    {
        date: "December 8",
        title: "",
        content: "",
    },
    {
        date: "December 9",
        title: "",
        content: "",
    },
    {
        date: "December 10",
        title: "",
        content: "",
    },
    {
        date: "December 11",
        title: "",
        content: "",
    },
    {
        date: "December 12",
        title: "",
        content: "",
    },
    {
        date: "December 13",
        title: "",
        content: "",
    },
    {
        date: "December 14",
        title: "",
        content: "",
    },
    {
        date: "December 15",
        title: "",
        content: "",
    },
    {
        date: "December 16",
        title: "",
        content: "",
    },
    {
        date: "December 17",
        title: "",
        content: "",
    },
    {
        date: "December 18",
        title: "",
        content: "",
    },
    {
        date: "December 19",
        title: "",
        content: "",
    },
    {
        date: "December 20",
        title: "",
        content: "",
    },
    {
        date: "December 21",
        title: "",
        content: "",
    },
    {
        date: "December 22",
        title: "",
        content: "",
    },
    {
        date: "December 23",
        title: "",
        content: "",
    },
    {
        date: "December 24",
        title: "",
        content: "",
    },
];

// === Fetch current date from Time API ===
async function fetchTime() {
    try {
        console.log('Fetching current date from Time API...');
        const response = await fetch('https://timeapi.io/api/time/current/zones?timeZone=Europe%2FBudapest');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const datetime = new Date(data.dateTime);
        if (isNaN(datetime)) {
            throw new Error('Invalid date received from API');
        }
        console.log('Current date fetched:', datetime);
        return datetime.getDate();
    } catch (error) {
        console.error('Error fetching current date:', error);
        // Fallback to local date in case of error
        return new Date().getDate();
    }
}

// === Initialize calendar ===
async function initializeCalendar() {
    console.log('Initializing calendar...');
    const todaysDate = await fetchTime();
    console.log('Today\'s date:', todaysDate);

    // ===  Get the modal popup box + content + close span
    let modal = document.getElementById('modalPopup');
    let modalDailyDate = document.querySelector('.dailyDate');
    let modalDailyTitle = document.querySelector('.dailyTitle');
    let modalDailyContent = document.querySelector('.dailyContent');
    let spanClose = document.querySelector('.close');

    // === no hover action if higher than today's date (add class 'no-hover') 
    function noHover() {
        const doorNumber = this.innerHTML;
        const calendarNumber = parseInt(doorNumber, 10);
        if (calendarNumber > todaysDate) {
            this.parentNode.classList.add("no-hover");
            console.log(`Door ${calendarNumber} is not available yet.`);
        } else {
            this.parentNode.classList.remove("no-hover");
        }
    }

    // === door-front: hover + click events 
    const doorFronts = document.querySelectorAll(".front");
    for (const doorFront of doorFronts) {
        doorFront.addEventListener("mouseover", noHover);
        doorFront.addEventListener("click", clickFront);
    }

    // === door-back: click event 
    let doorBacks = document.querySelectorAll(".back");
    for (const doorBack of doorBacks) {
        doorBack.addEventListener("click", clickBack);
    }

    // === door-front: click toggles class 'open'
    function clickFront() {
        let numberClicked = this.innerHTML;
        let calendarNum = parseInt(numberClicked, 10);
        if (calendarNum <= todaysDate) {
            this.parentNode.classList.toggle("open");
            console.log(`Door ${calendarNum} toggled open/close.`);
        } else {
            console.log(`Door ${calendarNum} cannot be opened yet.`);
        }
    }

    // === door-back: click opens the modal + displays corresponding content 
    function clickBack() {
        let calendarNum = this.previousElementSibling.innerHTML;
        let calendarNumIndex = calendarNum - 1;
        modal.style.display = "block";
        modalDailyDate.innerHTML = moreInfo[calendarNumIndex].date;
        modalDailyTitle.innerHTML = moreInfo[calendarNumIndex].title;
        modalDailyContent.innerHTML = moreInfo[calendarNumIndex].content;
        console.log(`Modal opened for door ${calendarNum}.`);
    }

    // === click span (x) to close modal 
    spanClose.onclick = () => {
        modal.style.display = "none";
        console.log('Modal closed.');
    };

    // === click anywhere outside modal to close it
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            console.log('Modal closed by clicking outside.');
        }
    }

    // === Snowflakes effect ===
    const snowflakesContainer = document.getElementById("snowflakes");
    const numberOfSnowflakes = 50;
    const snowflakesFragment = document.createDocumentFragment();
    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        const size = Math.floor(Math.random() * 6) + 5;
        const left = Math.floor(Math.random() * 91) + 5;
        const duration = Math.floor(Math.random() * 12) + 9;
        snowflake.style.cssText = `width: ${size}px; height: ${size}px; left: ${left}%; animation-duration: ${duration}s;`;
        snowflakesFragment.appendChild(snowflake);
    }
    snowflakesContainer.appendChild(snowflakesFragment);
    console.log('Snowflakes effect initialized.');
}

// Initialize the calendar when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeCalendar);