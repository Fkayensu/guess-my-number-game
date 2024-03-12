# Guess My Number Game

Welcome to the Guess My Number game! This simple web-based game allows you to guess a number between 1 and 20 and earn points. Each incorrect guess deducts one point, with the highest possible score being 20.

## Instructions

1. **Guess a Number**: Enter your guess in the input field provided in the left section.
2. **Check your Guess**: Click the "Check!" button to see if your guess is correct.
3. **Scoring**: You start with a score of 20 points. For each incorrect guess, one point will be deducted.
4. **Highscore**: Try to beat your highest score, which is initially set to 0.

## Styling

This game features a retro-inspired design using the "Press Start 2P" font. The layout is divided into a header and main sections, providing a clear and organized interface. The color scheme is dark with contrasting light elements for better visibility.

## HTML Structure

The HTML structure includes a header with the game title and number display, and the main section divided into left and right sections for user input and game information, respectively.

## CSS Styles

- The layout is designed with a responsive header and main sections.
- The font size is set using a base size of 62.5% for better scalability.
- The body background color is set to a dark shade (#222), providing a retro gaming atmosphere.
- The "Press Start 2P" font is imported and applied to the body.
- Various elements are styled for consistent and visually appealing presentation.
- Interactive elements, such as buttons, change appearance on hover for user feedback.

## JavaScript Functionality

The JavaScript code adds interactivity to the game. The randomly generated secret number is compared with the player's guess. The game provides feedback messages, updates the score, and adjusts styling based on the player's performance.

- `displayMessage`: Updates the message displayed to the player based on their guess.
- `updateNumber`: Updates the displayed number in the UI.
- `updateScore`: Updates the displayed score in the UI.
- `updateHighScore`: Updates the displayed highscore, keeping track of the player's best performance.
- `changeBackgroundColor`: Changes the background color of the game based on the player's performance.
- `changeNumberWidth`: Adjusts the width of the displayed number for visual effect.

Event Listeners:

- **Check Button**: Checks the player's guess, updates the UI, and handles win or loss scenarios.
- **Again Button**: Resets the game for a new round.
