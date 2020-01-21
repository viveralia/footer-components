import React from "react";
import styled from "@emotion/styled";
import footerMenu from "./constants/footerMenu.json";
import MenuFooter from "./components/MenuFooter.js";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const App = () => {
  return (
    <footer>
      <Grid>
        {footerMenu.map(({ title, links }, i) => (
          <MenuFooter key={i} title={title} arrLinks={links} />
        ))}
      </Grid>
    </footer>
  );
};

export default App;
