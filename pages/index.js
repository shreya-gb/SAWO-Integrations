import SawoLogin from 'sawo-react';

const Greetings = () => {
    function sawoLoginCallback(payload) {
        console.log(payload);
    }
    
const sawoConfig = {
    onSuccess: sawoLoginCallback, //required,
    identifierType: 'email', //required, must be one of: 'email', 'phone_number_sms',
    apiKey: 'e431edf0-4132-4f5d-9f2f-b2ddd834405e', // required, get it from sawo dev.sawolabs.com,
    containerHeight: '750px', // the login container height, default is 300px
  }

  return (
    <div>
        <SawoLogin config={sawoConfig}/>
    </div>
  );
};

export default Greetings;
