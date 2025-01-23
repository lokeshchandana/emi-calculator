# emi-calculator

A simple EMI (Equated Monthly Installment) Calculator built using HTML, CSS, and JavaScript.

## Features
- Calculate monthly EMI based on loan amount, annual interest rate, and loan tenure.
- Clean and responsive user interface.
- Separate files for HTML, CSS, and JavaScript for better structure and maintainability.

## Demo
You can try the EMI Calculator by cloning this repository and opening the `index.html` file in your browser.

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/your-username/emi-calculator.git
   ```
2. Navigate to the project directory:
   ```
   cd emi-calculator
   ```
3. Open `index.html` in your browser.

## File Structure
```
emi-calculator/
├── index.html     # Main HTML file
├── styles.css     # Styling file
├── script.js      # JavaScript logic
```

## Usage
1. Enter the loan amount in the "Loan Amount" field.
2. Enter the annual interest rate in the "Annual Interest Rate" field.
3. Enter the loan tenure in years in the "Loan Tenure" field.
4. Click the "Calculate EMI" button to view the monthly EMI result.

## Screenshot
![EMI Calculator Screenshot](screenshot.png)

## How It Works
- The application takes the loan amount, annual interest rate, and loan tenure as inputs.
- The JavaScript file calculates the EMI using the following formula:
  ```javascript
  const emi = (loanAmount * monthlyInterestRate * compoundedRate) / (compoundedRate - 1);
  ```
  where:
  - `loanAmount` is the loan amount.
  - `monthlyInterestRate` is the monthly interest rate.
  - `compoundedRate` is calculated using a loop to avoid `Math.pow`.

## Contributing
Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and create a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Feel free to reach out for any queries or feedback. Happy coding!

