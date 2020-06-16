import React from "react";

import {
  Cards,
  CountryPicker,
  Chart,
  Tile,
  Manifesto,
  Questions,
} from "./components";
import { fetchData } from "./api/";
import styles from "./App.module.css";

import { ReactComponent as Logo } from "./images/Corona-Logo.svg";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Logo className="logo" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <h1>
          Who are affected by this virus? <br />{" "}
          <span role="img" aria-label="meter">
            🤒
          </span>{" "}
        </h1>
        <Tile />
        <Manifesto />
        <Questions />
        <footer>
          <p>
            Overview Prevention Symptoms <br />
            <a
              href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#008DC9" }}
            >
              <span role="img" aria-label="world">
                WHO🌍
              </span>
            </a>
          </p>
          <hr />
          <p>
            Designed & Built with{" "}
            <span role="img" aria-label="heart">
              💛
            </span>{" "}
            by
            <a
              href="https://github.com/kaustubh2020/corona-tracker"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f13043" }}
            >
              {" "}
              Kaustubh Jaiswal
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
