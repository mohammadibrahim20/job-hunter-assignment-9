import React from "react";
import NavBotom from "../NavBotom/NavBotom";
import QnA from "../QnA/QnA";

const Blog = () => {
  return (
    <div>
      <NavBotom>Blog</NavBotom>
      <h2 className="text-5xl text-center font-bold mt-32">FaQ Sections</h2>
      <section className="flex container">
        <div className="w-6/12 ">
          <QnA question={"When should you use context API?"}>
            You should use the Context API in React when you have data or state
            that needs to be shared between multiple components that are not
            directly connected in the component tree, or when you have a large
            component tree where passing props down to multiple levels becomes
            cumbersome and hard to manage.
          </QnA>
          <QnA question={"What is a custom hook?"}>
          A React custom hook is a JavaScript function that starts with the prefix "use" and can use React's built-in hooks or other custom hooks to encapsulate logic and stateful behavior that can be shared across multiple components in a React application. Custom hooks allow for code reuse, abstraction, and separation of concerns in React functional components.
          </QnA>
          <QnA question={"What is useRef?"}>
          React useRef is a hook that returns a mutable ref object which can be used to store a value that persists across component renders. It can be used to access DOM elements or to store any mutable value without triggering a re-render. The useRef hook is commonly used in cases where you need to modify a value that should not trigger a component re-render, or to access a DOM node to perform some imperative operation, like setting focus or scrolling.
          </QnA>
          <QnA question={"What is useMemo?"}>
          React useMemo is a hook that memoizes the result of a function so that it is only re-executed when one of its dependencies has changed. It allows for optimization of performance by preventing unnecessary re-computations in functional components. useMemo takes two arguments: a function that computes a value, and an array of dependencies. If any of the dependencies have changed since the last render, the function will be re-executed and the new value will be returned. If none of the dependencies have changed, the memoized value from the previous render will be returned.
          </QnA>

        </div>
        <div className="w-6/12">
          <img
            className="bg-cover w-full"
            src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5185.jpg?w=740&t=st=1681224446~exp=1681225046~hmac=860b20252facc428bcf4c15096a7db02631eb54e519c52ecb322f51a7f0ed18d"
            alt=""
            srcset=""
          />
        </div>
      </section>
    </div>
  );
};

export default Blog;
