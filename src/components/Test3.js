import React, { useEffect } from "react";
import { useState } from "react";

const Test3 = () => {
  const [resource, setResource] = useState("posts");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.log("Error fetching data"));
  }, [resource]);

  return (
    <div>
      <hr></hr>
      <button onClick={() => setResource("posts")}>Posts</button>
      <button onClick={() => setResource("users")}>Users</button>
      <button onClick={() => setResource("comments")}>Comments</button>
      <h1>{resource}</h1>
      {resource === "posts"
        ? data.map((post) => <div key={post.id}>{post.title}</div>)
        : "NO"}

      {data.map((data) => {
        return <pre> {JSON.stringify(data)}</pre>;
      })}
    </div>
  );
};

//  SECOND VERSION:
// const Test3 = () => {
//   const [resource, setResource] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts/1"
//         );
//         const data = await response.json();
//         setResource(data.title);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // The empty dependency array ensures that the effect runs only once after the initial render

//   return (
//     <div>
//       <h1>{resource}</h1>
//     </div>
//   );
// };

export default Test3;
//https://jsonplaceholder.typicode.com/posts/1
