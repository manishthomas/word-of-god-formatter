function processInputs() {
  // Retrieve input values
  var input1 = document.getElementById('input1').value.trim();
  var input2 = document.getElementById('input2').value.trim();
  var input3 = document.getElementById('input3').value.trim();
  var input4 = document.getElementById('input4').value.trim();
  var input5 = document.getElementById('input5').value.trim();

  // Extract first sentences
  var firstSentence1 = input1.split('\n')[0];
  var firstSentence2 = input2.split('\n')[0];
  var firstSentence3 = input3.split('\n')[0];
  var firstSentence4 = input4.split('\n')[0];
  var firstSentence5 = input5.split('\n')[0];

  // Extract second sentences and format
  var secondSentence1 = extractAndFormatSecondSentence(input1);
  var secondSentence2 = extractAndFormatSecondSentence(input2);
  var secondSentence3 = extractAndFormatSecondSentence(input3);
  var secondSentence4 = extractAndFormatSecondSentence(input4);
  var secondSentence5 = extractAndFormatSecondSentence(input5);

  // Combine formatted sentences
  var result = '';
  if (firstSentence1) result += firstSentence1 + ' ';
  if (firstSentence2) result += firstSentence2 + ' ';
  if (firstSentence3) result += firstSentence3 + ' ';
  if (firstSentence4) result += firstSentence4 + ' ';
  if (firstSentence5) result += firstSentence5 + ' ';
  result += '. ';
  if (secondSentence1) result += secondSentence1 + ', ';
  if (secondSentence2) result += secondSentence2 + ', ';
  if (secondSentence3) result += secondSentence3 + ', ';
  if (secondSentence4) result += secondSentence4 + ', ';
  if (secondSentence5) result += secondSentence5;

  // Display result
  document.getElementById('output').innerHTML = result;
}
function extractAndFormatSecondSentence(input) {
  var secondSentence = input.split('\n')[1];
  if (secondSentence) {
    var numbers = secondSentence.match(/(\d+) : (\d+)/g); // Match all number patterns
    if (numbers) {
      var combinedNumbers = numbers.join(', ');
      var formattedSentence = secondSentence.replace(
        /(\d+) : (\d+)/g,
        '[' + combinedNumbers + ']'
      );
      return formattedSentence;
    }
  }
  return '';
}
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
  // console.log("First Parts String with space in front:", firstPartsString);

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

*"${firstParts}"*

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

// Style the toast message
