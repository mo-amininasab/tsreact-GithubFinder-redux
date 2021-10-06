import React, { useState } from 'react';

// style
import './Search.scss'

interface Props {}

const Search: React.FC<Props> = (props) => {
  const [term, setTerm] = useState<string>('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={term}
          onChange={onChangeHandler}
        />
        <button type="submit">Search</button>
      </form>
      <button className="btn-clear">Clear</button>
    </div>
  );
};

export default Search;
