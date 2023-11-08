import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const baseUrl = "http://127.0.0.1:8000";
  const [bookList, setBookList] = useState();
  useEffect(() => {
    getBookList();
  }, []);
  async function getBookList() {
    try {
      const res = await axios.get(`${baseUrl}/getBookList`);
      console.log(res);
      setBookList(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <ul>
        {bookList.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
