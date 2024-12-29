// Display an alert when the page loads
alert("Welcome to My Portfolio!");

// Change the heading color when clicked
document.querySelector("header h1").addEventListener("click", function () {
    this.style.color = this.style.color === "red" ? "white" : "red";
});

// Add a hover effect to the footer link
const footerLink = document.querySelector("footer a");
footerLink.addEventListener("mouseover", function () {
    footerLink.style.color = "#28a745";
});
footerLink.addEventListener("mouseout", function () {
    footerLink.style.color = "white";
});

// Display a message when a hobby is clicked
const hobbyItems = document.querySelectorAll("ol li, ul li");
hobbyItems.forEach((item) => {
    item.addEventListener("click", function () {
        alert(`You clicked on hobby: ${this.textContent}`);
    });
});

// Change the background color of the page
document.querySelector("#color-button").addEventListener("click", function () {
    const colors = ["#f4f4f4", "#ffeb3b", "#4caf50", "#03a9f4", "#e91e63"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Add a new hobby to the list dynamically
document.querySelector("#hobby-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const hobbyInput = document.querySelector("#hobby-input");
    if (hobbyInput.value.trim() !== "") {
        const newHobby = document.createElement("li");
        newHobby.textContent = hobbyInput.value;
        document.querySelector("ul").appendChild(newHobby);

        // Add click event to the new hobby
        newHobby.addEventListener("click", function () {
            alert(`You clicked on hobby: ${this.textContent}`);
        });

        hobbyInput.value = ""; // Clear the input field
    }
});
// Fetch a random quote from an API
document.querySelector("#quote-button").addEventListener("click", async function () {
    const quoteParagraph = document.querySelector("#quote");
    quoteParagraph.textContent = "Loading...";
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        quoteParagraph.textContent = `"${data.content}" - ${data.author}`;
    } catch (error) {
        quoteParagraph.textContent = "Failed to fetch a quote. Please try again.";
    }
});
