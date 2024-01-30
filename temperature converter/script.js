// Get references to the Celcius and Fahrenheit input fields
const celcius = document.querySelector("#celcius"),
fahrenheit = document.querySelector("#fahrenheit");

// Set focus to the Celcius input field when the page loads
window.addEventListener("load",()=> celxius.focus());

// Convert Celcius to Fahrenheit when Celcius value changes
celcius.addEventListener("input",()=>{
    fahrenheit.value =((celcius.value * 9)/5 +32).toFixed(2);
    // Clear fahrenheit input when celcius input is empty
    if(!celcius.value) fahrenheit.value="";
});

// Convert Fahrenheit to Celcius when Fahrenheit value changes
fahrenheit.addEventListener("input",()=>{
    celcius.value =(((fahrenheit.value -32)* 5) / 9).toFixed(2);
    // Clear fahrenheit input when celcius input is empty
    if(!fahrenheit.value) celcius.value="";
});
