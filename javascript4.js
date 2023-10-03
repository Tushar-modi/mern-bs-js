document.getElementById("showDateButton").addEventListener("click", function() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    document.getElementById("dateDisplay").textContent = formattedDate;
});

document.getElementById("showTimeButton").addEventListener("click", function() {
    const currentTime = new Date();
    document.getElementById("timeDisplay").textContent = currentTime.toString();
});
