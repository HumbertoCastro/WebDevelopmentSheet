import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import svgs from '../../Helpers/svg';
import './CodeBlock.css'

const CodeBlock = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="code-block">
      <button onClick={copyCodeToClipboard} className='colunm copy-btn'>
        {copied ? <div className='row'>{ svgs.copycheck() }<p>Copied !</p> </div> : 
        <div className='row'>{ svgs.copy() }<p>Copy Code</p> </div>}
      </button>
      <SyntaxHighlighter language={language} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
