import React from 'react';

const Blog = () => {
    return (
        <div className='my-20 sm:mx-10 lg:mx-20'>
             <h2 className='font-semibold text-6xl text-center text-red-600 mb-6'>Blog</h2>
            <h3 className='font-semibold mb-2 text-lg'>1. The differences between uncontrolled and controlled components.</h3>
            <p className='mb-4'><strong>Ans:</strong> The main difference between uncontrolled and controlled components is that controlled components are more predictable and easier to manage since their state is controlled by a parent component, while uncontrolled components offer more flexibility but can be more difficult to manage since their state is managed internally.</p>
            <h3  className='font-semibold mb-2 text-lg'>2. How to validate React props using PropTypes.</h3>
            <p  className='mb-4'><strong>Ans:</strong> To validate React props using PropTypes, you can follow these steps: <br /> <br />
                1.Import PropTypes from the 'prop-types' package at the top of your component file. <br />
                2.Define the expected props for your component by setting a `propTypes` property on the component function or class. This should be an object that specifies the name and validation rules for each prop. <br />
                3.Use the available validation rules from PropTypes, such as `PropTypes.string`, `PropTypes.number`, `PropTypes.bool`, `PropTypes.object`, etc., to ensure that the props are of the correct type. <br />
                4.Use the `isRequired` modifier to indicate that a prop is required and should trigger a warning if not provided. <br />
                5.Optionally, you can set default values for props by using the `defaultProps` property. This ensures that the component has valid props even if they are not provided by the parent component.</p>
            <h3  className='font-semibold mb-2 text-lg'>3. The difference between nodejs and express js.</h3>
            <p  className='mb-4'><strong>Ans:</strong> Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. It provides a set of built-in modules and features for building server-side applications, such as file system access, networking, and process management. <br />

                Express.js is a lightweight framework built on top of Node.js that provides a set of features for building web applications and APIs. It provides a simple and intuitive way to handle HTTP requests and responses, routing, middleware, and other common web application features.</p>
            <h3  className='font-semibold mb-2 text-lg'>4. What is a custom hook, and why will you create a custom hook?</h3>
            <p  className='mb-4'><strong>Ans:</strong> A custom hook is a JavaScript function that starts with the word "use" and follows the rules of React Hooks. It allows you to reuse logic and stateful functionality across multiple components in a React application. <br /> <br />

                Creating a custom hook can be beneficial in a number of ways, including: <br />
                1.Reusability: By creating a custom hook, you can encapsulate logic and functionality that can be reused across different components, making your code more modular and easier to maintain. <br />
                2.Abstraction: Custom hooks can abstract away complex logic and state management from your components, making them simpler and more focused on their specific responsibilities. <br />
                3.Organization: Custom hooks can help you organize your code better by separating concerns and providing a clear separation between the view layer and the business logic layer. <br />
                4.Testing: Custom hooks can be tested independently, allowing you to test your application's functionality in isolation without relying on the UI components.</p>
        </div>
    );
};

export default Blog;