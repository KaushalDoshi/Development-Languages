import React from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

/**
 * Our data
 * ------------------------
 */
const user = {
  name: 'Chris on Code',
  location: 'Las Vegas',
  foodType: 'Everything',
  age: 28,
  likes: 'Coding into the wee hours of the morning',
  twitterUsername: 'chrisoncode',
  avatar:
    'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  const url =  `https://twitter.com/${user.twitterUsername}`;
  return (
    <div className="App">
      {/* Show user data here */}
      <div className="user-deets">
        <img src={user.avatar} alt={user.name} />
        <h3>
          <a href={url}>{user.name}</a>
          </h3>
          <p>
            <strong>Location</strong>{user.location}
          </p>
          <p>
            <strong>Eats</strong> {user.foodType}
            </p>
          <p>
            <strong>Age</strong> {user.age}
          </p>  
          <p>
            <strong>Likes</strong>{user.likes}
          </p>
          <p>
            <strong>Twitter</strong>{''}
            <a href={url}>@{user.twitterUsername}</a>
            </p>
      </div>

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
