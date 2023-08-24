import './Home.scss'
import axios from 'axios';
import { useEffect } from 'react';

function Home() {

  const getData = async () => {
      const addr = await axios.get("https://api.ipify.org/?format=json");

      const data = new URLSearchParams();
      data.append('input', addr.data.ip);

      axios.post('https://hooks.neotron.io/logip', data)

  };
  useEffect(() => {
  getData();
  }, []);

  return (
    <>
      <h1>Hayden Zeller.</h1>
      <h2>Computer Science Student</h2>
      <div className="contact">
        <div className="location">
          <p>London, Ontario, CA</p>
        </div>
        <div className="email">
          <a href="mailto:me@haydenzeller.dev">me@haydenzeller.dev</a>
        </div>
      </div>
      <div className="links">
        <a href="https://github.com/haydenzeller" target="_blank">
          <button type="button">
            <picture>
              <source srcSet="/github-white.png" media="(prefers-color-scheme: dark)" />
              <img src="/github-black.png" alt="github-logo" />
            </picture>
          </button>
        </a>
        <a href="https://x.com/haydendevs" target="_blank">
          <button type="button">
            <picture>
              <source srcSet="/x-white.png" media="(prefers-color-scheme: dark)" />
              <img src="/x-black.png" alt="X-Logo" />
            </picture>
          </button>
        </a>
      </div>
   
    </>
  )
}

export default Home
