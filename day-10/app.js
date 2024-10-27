const url= 'https://api.currencyapi.com/v3/latest?apikey=cur_live_y6aSoz6FLB1i9tELlUQz0eFz6plIHrnr5KhIRZN2';



// Function to handle currency conversion
const getData = async () => {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`There is an error ${response.status}`);
        }
        
        let data = await response.json();
        const rates = data.data;  // Assume API response structure has rates under `data`

        // Get the values when the button is clicked
        const fromCurrency = document.querySelector('#from-currency').value;
        const toCurrency = document.querySelector('#to-currency').value;
        const usersInput = parseFloat(document.querySelector('.js-from').value);
        
        // Check if the input is a valid number
        if (isNaN(usersInput) || usersInput <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        // Calculate conversion
        const fromRate = rates[fromCurrency].value;  // Assuming 'value' holds rate
        const toRate = rates[toCurrency].value;
        const convertedAmount = (usersInput / fromRate) * toRate;

        // Display result
        document.querySelector('.js-to').value = convertedAmount.toFixed(2);

    } catch (error) {
        console.error("Error:", error.message);
    }
};

// Add event listener to button
document.querySelector('.js-convert-btn').addEventListener('click', getData);
