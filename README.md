# Expense Tracker App

## Description
The **Expense Tracker App** is a simple and interactive web application that allows users to keep track of their daily expenses. Users can add, edit, delete, and filter expenses by category. Additionally, the app displays the total expenses and provides a visual representation using a dynamic pie chart.

## Features
- **Add New Expenses**: Users can input the name, amount, and category of each expense.
- **Edit and Delete**: Modify or remove any existing expenses.
- **Filter by Category**: Easily filter the list of expenses by selecting a category.
- **Total Expenses Calculation**: Automatically updates the total amount spent.
- **Data Persistence**: Expenses are saved in the browser's local storage, so they persist across sessions.
- **Pie Chart Visualization**: Displays a pie chart of expenses by category using Chart.js.

## Project Structure
expense-tracker/ 
├── index.html          # Main HTML file for the app structure
├── style.css           # CSS file for styling the app
├── script.js           # JavaScript file for handling app logic
└── README.md           # Documentation for the project

## Technologies Used
- **HTML**: For the structure and layout of the application.
- **CSS**: For styling the user interface components.
- **JavaScript**: For handling interactions, data management, and business logic.
- **Chart.js**: For creating dynamic visualizations of expenses through pie charts.
- **Local Storage**: For persistently storing expense data in the browser.

## Installation

Follow these steps to get a local copy of the Expense Tracker App up and running:

1. **Clone the Repository**:
   Open your terminal or command prompt and run the following command:
   ```bash
   git clone https://github.com/mjsosait/expense-tracker.git

2. **Navigate to the Project Directory**:
   Change to the project directory using the command:
   ```bash
   cd expense-tracker

3. **Open the Application**
  Open the `index.html` file in your preferred web browser. You can do this by:
  - **Double-clicking** the `index.html` file in your file explorer, or
  - **Right-clicking** the file and selecting **Open with** > **Your Browser Name** (e.g., Chrome, Firefox, Edge).


4. **Ensure Your Browser Supports JavaScript**
   Make sure JavaScript is enabled in your browser settings for the app to function properly.

## Usage
Here’s how to use the Expense Tracker App:

1. **Add an Expense**:
   - Fill in the fields for *Expense Name*, *Amount*, and select the *Category*.
   - Click the **“Add/Update Expense”** button to save the expense.

2. **Edit an Expense**:
   - Click the **“Edit”** button next to any expense in the list.
   - Modify the details in the input fields.
   - Click **“Add/Update Expense”** to save changes.

3. **Delete an Expense**:
   - Click the **“Delete”** button next to the expense you want to remove.

4. **Filter by Category**:
   - Use the dropdown menu to select a category to filter the displayed expenses. 
   - Choose **“All”** to view all expenses.

5. **View Expense Chart**:
   - The pie chart at the bottom of the page displays a visual representation of your expenses by category.

## Demo
You can view a live demo of the Expense Tracker App here: [Expense Tracker App Demo](https://mjsosait.github.io/expense-tracker/)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file in the project root directory for details.



