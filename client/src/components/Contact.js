import { useEffect, useState } from "react";
import axios from "axios";

export function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [selectData, setSelectData] = useState([]);
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    let processing = true;
    axiosFetchData(processing);
    return () => {
      processing = false;
    };
  }, []);

  // const fetchData = async (processing) => {
  //   await fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (processing) {
  //         setSelectData(data);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  const axiosFetchData = async (processing) => {
    await axios
      .get("http://localhost:4000/users")
      .then((res) => {
        if (processing) {
          setSelectData(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const axiosPostData = async () => {
    const postData = {
      email: email,
      website: selectValue,
      message: message,
    };

    await axios
      .post("http://localhost:4000/contact", postData)
      .then((res) => setError(<p className="success">{res.data}</p>));
  };

  const SelectDropdown = () => {
    return (
      <select
        value={selectValue}
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
      >
        {selectData?.map((item) => (
          <option value={item.website} key={item.website}>
            {item.website}
          </option>
        ))}
      </select>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(email + " | " + message + " | " + selectValue);

    if (!message) {
      setError(
        <p className="required">Message is empty. Please type a message.</p>
      );
    } else {
      setError("");
    }

    setError("");
    axiosPostData();
  };

  return (
    <>
      <h1>Contact Us</h1>
      <form className="contactForm">
        <label>Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>How did you hear about us?</label>
        <SelectDropdown />

        <label>Message</label>
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {error}

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
