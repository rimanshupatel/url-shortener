import React, { useState } from "react";
import Container from "@mui/material/Container";
import InputForm from "../components/inputForm/InputForm";
import ShortUrl from "../components/ShortUrlRedirect/ShortUrl";
const UrlShortner = () => {
  const [url, setUrl] = useState();
  console.log(url);
  const shorten = (e) => {
    e.preventDefault();
    console.log(url);
  };
  return (
    <section className="py-8">
      <Container maxWidth="lg">
        <InputForm setUrl={setUrl} shorten={shorten} />
        <ShortUrl />
      </Container>
    </section>
  );
};

export default UrlShortner;
