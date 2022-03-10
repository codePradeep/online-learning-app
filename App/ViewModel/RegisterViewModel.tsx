import React, {useState} from 'react';
import {
  ValidateEmail,
  ValidatePaassword,
  ValidateuserName,
} from '../Config/Validation';
import RegisterScreen from '../View/Auth/RegisterScreen';

interface inputProps {
  navigation: any;
}

const RegisterViewModal = (props: inputProps) => {
  const [selected, setSelected] = useState(0);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [hasErrorUser, setUsername] = useState(false);
  const [hasErroEmail, setErrorEmail] = useState(false);
  const [hasPass, setErrorPass] = useState(false);
  const [errormsg, setMsg] = useState('');

  const {navigation} = props;

  const handleSignup = () => {
    let userResp = ValidateuserName(user);
    let emailResp = ValidateEmail(email);
    let passResp = ValidatePaassword(pass);

    if (userResp) {
      if (emailResp) {
        if (passResp) {
          navigation.navigate('Category');
        } else {
          setErrorPass(true);
          setMsg('Invalid password');
        }
      } else {
        setErrorEmail(true);
        setMsg('Invalid email');
      }
    } else {
      setUsername(true);
      setErrorEmail(false);
      setErrorPass(false);
      setMsg('Invalid username');
    }
  };

  const newProps = {
    navigation,
    selected,
    setSelected,
    setErrorPass,
    user,
    setUser,
    email,
    setEmail,
    pass,
    hasErrorUser,
    setUsername,
    hasErroEmail,
    setErrorEmail,
    hasPass,
    setPass,
    errormsg,
    setMsg,
    handleSignup,
  };

  return <RegisterScreen {...newProps} />;
};

export default RegisterViewModal;
