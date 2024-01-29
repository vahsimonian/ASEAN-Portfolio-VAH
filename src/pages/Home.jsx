import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <div>
        <h1>
          I'm <span className="home-span">Vah</span>
        </h1>
        {/* <img src="" alt="" /> */}
      </div>
      <p>
        An Armenian, living in <span className="home-span">Cambodia</span>,
        exploring the most interesting part of my life in{' '}
        <span className="home-span">South-East Asian</span>
        countries.
      </p>
      <p>
        My journey's beginning in Asia started in the beginning of{' '}
        <span className="home-span">2018</span>{' '}
      </p>
      <h4>
        First country was <span className="home-span"> China, Shanghai</span>{' '}
      </h4>
    </div>
  );
};

export default Home;
