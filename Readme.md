# Text-To-Speech
This repository contains a simple web application that allows users to convert text into speech. It's built using HTML, CSS, and JavaScript, and utilizes the Web Speech API for speech synthesis.

## Features

- **Convert Text to Speech**: Transform written text into spoken words.
- **Adjustable Speech Rate**: Customize the speed of speech to suit individual preferences.
- **Variety of Voices**: Choose from a diverse range of available voices.
- **Predefined Phrases**: Access a collection of common phrases, each accompanied by an associated image for easy selection.
- **Intuitive Interface**: User-friendly design with clickable buttons for effortless navigation.


## Usage

### Quick Start

1. Click on predefined phrases with icons to hear them spoken.
2. Use the dropdown to select a preferred voice.
3. Adjust the speech rate using the provided slider.
4. Click the "Read" button to have the text in the input box spoken aloud.
5. Toggle the text input box by clicking the "Toggle" button.
6. Close the text input box by clicking the "Close" button.

### Custom Text Input

For custom text input:

1. Click the "Toggle" button to reveal the text input box.
2. Enter your desired text in the input box.
3. Click the "Read" button to have the text spoken aloud.

## Customization

You can customize the application by:

- **Adding More Phrases**: Modify the `data` array in the `script.js` file. Each object in the array represents a phrase with an image and corresponding text.

- **Styling**: Customize the CSS styles in the `style.css` file to match your preferences or branding.


## Hosted Link
https://ameya-shinde.github.io/Text-To-Speech/


## JS Functionality Used

1. **DOM Manipulation**:
   - Used `document.querySelector`, `document.getElementById`, and `document.createElement` to interact with the DOM elements.
   - Created and appended elements to the `main` element.

2. **Event Handling**:
   - Added event listeners to various elements like buttons and boxes to trigger actions on user interaction.
   - Responded to click events using `addEventListener`.

3. **Speech Synthesis API**:
   - Utilized the Speech Synthesis API to convert text into speech.
   - Created a `SpeechSynthesisUtterance` object for setting properties like `rate` and `text`.

4. **Looping and Iteration**:
   - Used a `forEach` loop to iterate over the `data` array and create boxes with predefined phrases.

5. **Array Manipulation**:
   - Created and manipulated arrays to store and retrieve voices available in the browser.

6. **Functions**:
   - Defined functions like `createBox`, `handleSpeech`, `getVoices`, `setTextMessage`, and `setVoice` to encapsulate specific functionalities.

7. **Conditional Statements**:
   - Employed conditional statements to check if a voice matches the selected option.

8. **Timeout**:
   - Used `setTimeout` to add and remove the `active` class from boxes for visual feedback.

9. **DOM Styling**:
   - Added and removed CSS classes (`classList.add` and `classList.remove`) to style elements dynamically.

10. **Template Literals**:
    - Used template literals to generate HTML markup for the boxes.

11. **Arrow Functions**:
    - Used arrow functions for concise event handler definitions.

12. **Asynchronous Event Handling**:
    - Utilized the `voiceschanged` event to ensure voices are loaded before populating the dropdown menu.

13. **Object Destructuring**:
    - Destructured objects to extract properties like `image` and `text`.

14. **Speech Synthesis**:
    - Utilized the `SpeechSynthesis` interface to control the text-to-speech functionality, including setting voices, text, and speaking.

These functionalities collectively enable the Text-To-Speech application to function as described in the README.md.


## Screenshots
![Screenshot 2023-09-17 190151](https://github.com/Ameya-Shinde/Text-To-Speech/assets/93002372/0d015541-b199-4cc2-952a-46ede7038105)

![Screenshot 2023-09-17 190239](https://github.com/Ameya-Shinde/Text-To-Speech/assets/93002372/85c1892c-0ba0-406f-b931-bf2f4ae6a4b3)
