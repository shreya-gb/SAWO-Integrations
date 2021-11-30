import Sawo from 'sawo'
import { useState, useEffect } from 'react';

const Index = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [payload, setPayload] = useState({});

  useEffect(() => {
    var config = {
      containerID: "sawo-container",
      identifierType: "email", // can be one of 'email' or 'phone_number_sms'
      apiKey: 'API KEY', // Add the API key copied from 2nd step
      onSuccess: (payload) => { // Add a callback here to handle the payload sent by sdk
        console.log("Payload : " + JSON.stringify(payload));
        setUserLoggedIn(true);
        setPayload(payload);
      },
    };

    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  return <div>

    (!isUserLoggedIn? <div className="formContainer" id="sawo-container" />: <div>
      Welcome
      </div>)
  </div>
}
export default Index
