import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import InputForm from "../components/inputForm/InputForm";
import ShortUrl from "../components/ShortUrlRedirect/ShortUrl";
import axios from "axios";
import { serverUrl } from "../helpers/config";
const UrlShortner = () => {
  const clientUrl = window.location.href;
  const [inputUrl, setInputUrl] = useState();
  const [shortenUrl, setShortenUrl] = useState();
  // const [data, setData] = useState();
  const shorten = (e) => {
    e.preventDefault();
    axios
      .post(`${serverUrl}/api/url/shorten`, { url: inputUrl })
      .then((res) => {
        if (res.data) {
          const data = res.data;
          const createUrl = clientUrl + data.short;
          setShortenUrl(createUrl);
        }
      })
      .catch((err) => console.log(err));
    // console.log(inputUrl);
  };

  return (
    <section className="py-8">
      <Container maxWidth="lg">
        <InputForm
          setInputUrl={setInputUrl}
          inputUrl={inputUrl}
          shorten={shorten}
        />
        <ShortUrl shortenUrl={shortenUrl} />
      </Container>
    </section>
  );
};

export default UrlShortner;

// {
//   if (res.status) {
//     let data = res.data;

//     setShortenUrl(clientUrl + data.shortId);
//   }
// }
