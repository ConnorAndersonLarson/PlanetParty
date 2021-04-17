import React, { useState } from 'react';

const Edit: React.FC<any> = ({ data }): JSX.Element => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [input, setInput] = useState('');

  return (
    <input
      value={input}
      onChange={event => setInput(event.target.value)}
      placeholder={data}
    />
  )
}

export default Edit;