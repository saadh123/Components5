import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);

  //   useEffect(() => {
  //     setInterval(() => {
  //       setCounter((prev) => {
  //         const newCount = prev + 1;
  //         console.log(`Count is ${newCount}`);
  //         return newCount;
  //       });
  //     }, 1000);
  //   }, []);

  //   useEffect(() => {
  //     const i = setInterval(() => {
  //       setCounter(count + 1);
  //     }, 1000);
  //     return () => clearInterval(i);
  //   }, [count]);

  //   useEffect(() => {
  //     setInterval(() => {
  //       setCounter(count + 1);
  //     }, 1000);
  //   }, [count]);

  //   useEffect(() => {
  //     setInterval(() => {
  //       setCounter((prev) => prev + 1);
  //     }, 1000);
  //   }, []);

  return <h3>Count is {count} </h3>;
};

export default Counter;
