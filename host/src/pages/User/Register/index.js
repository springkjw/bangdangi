import React, {useState} from 'react';
import View from './view';

export default () => {
  const [type, setType] = useState(null);

  const [step, setStep] = useState(0);
  const [phone, setPhone] = useState('');
  const [disable, setDisable] = useState(true);

  const onChangePhone = e => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    if (value !== null || value !== undefined) {
      setPhone(value);

      if (value.length > 8) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }
  };

  const onCertificate = () => {
    setStep(1);
  };

  const onChangeValidate = () => {

  };

  return (
    <View
      type={type}
      phone={phone}
      disable={disable}
      step={step}
      onChangePhone={onChangePhone}
      onCertificate={onCertificate}
      onChangeValidate={onChangeValidate}
    />
  );
};
