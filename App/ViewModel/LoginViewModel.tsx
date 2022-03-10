import React, {useState} from 'react';
import {ValidateEmail, ValidatePaassword} from '../Config/Validation';
import LoginScreen from '../View/Auth/LoginScreen';

interface inputProps {
  navigation: any;
}

const LoginViewModal = (props: inputProps) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [hasErrorEmail, setErrorEmail] = useState(false);
  const [hasErrorPass, setErrorPass] = useState(false);
  const [errorMsg, setMsg] = useState('');

  const {navigation} = props;

  // useRef to be used to store the response from as the ref will work faster
  const onSubmit = () => {
    let isEmail = ValidateEmail(email);
    let isPass = ValidatePaassword(pass);

    if (isEmail) {
      setMsg('');

      if (isPass) {
        setMsg('');
        navigation.navigate('Category');
      } else {
        setErrorPass(true);
        setMsg('Invalid password');
      }
    } else {
      setErrorEmail(true);
      setErrorPass(false);
      setMsg('Invalid Email');
    }
  };

  const newProps = {
    navigation,
    hasErrorPass,
    setErrorPass,
    hasErrorEmail,
    setErrorEmail,
    errorMsg,
    setMsg,
    onSubmit,
    email,
    pass,
    setEmail,
    setPass,
  };

  return <LoginScreen {...newProps} />;
};

export default LoginViewModal;
