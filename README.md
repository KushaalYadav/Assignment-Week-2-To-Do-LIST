**React To-Do List Application**

- This is a React-based To-Do List application that allows users to manage daily tasks in an organized and interactive way.
- The app is built with basic and intermediate React concepts such as **useState, useEffect, conditional rendering, props, event handling, and localStorage integration.**

**Features**

1.) Add Tasks
- Users can add new tasks by typing in the input box and clicking the "Add Task" button.
- Empty input is automatically prevented.

2.) Display Tasks
- All tasks are displayed in a styled box, showing the current list with latest updates.

3.) Delete Tasks
- Each task has a delete (🗑️) button that removes the task from the list.

4.) Mark as Complete / Undo
- Each task includes a button to mark it as completed or undo it back to incomplete.

5.) Filter Tasks
- Users can filter tasks using buttons: All, Completed, and Incomplete.

6.) LocalStorage Support
- All tasks are saved locally in the browser.

- The list remains available even after refreshing or reopening the page.

**Dynamic UI**

- The task box resizes automatically based on the number of tasks.

The interface includes attractive styling and icons for better user experience.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 **Brief Testing Guidance**

To test the application locally after cloning or pulling the repo:

**Install dependencies**
Run the following command in the project directory:

- bash
`npm install


**Install icon library**
~ This project uses react-icons:

`npm install react-icons


**~ Start the development server**
` bash
npm start


**Test the functionality manually:**

1.) Try adding a task using the input and button.

2.) Click the delete icon to remove a task.

3.) Click the complete/undo icon to toggle task completion.

4.) Switch between filters to view only completed or incomplete tasks.

5.) Refresh the page to confirm tasks persist via localStorage.

6.) Cross-Browser Check (optional)

**Open the app in multiple browsers to check UI responsiveness and data persistence.**

------------------------------------------------------------------------------------------------------------
