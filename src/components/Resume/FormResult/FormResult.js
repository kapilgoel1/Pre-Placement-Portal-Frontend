import React, { useEffect, useState } from "react";
import { Anch, AnchContainer } from "./FormResult.elements";

export default function FormResult({ resume, setStep }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/resume/generate`, {
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
        <h4 className="text-white text-center">Resume Generated</h4>
        <AnchContainer>
          <Anch
            className=""
            href={`${process.env.REACT_APP_BACKEND_URL}/resume/my/view`}
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </Anch>
        </AnchContainer>
        <AnchContainer>
          <Anch
            href={`${process.env.REACT_APP_BACKEND_URL}/resume/my/download`}
            className=""
            download
          >
            Download Resume
          </Anch>
        </AnchContainer>
        <AnchContainer>
          <Anch onClick={() => setStep(1)}>Edit Resume</Anch>
        </AnchContainer>
      </div>
    );
  else if (errorMessage !== "")
    return (
      <>
        <h4 className="text-white text-center">{errorMessage}</h4>
        <AnchContainer>
          <Anch onClick={() => setStep(1)}>Edit Resume</Anch>
        </AnchContainer>
      </>
    );
  else return null;
}
