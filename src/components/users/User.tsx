import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

// redux
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { userActionCreators } from '../../redux';

// redux
import './User.scss';

interface MatchParams {
  login: string;
}
interface Props extends RouteComponentProps<MatchParams> {}

const User: React.FC<Props> = ({ match }) => {
  const dispatch = useDispatch();
  const { data, error, loading } = useTypedSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(userActionCreators.getUser(match.params.login));
    
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="mb-24">
        <Link to="/" className="btn btn-light mr-8">
          Back To Search
        </Link>
        Hireable:{' '}
        {data?.hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
      </div>
      <div className="user-card">
        <div className="all-center">
          <img src={data?.avatar_url} alt="" className="img-round"/>
          <h1>{data?.name}</h1>
          <p>Location: {data?.location}</p>
        </div>
        <div>
          {data?.bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{data.bio}</p>
            </Fragment>
          )}
          <a href={data?.html_url} target="_blank" rel="noreferrer">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {data?.login && (
                <Fragment>
                  <strong>Username: </strong> {data?.login}
                </Fragment>
              )}
            </li>
            <li>
              {data?.company && (
                <Fragment>
                  <strong>Company: </strong> {data?.company}
                </Fragment>
              )}
            </li>
            <li>
              {data?.blog && (
                <Fragment>
                  <strong>Website: </strong> {data?.blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {data?.followers}</div>
        <div className="badge badge-success">Following: {data?.following}</div>
        <div className="badge badge-white">
          Public Repos: {data?.public_repos}
        </div>
        <div className="badge badge-dark">
          Public Gists: {data?.public_gists}
        </div>
      </div>
      {/* <Repos repos={repos} /> */}
    </div>
  );
};

export default User;
