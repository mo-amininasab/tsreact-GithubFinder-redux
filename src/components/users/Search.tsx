import React, { useState } from 'react';

// redux
import { actionCreators } from '../../redux/index';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';

// style
import './Search.scss';

interface Props {}

const Search: React.FC<Props> = (props) => {
  const [term, setTerm] = useState<string>('');

  const dispatch = useDispatch();
  const users = useTypedSelector((state) => state.githubReducer.data);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(actionCreators.searchUsers(term));
  };

  const onClearHandler = () => {
    dispatch(actionCreators.clearUsers());
    setTerm('');
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
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
      {users.total_count > 0 && (
        <button onClick={onClearHandler} className="btn-clear">
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
