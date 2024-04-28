function handleButtonClick() {
  // Arrays to hold the first and last parts of each input
  const firstParts = [];
  const lastParts = [];

  // Function to handle splitting of text and adding to arrays
  function processInput(text) {
    if (text.trim() === '') {
      // Skip processing if the input is empty or contains only whitespace
      return;
    }

    // Split the text by newline character
    const splitText = text.split('\n');

    // Get the first part and last part
    const firstPart = splitText[0];
    const lastPart = splitText[splitText.length - 1];

    // Add the first part and last part to respective arrays
    firstParts.push(firstPart);
    lastParts.push(lastPart);
  }

  // Process each input text area
  const input1 = document.getElementById('textarea1').value;
  processInput(input1);

  const input2 = document.getElementById('textarea2').value;
  processInput(input2);

  const input3 = document.getElementById('textarea3').value;
  processInput(input3);

  const input4 = document.getElementById('textarea4').value;
  processInput(input4);

  const input5 = document.getElementById('textarea5').value;
  processInput(input5);

  // Log the `firstParts` array
  // console.log("First Parts:", firstParts);

  // Create a string from the `firstParts` array by adding a space in front of each element
  const firstPartsString = firstParts.map((part) => ' ' + part).join('');

  // Log the final string created from `firstParts`
  console.log('First Parts String with space in front:', firstPartsString);

  // Process the `lastParts` array
  let combinedString = '';
  let firstPartOfFirstValue = '';

  lastParts.forEach((value, index) => {
    // Split the current value by colon
    const parts = value.split(':');

    // Take the first part of the first value (index 0)
    if (index === 0) {
      firstPartOfFirstValue = parts[0];
    }

    // Combine all the second parts of the split with a comma in between
    if (index > 0) {
      combinedString += ',';
    }
    combinedString += parts[1] || ''; // Add second part, if it exists
  });

  // Prepend the first part of the first value to the combined string
  combinedString = firstPartOfFirstValue + ':' + combinedString;

  // Log the final combined string
  console.log('Combined String:', combinedString);

  // Create the final string with special formatting
  const finalString = `
🌟🌟🌟🌟🌟🌟🌟
*_✝️ദൈവവചനം_*
🌟🌟🌟🌟🌟🌟🌟

*"${firstPartsString}"*

_(${combinedString})_

🌟🌟🌟🌟🌟🌟🌟
`;
  console.log(finalString);

  // Copy finalString to clipboard
  navigator.clipboard
    .writeText(finalString)
    .then(() => {
      // Provide feedback to the user with a toast
      showToast('Copied!');
    })
    .catch((err) => {
      alert('Could not copy text:', err);
    });
  // Display the `finalString` in the UI
  const outputElement = document.getElementById('output');
  if (outputElement) {
    outputElement.value = finalString; // Set the value of the textarea
  }
}

// Function to show a toast message
function showToast(message) {
  // Create a div element for the toast
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.textContent = message;

  // Add the toast element to the body
  document.body.appendChild(toast);

  // Remove the toast after a delay
  setTimeout(() => {
    toast.remove();
  }, 2000); // Remove toast after 2 seconds
}

function handleClearButtonClick() {
  // Clear each input text area by setting its value to an empty string
  document.getElementById('textarea1').value = '';
  document.getElementById('textarea2').value = '';
  document.getElementById('textarea3').value = '';
  document.getElementById('textarea4').value = '';
  document.getElementById('textarea5').value = '';
}

document
  .getElementById('clearButton')
  .addEventListener('click', handleClearButtonClick);
