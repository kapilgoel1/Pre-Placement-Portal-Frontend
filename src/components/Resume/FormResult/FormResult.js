import React, { useState, useEffect } from "react";

export default function FormResult({ resume }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:4000/resume/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(resume),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.error) setErrorMessage(result.error);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [resume]);
  if (!loading && errorMessage === "")
    return (
      <div>
        <p>Resume Generated</p>
        <a
          href="http://localhost:4000/resume/my/view"
          target="_blank"
          rel="noreferrer"
        >
          View Resume
        </a>
        <a href="http://localhost:4000/resume/my/download" download>
          Download Resume
        </a>
      </div>
    );
  else if (errorMessage !== "") return <p>{errorMessage}</p>;
  else return null;
}
