import Textfield from "@mui/material/TextField";
import { useRef } from "react";

const App = () => {
  const inputEl = useRef();
  const handleClick = () => {
    // find existing value's length
    const len = inputEl.current.value?.length;
    // update the new value
    inputEl.current.value = inputEl.current.value + " New value";
    // Select the old value from srart
    inputEl.current.setSelectionRange(0, len);
    // Focus the input
    inputEl.current.focus();
  };
  return (
    <div>
      <div>App</div>
      <Textfield inputRef={inputEl} multiline minRows={5} />
      <button onClick={handleClick}>Suggest prompt</button>
    </div>
  );
};

export default App;
