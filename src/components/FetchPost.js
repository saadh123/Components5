import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const FetchPost = () => {
  const [id, setId] = useState(1);
  const [text, setText] = useState("");

  const onClick = () => {
    setId(Math.round(Math.random() * 150));
    // fetch(`https://dummyjson.com/posts/${id}`)
    // .then((res) => {
    //   res.json().then((data) => {
    //     setText(data);
    //   });
    // })
  };

  // const fetched = async () => {
  //   try {
  //     const res = await fetch(`https://dummyjson.com/posts/${id}`);
  //     const data = await res.json();
  //     setText(data.body);
  //   } catch (error) {
  //     // Handle any potential errors here
  //     console.error(error);
  //   }
  // };

  //   const fetched = () => {
  //     fetch(`https://dummyjson.com/posts/${id}`)
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setText(data.body);
  //       });
  //   };

  //   const fetched = () => {
  //     fetch(`https://dummyjson.com/posts/${id}`).then((res) => {
  //       res.json().then((data) => {
  //         setText(data.body);
  //       });
  //     });
  //   };

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => {
        res.json().then((data) => {
          setText(data.body);
          console.log(text);
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className={styles.FetchPost}>
      <button onClick={onClick}>Show me a different post</button>
      {text}
    </div>
  );
};

export default FetchPost;

//   In the first version of the code where you directly call asd() inside the component body, you are making a fetch request and updating the state as soon as the component renders. This can lead to unpredictable behavior and is generally not recommended.

// The issue is related to the fact that React state updates are asynchronous. When you call asd() directly, the fetch request is initiated, but the state update (setText(data.title)) doesn't immediately cause a re-render. React batches state updates, and the component may re-render at a later time. This means that when the initial render occurs, the text state might still be an empty string, resulting in an empty <h1>.

// Meanwhile, the fetch request is ongoing, and once it completes, it triggers the state update, causing a re-render with the correct data. This behavior may make it seem like the code is not working as expected.

// Using useEffect helps ensure that asynchronous operations, such as data fetching, are initiated at the appropriate time (typically when the component mounts) and allows React to handle the rendering cycle more predictably. It's a recommended practice for handling side effects in React components.
