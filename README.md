# Calendar-Applications-For-Communication-Tracking-app

# What is the use of this Repo
This Project is a Simple ReactJS Project which demonstrates the following

# Simple ReactJS Project Template

This project demonstrates the following key features of ReactJS:

- Creating a Component in React
- Making HTTP calls
- Communicating between parent and child components
- Using Bootstrap along with React
- Using Basic Routing in React

This project template can be used as a foundation to build bigger ReactJS projects.

## Prerequisites

### 1. Install Node.js
- Visit [Node.js website](https://nodejs.org/en/) and download the latest stable version of Node.js. Follow the instructions based on your operating system to install Node.js.

### 2. Install `create-react-app`
- Install `create-react-app` globally to easily create and manage React applications. Run the following command in your terminal:

  ```bash
  npm install -g create-react-app
  ```
  
## Live Application URL

After starting the development server using `npm start`, your live application will be accessible at:

- [http://localhost:3000](http://localhost:3000)


# Creating Your First React App with Vite

Follow the steps below to create your first React app using **Vite**.

## Steps to Create Your First React App

### 1. Create a Folder on Your PC
First, create a new folder where you want to store your project files.

### 2. Open the Folder in Visual Studio Code
After creating the folder, open that folder in **Visual Studio Code**.

### 3. Open Your Terminal Window
In Visual Studio Code, open the terminal window by going to **View > Terminal** or using the shortcut `Ctrl + ``.

### 4. Run the Vite Command
In the terminal, type the following command to create a new project using Vite:

```bash
npm create vite@latest
```

### 5. Press 'Y' to Proceed
When prompted, press y to confirm and proceed with creating the project.

### 6. Type Your Project Name
You will be asked to enter the name for your project. Type your desired project name and press Enter.

### 7. Choose React as the Template
You will be prompted to choose a template. Select react from the options.

### 8. Choose React + JavaScript
Next, you’ll be asked if you want to use React with JavaScript or TypeScript. Choose React + JavaScript.

### 9. Navigate to Your Project Folder
```bash
cd <your-project-name>
```
Replace <your-project-name> with the name you provided earlier.

### 10. Install NPM Packages
Now, install all the required npm packages by running the following command:

```
npm install
```

### 11. Run the Application
Finally, run the application locally using the following command:

```
npm run dev
```
Your application will be running at http://localhost:3000. Open this URL in your browser to see your React app in action.

# Deploying Your React App on Vercel

This guide will help you deploy your React app to Vercel.

## Steps to Deploy

### 1. Create a Vercel Account
- Visit [Vercel](https://vercel.com/) and sign up for a free account if you don't already have one.

### 2. Install Vercel CLI
To deploy using the Vercel CLI, you need to install it globally on your system. Run the following command:

```bash
npm install -g vercel
```
### 3. Log in to Vercel
Log in to your Vercel account by running the following command:

```
vercel login
```
You'll be prompted to enter your email address, and then you’ll receive a confirmation email. Follow the instructions to log in.

### 4. Initialize Your Project with Vercel
Navigate to the root directory of your React project and run the following command:
```
vercel
```
This command will guide you through a setup process. If this is your first time deploying, it will ask for:
Project name
Directory to deploy (press Enter to use the current directory)
Link to an existing project (or create a new one)
### 5. Deploy the Application
Once your project is initialized with Vercel, you can deploy your React app with the following command:

```
vercel --prod
```
This will deploy your app to Vercel and make it live. The --prod flag ensures the deployment goes to the production environment.

### 6. Access Your Deployed App
After the deployment finishes, Vercel will provide a URL where your app is hosted. You can access your live application using the provided URL.

### App.jsx
# React Calendar Application for Communication Tracking

This is a React application designed to help track communications with companies. The app includes several components for managing companies, communications, calendar views, and reporting analytics.

## Features
- **Company Management**: Manage and view companies and their communication history.
- **Communication Method Management**: Manage communication methods used for interactions with companies.
- **Dashboard**: View communication data and track important tasks.
- **Notifications**: Get notified about overdue or upcoming communications.
- **Calendar View**: View scheduled communications in a calendar format.
- **Reporting and Analytics**: Generate and display communication reports and analytics.

## Requirements
- Node.js (version 14.x or higher)
- npm (version 6.x or higher)

## Setup Instructions

### 1. Clone the Repository
Clone the project repository to your local machine using the following command:

```bash
git clone <repository-url>
```
2. Install Dependencies
Navigate to the project directory and install the required npm packages:

```
cd <project-folder>
npm install
```
3. Start the Application
Run the application locally:

```
npm start
```
The application will be available at http://localhost:3000.

### Application Design
### Components
Company Management: Displays and manages a list of companies.
Communication Method Management: Manages communication methods (e.g., LinkedIn, Email, Phone Call).
Dashboard: Provides a visual overview of communications.
Notifications: Sends notifications based on the communication schedule.
Calendar View: Displays communications in a calendar format.
Reporting and Analytics: Displays communication reports and analytics.
State Management
companies: An array containing company details, communication history, and next scheduled communication.
showCommunicationModal: Controls the visibility of the modal for adding new communication.
selectedCompany: Tracks the currently selected company for adding communication.

## Folder Structure
plaintext
```
src/
  components/
    CalendarView.js         // Calendar View Component
    CompanyManagement.js    // Company Management Component
    CommunicationMethodManagement.js // Communication Method Management Component
    Dashboard.js            // Dashboard Component
    Notifications.js        // Notifications Component
    ReportingAnalytics.js  // Reporting and Analytics Component
  App.js                    // Main App Component
  index.js                  // Entry point of the application
```
### Example of the companies state:
javascript
```
const [companies, setCompanies] = useState([
  {
    name: 'Company A',
    communications: [
      { type: 'LinkedIn Post', date: '2023-09-01', notes: 'Initial contact' },
      { type: 'Email', date: '2023-09-05', notes: 'Follow-up' },
    ],
    nextCommunication: { type: 'Email', date: '2023-09-10' },
    overdue: false,
    dueToday: false,
  },
  {
    name: 'Company B',
    communications: [
      { type: 'Phone Call', date: '2023-09-02', notes: 'Discussed project' },
      { type: 'LinkedIn Message', date: '2023-09-06', notes: 'Sent proposal' },
    ],
    nextCommunication: { type: 'LinkedIn Post', date: '2023-09-08' },
    overdue: true,
    dueToday: false,
  },
]);
```

### Key Functions
handleCommunicationPerformed: Adds a new communication for the selected company and updates the state.
handleAddCommunication: Adds new communication to a specified company and updates the state.

## CommunicationModal.JSX

The `CommunicationModal` component is a modal dialog used to log new communications for a selected company. It collects the following information:

- **Type of Communication**: The type of communication made (e.g., LinkedIn Post, Email, Phone Call, or Meeting).
- **Date of Communication**: The date when the communication took place.
- **Notes**: Additional notes related to the communication.
- **Next Scheduled Communication Type**: The type of the next scheduled communication.
- **Next Scheduled Communication Date**: The date for the next communication.

### Features

- **State Management**: 
  - `modalData`: Holds the data for the communication that will be logged.
  - `showModal`: Controls the visibility of the modal.
  - `companies`: List of companies with their communication history.
  - `setCompanies`: A function to update the state of the companies.
  
- **Input Fields**:
  - Dropdown for selecting the type of communication.
  - Date input for the communication date and the next scheduled date.
  - Textarea for adding notes regarding the communication.
  - Dropdown for selecting the type of the next scheduled communication.

### Modal Actions

- **Submit**: When the user submits the form:
  - The new communication data is added to the selected company.
  - The `nextCommunication` details are updated with the next scheduled communication.
  - The modal closes, and the form is reset.
  
- **Close**: The modal can be closed without saving by clicking the "Close" button.

### Example Usage

```javascript
<CommunicationModal
  showModal={showModal}
  setShowModal={setShowModal}
  companies={companies}
  setCompanies={setCompanies}
/>
```
State Structure Example
modalData: The object holding the form data.

type: Type of communication (e.g., "Email", "Phone Call").
date: Date of the communication.
notes: Notes regarding the communication.
nextType: Type of the next scheduled communication.
nextDate: Date of the next scheduled communication.
companies: An array of company objects, each containing:
communications: A list of past communications for the company.
nextCommunication: The next scheduled communication.
selected: A boolean flag indicating if the company is selected.

## Example of companies State:
javascript
```
const [companies, setCompanies] = useState([
  {
    name: 'Company A',
    communications: [
      { type: 'Email', date: '2023-09-01', notes: 'Initial contact' },
    ],
    nextCommunication: { type: 'Phone Call', date: '2023-09-15' },
    selected: true,
  },
  {
    name: 'Company B',
    communications: [
      { type: 'LinkedIn Post', date: '2023-09-03', notes: 'Sent proposal' },
    ],
    nextCommunication: { type: 'Email', date: '2023-09-10' },
    selected: false,
  },
]);
```
# Styling
The modal uses Bootstrap 4 for styling and has the following classes:

.modal: Controls the modal display.
.modal-dialog: Wraps the modal content.
.modal-header, .modal-body, .modal-footer: Structure the modal layout.
.btn-primary, .btn-secondary: Bootstrap button classes for styling buttons.

### Bootstrap
## Option 1: Using npm (recommended for React projects)
Install Bootstrap via npm: Run the following command in your project directory to install Bootstrap:

```
npm install bootstrap
```
Import Bootstrap CSS: In your src/index.js or src/App.js file, import the Bootstrap CSS:

javascript
```
import 'bootstrap/dist/css/bootstrap.min.css';
```

### Limitation ( CommunicationModal.JSX)
Here are the shortened limitations for the CommunicationModal.jsx component:

1. **State Management**: Can become cumbersome with complex forms. Consider using **Redux** or **Context API** for better state management in larger applications.
2. **Direct Mutation**: The state is updated directly, which can lead to potential issues. Always avoid mutating state directly. Use immutable updates for proper state management.
3. **Modal Visibility**: Managing visibility for multiple modals can get complex. Consider centralizing modal visibility using **Context API** or **React Portals** to improve code maintainability.
4. **Error Handling**: The form currently lacks validation. It's important to add checks for required fields and to ensure proper data formats (e.g., valid dates).
5. **Limited Flexibility**: The modal is specifically designed for communication logging. It would be beneficial to refactor it to be more reusable for other types of modal forms.
6. **Inline Styles**: The modal visibility is controlled using inline styles. It's best practice to move styles into external CSS classes for better styling control and readability.
7. **Performance**: Large datasets can impact performance, particularly when rendering the list of companies or communication logs. Consider using **memoization** zone differences. For more robust date handling, consider integrating libraries like **moment.js** to ensure accurate date manipulation and time zone management.

### CompanyManagement.JSX
## Key Features:

# Features
Add a Company: Fill in the form with company details and click "Add Company."
View Company: Click "View" to open a modal that displays detailed company information.
Delete Company: Click "Delete" to remove a company from the list.

# How to Use
# Add a Company
Fill out the company form with information such as Company Name, Location, LinkedIn Profile, Emails, Phone Numbers, and more.
After filling in the details, click the "Add Company" button.
# View Company
In the list of companies, click the "View" button next to any company. This will open a modal showing the company's details.
# Delete Company
In the company list, click the "Delete" button to remove the company from the list.ete" button to remove the company from the list.


# Limitation
- **No Persistent Storage**: Data is lost on page refresh, as there’s no backend or database.
- **Form Validation**: Basic input validation is missing (e.g., email or phone format).
- **No Search/Filter:** There’s no functionality to search or filter companies.
- **No Editing:** Once added, companies cannot be edited—only deleted and re-added.
- **Basic UI:** The app uses minimal styling with no advanced UI or custom design.
- **No Authentication:** Anyone can add, view, or delete companies without user authentication.
- **No Error Handling:** There is little error feedback for invalid actions or form submissions.
- **Limited Mobile Responsiveness:** The app may not be fully optimized for mobile devices.

## Example Usage

Here is a simple example of how to use the `CompanyManagement` component within your main application component.

### App Component

```javascript
import React from 'react';
import CompanyManagement from './CompanyManagement';

const App = () => (
  <div>
    <CompanyManagement />
  </div>
);

export default App;
```

# Dashboard.JSX

The `Dashboard` component is a React functional component that serves as the main interface for managing company communications. It allows users to log communications, view company details, and manage notifications.

## Features

- **Company List**: Displays a list of companies with their communication history and next scheduled communication.
- **Communication Logging**: A modal to log new communications for selected companies.
- **Dynamic Highlighting**: Companies can be highlighted based on their communication status.
- **Checkbox Selection**: Users can select companies to log communications for.

## Installation

Make sure to install Bootstrap for styling:

```
npm install bootstrap
```


## Dashboard Component Limitations

1. **Single Company Selection**: Only one company can be selected for logging communications at a time.

2. **Communication Logging**: Ensure the `CommunicationModal` is correctly implemented; otherwise, logging may fail.

3. **State Management**: The component uses local state, which can lead to data loss if unmounted. Consider using a global state management solution for larger applications.

4. **Data Structure**: The `communications` array must contain objects with `type`, `date`, and `notes`. Altering this structure may cause rendering issues.

5. **Modal Visibility**: The modal's visibility is controlled by state; improper handling may leave it open unintentionally.

6. **Styling**: Requires Bootstrap for styling; responsiveness may vary based on the number of companies.


## Example Usage

Here is a simple example of how to use the `Dashboard` component within your main application component.

### App Component

```javascript
import React from 'react';
import Dashboard from './Dashboard';

const App = () => (
  <div>
    <Dashboard />
  </div>
);

export default App;
```

# Notifications.JSX

The `Notifications` component displays notifications for overdue and today's communications for a list of companies. It provides a visual summary of communications that need attention.

## Features

- Displays a count of overdue communications.
- Lists companies with overdue communications.
- Displays a count of today's communications.
- Lists companies with communications due today.

## Installation

Make sure to install Bootstrap in your project to use this component:

```
npm install bootstrap
```

## Notifications Component Limitations

1. **Date Format**: Assumes communication dates are in `YYYY-MM-DD` format; deviations may cause incorrect filtering.
  
2. **Overdue Logic**: Relies on the current date; time zone discrepancies may affect overdue calculations.

3. **Data Structure**: Expects each company to have a `communications` array; alterations may lead to issues.

4. **Performance**: Filtering is done on the entire `companies` array, which may impact performance with large datasets.

5. **No Notifications Handling**: Lacks visual feedback when there are no overdue or today's communications.

6. **Styling Dependencies**: Requires Bootstrap for styling; ensure it is included in your project.

7. **Accessibility**: Basic accessibility features are included, but further enhancements may be needed for compliance.
   
 ## Example Usage

Here is a simple example of how to use the `Notifications` component within your main application component.

### App Component

```javascript
import React from 'react';
import Notifications from './Notifications';

const companies = [
  {
    name: 'Company A',
    communications: [
      { type: 'Email', date: '2023-10-01', notes: 'Follow-up on proposal' },
      { type: 'Call', date: '2023-10-05', notes: 'Discuss project details' }
    ]
  },
  {
    name: 'Company B',
    communications: [
      { type: 'Meeting', date: '2023-10-03', notes: 'Quarterly review' }
    ]
  }
];

const App = () => (
  <div>
    <Notifications companies={companies} />
  </div>
);

export default App;
```

# Reporting_Analytics.jsx

The `ReportingAnalytics` component provides a comprehensive dashboard for analyzing communication activities across different companies. It includes visual reports, filters, and downloadable reports to help users track and manage their communication efforts effectively.

## Features

- **Filters**: Enable filters to select specific companies, date ranges, and communication methods.
- **Communication Frequency Report**: Visual representation of the frequency of different communication methods.
- **Engagement Effectiveness Dashboard**: Displays the effectiveness of various communication methods in terms of successful responses.
- **Overdue Communication Trends**: Visualizes trends in overdue communications over a specified period.
- **Downloadable Reports**: Options to download reports in PDF and CSV formats.
- **Real-Time Activity Log**: Displays a log of communication activities with sorting options.

## Installation

Make sure to install the required dependencies in your project:

```bash
npm install react-chartjs-2 chart.js jspdf bootstrap
```
## Reporting Analytics Component Limitations

1. **Date Format**: Assumes communication dates are in ISO format; deviations may cause incorrect filtering.

2. **Sample Data**: Uses placeholder data for reports; actual data integration is required for real-world usage.

3. **Performance**: May experience performance issues with a large number of activities due to real-time updates.

4. **Sorting Logic**: Sorting is done on the client side; consider server-side sorting for large datasets.

5. **Accessibility**: Basic accessibility features are included, but further enhancements may be needed for compliance.

6. **Styling Dependencies**: Requires Bootstrap for styling; ensure it is included in your project.

7. **Real-Time Updates**: Simulates real-time updates with sample data; actual implementation may require a different approach for real-time data.

 
 ## Example Usage

Here is a simple example of how to use the `ReportingAnalytics` component within your main application component.

### App Component

```javascript
import React from 'react';
import ReportingAnalytics from './ReportingAnalytics';

const companies = [
  { id: 1, name: 'Company A' },
  { id: 2, name: 'Company B' },
  { id: 3, name: 'Company C' },
];

const App = () => (
  <div>
    <ReportingAnalytics companies={companies} />
  </div>
);

export default App;
```
