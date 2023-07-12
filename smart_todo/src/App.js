import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen.js';
function App() {
  return <HomeScreen />;
}

export default App;

// Welcome to my smart_todo list web-application
// Just write the task in text input field and click + icon to add task to database and click on any task to mark it done. This state will be saved to backend and will remain even on page refresh or app restart.
// You can optionally add the task dead line. Tasks will be automatically sorted based on latest deadline (if specified)
// Click delete icon to permanently delete the task and that's all!✨
