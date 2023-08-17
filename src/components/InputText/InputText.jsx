import { useState } from "react";
import Input from "../Input/Input";
import Text from "../Text/Text";

const InputText = () => {
  const [text, setText] = useState('')
  const changeHandler = (textValue)=> setText(textValue)
  return (
    <>
    <br />
      <Input  changeHandler={changeHandler}/>
      <Text message={text}/>
    </>
  );  
};
export default InputText;
