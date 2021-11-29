import React, { useEffect } from "react";
import SawoLogin from "sawo-react";

const Greetings = () => {
  function sawoLoginCallback(payload) {
    console.log(payload);
  }

  const sawoConfig = {
    onSuccess: sawoLoginCallback, //required,
    identifierType: "email", //required, must be one of: 'email', 'phone_number_sms',
    apiKey: "069eebc0-8afa-4712-80b1-9102c04af67c", // required, get it from sawo dev.sawolabs.com,
    containerHeight: "300px", // the login container height, default is 300px
  };

  return (
    <div>
      <SawoLogin config={sawoConfig} />
    </div>
  );
};
export default Greetings;