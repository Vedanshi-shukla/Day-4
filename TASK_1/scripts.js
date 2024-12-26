
const data = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Mercedes", "Tesla", "Audi", "Hyundai", "Kia"];

// Debounce function
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Function to handle search and display results
function handleSearch(event) {
    const searchText = event.target.value.toLowerCase();
    const resultElement = document.getElementById('searchResult');
    resultElement.innerHTML = ""; // Clear previous results

    if (searchText) {
        const filteredData = data.filter(item => item.toLowerCase().includes(searchText));
        filteredData.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            resultElement.appendChild(li);
        });
    }
}

// Get the search input element and attach the debounced handler
const searchInput = document.getElementById('search');
const debouncedSearch = debounce(handleSearch, 300);
searchInput.addEventListener('input', debouncedSearch);
