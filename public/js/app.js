// Select the button with class 'btn'
let button = $(".btn");

// Get the current year, months, and day
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1; // Note: Months are zero-indexed, so we add 1
let currentDay = new Date().getDate();

// Get the displaying elements to show the output properly
let showYears = $('#showYear');
let showMonths = $('#showMonth');
let showDays = $('#showDay');

// Attach a click event listener to the button
button.on('click', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get the user-inputted year, month, and day
    var yearData = $('#year').val().trim();
    var monthData = $('#month').val().trim();
    var dayData = $('#day').val().trim();

    // Create a Date object for the current date
    var currentDate = new Date();

    // Create a Date object for the target date based on user input
    var targetDate = new Date(`${yearData}-${monthData}-${dayData}`);

    // Calculate the time difference in milliseconds
    var age = currentDate - targetDate;

    // Convert milliseconds to days
    var daysDifference = Math.floor(age / (1000 * 3600 * 24));

    // Calculate the user's age in years
    var userAgeInYears = Math.floor(daysDifference / 365);

    // Calculate the remaining days after subtracting whole years
    var remainderLeftInYear = Math.floor(daysDifference % 365);

    // Calculate the user's age in months
    var userAgeInMonths = Math.floor(remainderLeftInYear / 30);

    // Calculate the remaining months after subtracting whole months
    var remainderLeftInMonths = Math.floor(Math.floor((remainderLeftInYear / 365.25) * 12));

    // Calculate the user's age in days (remaining months)
    var userAgeInDays = Math.floor(remainderLeftInMonths);

    // Display the results in the respective HTML elements
    showYears.text(userAgeInYears);
    showMonths.text(userAgeInMonths);
    showDays.text(userAgeInDays);
});
