import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import InputForm from "../components/inputForm/InputForm";
import ShortUrl from "../components/ShortUrlRedirect/ShortUrl";
import axios from "axios";
import { serverUrl } from "../helpers/config";
const UrlShortner = () => {
  const [url, setUrl] = useState();
  const [data, setData] = useState();
  const shorten = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    axios
      .get(`${serverUrl}/url`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    console.log(serverUrl);
  }, []);
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
