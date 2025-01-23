function calculateEMI() {
    const loanAmount = document.getElementById('loanAmount').value;
    const interestRate = document.getElementById('interestRate').value;
    const loanTenure = document.getElementById('loanTenure').value;

    if (loanAmount === "" || interestRate === "" || loanTenure === "") {
        alert("Please fill in all fields");
        return;
    }

    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfMonths = loanTenure * 12;

    let compoundedRate = 1;
    for (let i = 0; i < numberOfMonths; i++) {
        compoundedRate *= (1 + monthlyInterestRate);
    }

    const emi = (loanAmount * monthlyInterestRate * compoundedRate) /
                (compoundedRate - 1);

    const resultElement = document.getElementById('emiResult');
    resultElement.textContent = `Your monthly EMI is ₹${emi.toFixed(2)}`;
}
