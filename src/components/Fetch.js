import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [id, setId] = useState(1);

  const onClick = () => {
    setId(Math.round(Math.random() * 15));
    console.log(id);
  };

  return (
    <div>
      <button onClick={onClick}>Show me a different post</button>
      <Post id={id} />
    </div>
  );
};

const Post = ({ id }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://dummyjson.com/posts/${id}`, { signal: controller.signal })
      .then((res) =>
        res.json().then((data) => {
          setText(data);
          return () => controller.abort();
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

  //   useEffect(() => {

  //     async function returnData() {
  //       try {
  //         const data = await fetch(`https://dummyjson.com/posts/${id}`);
  //         const fetchedData = await data.json();
  //         setText(fetchedData);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //     returnData();
  //   }, [id]);

  return <div>{text.body}</div>;
};

export default Fetch;
