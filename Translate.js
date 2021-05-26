import translate from "translate";
import { useState, useEffect } from 'react';


function Translate(props) {
  const [translatedText, setTranslatedText] = useState('');

  useEffect( async ()=>{
    const text = await translate(props.text, { to: props.language, engine: "<your preferred engine here>", key: "<your Key here>" });
    setTranslatedText(text);
  });

  return (
    <>
        {translatedText}
    </>
  );
}

export default Translate;
