const checkTime = false; // Set this to false to make all days openable

const moreInfo = [
    {
        date: "December 1",
        title: "Cím 1",
        content: "Tartalom 1",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 2",
        title: "Cím 2",
        content: "Tartalom 2",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 3",
        title: "Cím 3",
        content: "Tartalom 3",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 4",
        title: "Cím 4",
        content: "Tartalom 4",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 5",
        title: "Cím 5",
        content: "Tartalom 5",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 6",
        title: "Cím 6",
        content: "Tartalom 6",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 7",
        title: "Cím 7",
        content: "Tartalom 7",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 8",
        title: "Cím 8",
        content: "Tartalom 8",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 9",
        title: "Cím 9",
        content: "Tartalom 9",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 10",
        title: "Cím 10",
        content: "Tartalom 10",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 11",
        title: "Cím 11",
        content: "Tartalom 11",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 12",
        title: "Cím 12",
        content: "Tartalom 12",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 13",
        title: "Cím 13",
        content: "Tartalom 13",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 14",
        title: "Cím 14",
        content: "Tartalom 14",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 15",
        title: "Cím 15",
        content: "Tartalom 15",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 16",
        title: "Cím 16",
        content: "Tartalom 16",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 17",
        title: "Cím 17",
        content: "Tartalom 17",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 18",
        title: "Cím 18",
        content: "Tartalom 18",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 19",
        title: "Cím 19",
        content: "Tartalom 19",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 20",
        title: "Cím 20",
        content: "Tartalom 20",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 21",
        title: "Cím 21",
        content: "Tartalom 21",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 22",
        title: "Cím 22",
        content: "Tartalom 22",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 23",
        title: "Cím 23",
        content: "Tartalom 23",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    },
    {
        date: "December 24",
        title: "Cím 24",
        content: "Tartalom 24",
        imageUrl: "https://placehold.co/600x400",
        videoUrl: "https://www.youtube.com/embed/lJIrF4YjHfQ?si=2zsw4t_mVqCSzCJ-"
    }
];

// === Fetch current date from Time API ===
async function fetchTime() {
    try {
        console.log('Fetching current date from Time API...');
        const response = await fetch('https://timeapi.io/api/time/current/zone?timeZone=Europe%2FBudapest');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        const datetime = new Date(data.dateTime);
        if (isNaN(datetime)) throw new Error('Invalid date received from API');
        
        console.log('Current date fetched:', datetime);
        return { day: datetime.getDate(), month: datetime.getMonth() + 1 }; // Months are zero-indexed
    } catch (error) {
        console.error('Error fetching current date:', error);
        const now = new Date();
        return { day: now.getDate(), month: now.getMonth() + 1 }; // Fallback to local date in case of error
    }
}

// === Initialize calendar ===
async function initializeCalendar() {
    console.log('Initializing calendar...');
    const { day: todaysDate, month: currentMonth } = await fetchTime();
    console.log('Today\'s date:', todaysDate, 'Month:', currentMonth);

    const modal = document.getElementById('modalPopup');
    const modalDailyDate = document.querySelector('.dailyDate');
    const modalDailyTitle = document.querySelector('.dailyTitle');
    const modalDailyContent = document.querySelector('.dailyContent');
    const modalDailyImage = document.querySelector('.dailyImage');
    const modalDailyVideo = document.querySelector('.dailyVideo');
    const spanClose = document.querySelector('.close');

    const doorFronts = document.querySelectorAll(".front");
    const doorBacks = document.querySelectorAll(".back");

    const noHover = function() {
        const calendarNumber = parseInt(this.innerHTML, 10);
        if (checkTime && (calendarNumber > todaysDate || currentMonth !== 12)) {
            this.parentNode.classList.add("no-hover");
            console.log(`Door ${calendarNumber} is not available yet.`);
        } else {
            this.parentNode.classList.remove("no-hover");
        }
    };

    const clickFront = function() {
        const calendarNum = parseInt(this.innerHTML, 10);
        if (!checkTime || (calendarNum <= todaysDate && currentMonth === 12)) {
            this.parentNode.classList.toggle("open");
            console.log(`Door ${calendarNum} toggled open/close.`);
            localStorage.setItem(`door-${calendarNum}`, this.parentNode.classList.contains("open") ? 'opened' : '');
        } else {
            console.log(`Door ${calendarNum} cannot be opened yet.`);
        }
    };

    const clickBack = function() {
        const calendarNum = parseInt(this.previousElementSibling.innerHTML, 10) - 1;
        const info = moreInfo[calendarNum];
        modal.style.display = "block";
        modalDailyDate.innerHTML = info.date;
        modalDailyTitle.innerHTML = info.title;
        modalDailyContent.innerHTML = info.content;

        if (info.imageUrl) {
            modalDailyImage.src = info.imageUrl;
            modalDailyImage.style.display = 'block';
        } else {
            modalDailyImage.style.display = 'none';
        }

        if (info.videoUrl) {
            modalDailyVideo.src = getVideoEmbed(info.videoUrl);
            modalDailyVideo.style.display = 'block';
        } else {
            modalDailyVideo.style.display = 'none';
        }

        console.log(`Modal opened for door ${calendarNum + 1}.`);
    };

    const getVideoEmbed = (videoUrl) => {
        if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
            return videoUrl.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/");
        }
        console.log(`Invalid YouTube URL: ${videoUrl}`);
        return '';
    };

    doorFronts.forEach(doorFront => {
        const calendarNumber = parseInt(doorFront.innerHTML, 10);
        doorFront.addEventListener("mouseover", noHover);
        doorFront.addEventListener("click", clickFront);
        if (checkTime && (calendarNumber > todaysDate || currentMonth !== 12)) {
            doorFront.parentNode.classList.add("no-hover");
        } else if (calendarNumber < todaysDate && currentMonth === 12) {
            doorFront.parentNode.classList.add("open");
        }
        if (localStorage.getItem(`door-${calendarNumber}`) === 'opened') {
            doorFront.parentNode.classList.add("open");
        }
    });

    doorBacks.forEach(doorBack => doorBack.addEventListener("click", clickBack));

    spanClose.onclick = () => {
        modal.style.display = "none";
        console.log('Modal closed.');
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            console.log('Modal closed by clicking outside.');
        }
    };

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