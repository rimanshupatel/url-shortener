import * as React from "react";
import Container from "@mui/material/Container";
import InputForm from "../components/inputForm/InputForm";
import ShortUrl from "../components/ShortUrlRedirect/ShortUrl";
const UrlShortner = () => {
  return (
    <section className="py-8">
      <Container maxWidth="lg">
        <InputForm />
        <ShortUrl />
      </Container>
    </section>
  );
};

export default UrlShortner;
