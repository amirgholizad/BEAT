import { useEffect, useRef } from "react";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import "highlight.js/styles/github.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);

const CodeBlock = ({ code, language }) => {
  const codeRef = useRef(null);
  const languageRef = language ? `${language}` : "javascript";

  useEffect(() => {
    if ((codeRef.current, languageRef.current)) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]); // Runs again when `code` updates

  return (
    <pre>
      <code ref={codeRef} className={languageRef}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
