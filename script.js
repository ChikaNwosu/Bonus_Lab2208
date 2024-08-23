// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Function to simulate fetching the machine name (hostname)
function getMachineName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(window.location.hostname);
        }, 1000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Change the background color on page load
    changeBackgroundColor();
    setInterval(changeBackgroundColor, 3000); // Change background color every 3 seconds

    // Display the machine name (hostname)
    getMachineName().then(machineName => {
        document.getElementById('machine-name').textContent = machineName;
    });

    // Get the button element and the list container
    const button = document.getElementById("createListBtn");
    const listContainer = document.getElementById("listContainer");

    // Add click event listener to the button
    button.addEventListener("click", function() {
        let userInput;
        let isValid = false;

        while (!isValid) {
            userInput = prompt("Please enter a number between 21 and 99:");
            const number = parseInt(userInput, 10);

            if (!isNaN(number) && number >= 21 && number <= 99) {
                isValid = true;
                createList(number);
            } else {
                alert("Invalid input! Please enter a number between 21 and 99.");
            }
        }
    });

    // Function to create the list
    function createList(number) {
        listContainer.innerHTML = "";
        const ul = document.createElement("ul");

        for (let i = 1; i <= number; i++) {
            const li = document.createElement("li");
            li.textContent = `Item ${i}`;
            li.style.color = getRandomColor();
            ul.appendChild(li);
        }

        listContainer.appendChild(ul);
    }
});
