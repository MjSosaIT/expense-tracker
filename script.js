const expenseForm = document.getElementById("expense-form");
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const expenseCategory = document.getElementById("expense-category");
const expenseList = document.getElementById("expense-list");
const totalExpensesDisplay = document.getElementById("total-expenses");
const filterCategory = document.getElementById("filter-category");
const expenseChartCanvas = document.getElementById("expenseChart");

let expenses = [];
let editingExpenseId = null;

// Load expenses from localStorage
window.addEventListener("DOMContentLoaded", () => {
    expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    updateExpenseList();
    updateTotalExpenses();
    updateChart();
});

// Handle Form Submission
expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const expense = {
        id: editingExpenseId || Date.now(),
        name: expenseName.value,
        amount: parseFloat(expenseAmount.value),
        category: expenseCategory.value
    };

    // If editing an expense, update it in the list
    if (editingExpenseId) {
        expenses = expenses.map(exp => exp.id === editingExpenseId ? expense : exp);
        editingExpenseId = null;
    } else {
        // Otherwise, add a new expense
        expenses.push(expense);
    }

    // Save to localStorage and update UI
    localStorage.setItem("expenses", JSON.stringify(expenses));
    updateExpenseList();
    updateTotalExpenses();
    updateChart();

    expenseForm.reset();
});

// Update Expense List
function updateExpenseList() {
    expenseList.innerHTML = "";

    const filteredExpenses = filterCategory.value === "All"
        ? expenses
        : expenses.filter(exp => exp.category === filterCategory.value);

    filteredExpenses.forEach(expense => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${expense.name}</td>
            <td>$${expense.amount.toFixed(2)}</td>
            <td>${expense.category}</td>
            <td>
                <button class="edit-btn" data-id="${expense.id}">Edit</button>
                <button class="delete-btn" data-id="${expense.id}">Delete</button>
            </td>
        `;

        expenseList.appendChild(row);
    });

    document.querySelectorAll(".edit-btn").forEach(button => button.addEventListener("click", editExpense));
    document.querySelectorAll(".delete-btn").forEach(button => button.addEventListener("click", deleteExpense));
}

// Edit Expense
function editExpense(e) {
    const id = parseInt(e.target.getAttribute("data-id"));
    const expense = expenses.find(exp => exp.id === id);
    expenseName.value = expense.name;
    expenseAmount.value = expense.amount;
    expenseCategory.value = expense.category;
    editingExpenseId = id;
}

// Delete Expense
function deleteExpense(e) {
    const id = parseInt(e.target.getAttribute("data-id"));
    expenses = expenses.filter(exp => exp.id !== id);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    updateExpenseList();
    updateTotalExpenses();
    updateChart();
}

// Update Total Expenses
function updateTotalExpenses() {
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    totalExpensesDisplay.textContent = `Total Expenses: $${total.toFixed(2)}`;
}

// Filter by Category
filterCategory.addEventListener("change", updateExpenseList);

// Update Chart using Chart.js
function updateChart() {
    const expenseData = expenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
    }, {});

    const chart = new Chart(expenseChartCanvas, {
        type: 'pie',
        data: {
            labels: Object.keys(expenseData),
            datasets: [{
                label: 'Expenses by Category',
                data: Object.values(expenseData),
                backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0']
            }]
        }
    });
}
