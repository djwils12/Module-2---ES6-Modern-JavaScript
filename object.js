const customers = [
    {
        id: 0,
        customerName: 'David Wilson',
        phoneNumber: '(222)555-1234',
        address: '123 Fake Street',
        loanAmount: 100000,
        interest: 0.06,
        loanTermYears: 30,
        loanType: 'Mortgage',
        description: '30-Year Fixed Mortgage',
        calculatedLoanAmount: function() {
            return this.loanAmount * (1 + this.interest) ** this.loanTermYears
        }
    },
    {
        id: 1,
        customerName: 'Jim Wilson',
        phoneNumber: '(222)555-1235',
        address: '124 Fake Street',
        loanAmount: 50000,
        interest: 0.03,
        loanTermYears: 30,
        loanType: 'Mortgage',
        description: '30-Year Fixed Mortgage',
        calculatedLoanAmount: function() {
            return this.loanAmount * (1 + this.interest) ** this.loanTermYears
        }
    },
    {
        id: 2,
        customerName: 'Matt Parker',
        phoneNumber: '(222)555-8888',
        address: '126 Fake Street',
        loanAmount: 200000,
        interest: 0.05,
        loanTermYears: 15,
        loanType: 'Mortgage',
        description: '15-Year Fixed Mortgage',
        calculatedLoanAmount: function() {
            return this.loanAmount * (1 + this.interest) ** this.loanTermYears
        }
    },
    {
        id: 3,
        customerName: 'Mary Jane',
        phoneNumber: '(222)555-3333',
        address: '1 Main Street',
        loanAmount: 450000,
        interest: 0.07,
        loanTermYears: 30,
        loanType: 'Mortgage',
        description: '30-Year Fixed Mortgage',
        calculatedLoanAmount: function() {
            return this.loanAmount * (1 + this.interest) ** this.loanTermYears
        }
    },
    {
        id: 4,
        customerName: 'Bob Dylan',
        phoneNumber: '(222)555-1111',
        address: '123 Hollywood Drive',
        loanAmount: 250000,
        interest: 0.02,
        loanTermYears: 30,
        loanType: 'Mortgage',
        description: '30-Year Fixed Mortgage',
        calculatedLoanAmount: function() {
            return this.loanAmount * (1 + this.interest) ** this.loanTermYears
        }
    },
] 

console.log(customers);
var loanTotal = 0;
customers.forEach((customer) => loanTotal += customer.calculatedLoanAmount());
console.log(`Grand total: $${Math.round(loanTotal).toFixed(2)}`);


// console.log(customer.calculatedLoanAmount())