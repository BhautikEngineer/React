## react

  
btn events 
calculator

crud on employee table using local storage

TO do list 

Counter using hooks

Make counter using usestate and useeffect for doubling it.


### Hook based tasks
Task 1: Create a Form Validation Component

1. Create a new React component called `FormValidation`.
2. Use the `useState` hook to initialize state variables for the form inputs (e.g., `name`, `email`, `password`).
3. Render an HTML form with input fields for name, email, and password.
4. Use the `useEffect` hook to add validation logic for the form inputs (e.g., validate email format, password length).
5. Display error messages for each input field if the validation fails.
6. Handle form submission and display a success message if all inputs are valid.

Task 2: Create a Fetch Data Component

1. Create a new React component called `FetchData`.
2. Use the `useEffect` hook to fetch data from an API endpoint when the component mounts.
3. Store the fetched data in a state variable using the `useState` hook.
4. Render the fetched data in the component's JSX.
5. Handle any loading or error states while fetching the data.

Task 3: Create a Debounced Search Component

1. Create a new React component called `DebouncedSearch`.
2. Use the `useState` and `useEffect` hooks to manage the search input value.
3. Use the `useEffect` hook with a debounce function to delay the execution of a search API call when the input value changes.
4. Render the search input field and display the search results below it.
5. Update the search results in real-time as the user types, but only perform the API call after a brief delay to avoid unnecessary requests.

These tasks should give you a good starting point to practice different React hooks and their use cases. Feel free to modify and enhance the tasks based on your learning goals and preferences.


task that utilizes `useContext` in React for managing student information:

Task 4: Student Management System

Create a Student Management System where you can add, update, and display student information using React's `useContext` hook.

1. Create a `StudentContext` using `createContext()` to store the student data.
2. Create a form component (`StudentForm`) to capture the student's name, age, and grade.
3. Implement a submit handler in `StudentForm` that adds the student to the student list in the context using the `useState` hook.
4. Create a component (`StudentList`) that displays a list of all students using the `useContext` hook to access the student data from the context.
5. Implement an update handler in `StudentList` that allows editing student information and updating the context.
6. Display the `StudentForm` and `StudentList` components in the main app component.
7. Style the components with CSS as desired.

This task demonstrates how to use `useContext` to manage state and share data between components in a student management system. By adding students through the form and updating them in the list, you can effectively manage the student data using the React Context API.

Note: To complete this task, you need to have a basic understanding of React, including `useState`, `useContext`, and component rendering.

Task 5: Calculation Memoization

Implement a calculation memoization task using React's `useMemo` hook. The goal is to optimize the performance of repetitive calculations by memoizing the results.

1. Create a component that takes two input numbers as props.
2. Inside the component, define a memoized function using `useMemo` that calculates the sum of the two input numbers.
3. Display the calculated sum in the component's render output.
4. Test the component by passing different input numbers and observing the calculated sum. Ensure that the calculation is only performed when the input numbers change.

This task demonstrates the use of `useMemo` to memoize the calculation result. By memoizing the calculation, the result is stored and only recalculated if the input numbers change. This optimization can significantly improve the performance of expensive calculations, especially in scenarios where the calculations are repeated frequently or involve complex operations.

Note: This task assumes basic familiarity with React and the `useMemo` hook.

 task based on custom hooks:

Task 6: Create a custom hook to fetch data from an API.

Description:
Create a custom hook called `useFetchData` that accepts a URL as a parameter and handles fetching data from that URL using the `fetch` function or any other HTTP library of your choice. The hook should handle loading state, error handling, and returning the fetched data.

Instructions:
1. Create a new file named `useFetchData.js`.
2. Implement the `useFetchData` hook in the `useFetchData.js` file.
3. The hook should accept a URL as a parameter.
4. Inside the hook, use the `useEffect` hook to perform the API request when the component using the hook mounts or when the URL changes.
5. Handle the loading state by setting an initial value of `null` and updating it to `true` when the API request starts, and then updating it to `false` when the request completes.
6. Handle errors by setting an initial value of `null` and updating it to the error message if the API request fails.
7. Use the `useState` hook to store the fetched data with an initial value of `null` and update it with the fetched data when the request succeeds.
8. Return the loading state, error, and fetched data as an array from the hook.
9. Export the `useFetchData` hook from the `useFetchData.js` file.

Example usage:
```jsx
import React from 'react';
import useFetchData from './useFetchData';

const App = () => {
  const url = 'https://api.example.com/data';
  const [loading, error, data] = useFetchData(url);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Data</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default App;
```

In this example, we import and use the `useFetchData` hook to fetch data from the specified URL (`https://api.example.com/data`). We handle the loading state and error cases by displaying appropriate messages or rendering the fetched data if available.

You can customize the `useFetchData` hook to fit your specific API requirements, including handling headers, request options, or additional logic.


## advanced tasks based on react
Make covid dashboard using axios. 




1. Build a To-Do List Application:
   - Create a form to add new tasks.
   - Display a list of tasks with the ability to mark them as completed.
   - Implement the functionality to delete tasks.
   - Add filters to show all tasks, completed tasks, or active tasks.
   - Allow users to edit task details.

2. Create a Weather Forecast Application:
   - Fetch weather data from a weather API using Axios.
   - Display the current weather conditions, such as temperature, humidity, and weather description.
   - Implement a search feature to get weather forecasts for different locations.
   - Show a 5-day weather forecast with details for each day.
   - Include icons or images to represent weather conditions.

3. Develop a Movie Database Application:
   - Fetch movie data from a movie API using Axios.
   - Create a search bar to search for movies by title or genre.
   - Display a list of search results with movie details, such as title, release year, and rating.
   - Implement pagination or infinite scrolling to load more search results.
   - Create a movie detail page with additional information, like the plot, cast, and reviews.

4. Build a Social Media Feed:
   - Create a layout similar to popular social media platforms like Facebook or Twitter.
   - Fetch posts or updates from a social media API.
   - Display the posts in a feed, including the username, profile picture, timestamp, and content.
   - Allow users to like, comment on, or share posts.
   - Implement a feature to create new posts or updates and add them to the feed.

5. Develop a Music Player Application:
   - Fetch music data from a music API using Axios.
   - Display a list of songs or albums with their details, such as title, artist, and album cover.
   - Implement playback controls, including play, pause, next, and previous.
   - Allow users to create playlists and add songs to them.
   - Include features like shuffle and repeat for a personalized music experience.

These are just a few examples of advanced tasks based on React. Each task requires different levels of complexity and can be expanded further based on your skills and creativity. Remember to utilize React's component-based architecture and explore additional libraries or frameworks that can enhance your development process.
