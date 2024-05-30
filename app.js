function handleButtonClick() {
  // Process input text area
  const inputTextarea = document.getElementById('inputTextarea').value;

  if (inputTextarea.trim() === '') {
    // Skip processing if the input is empty or contains only whitespace
    return;
  }

  const lastIndex = inputTextarea.lastIndexOf('\n');

  // Get the first part and last part
  const firstPart = inputTextarea.slice(0, lastIndex);
  const lastPart = inputTextarea.slice(lastIndex + 1);
  console.log(lastIndex);
  console.log(firstPart);
  console.log(lastPart);

  // Create the final string with special formatting
  const finalString = `
🌟🌟🌟🌟🌟🌟🌟
*_✝️ദൈവവചനം_*
🌟🌟🌟🌟🌟🌟🌟

*"${firstPart}"*

_(${lastPart})_

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
  document.getElementById('inputTextarea').value = '';
  document.getElementById('output').value = '';
}

document
  .getElementById('clearButton')
  .addEventListener('click', handleClearButtonClick);
