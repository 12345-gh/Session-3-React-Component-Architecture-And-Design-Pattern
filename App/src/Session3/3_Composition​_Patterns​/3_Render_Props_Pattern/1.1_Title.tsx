

/*
  In the section on Higher Order Components, we saw that being able to reuse component logic 
can be very convenient if multiple components need access to the same data, or contain the same logic.

  Another way of making components very reusable, is by using the render prop pattern. 
A render prop is a prop on a component, which value is a function that returns a JSX element. 
The component itself does not render anything besides the render prop. 
Instead, the component simply calls the render prop, instead of implementing its own rendering logic.
*/

import React, { ReactNode } from "react";

interface TitleProps {
  render: () => ReactNode;
}

export const Title: React.FC<TitleProps> = (props) => props.render();

//Option 1
{/* <div className="App">
  <Title
    render={() => (
      <h1>
        <span role="img" aria-label="emoji">
          ✨
        </span>
        I am a render prop!{" "}
        <span role="img" aria-label="emoji">
          ✨
        </span>
      </h1>
    )}
  />
</div>; */}

//Option 2
{/* <div className="App">
  <Title render={() => <h1>✨ First render prop! ✨</h1>} />
  <Title render={() => <h2>🔥 Second render prop! 🔥</h2>} />
  <Title render={() => <h3>🚀 Third render prop! 🚀</h3>} />
</div> */}

// ===============================================

interface ThreeTitleProps {
  renderFirstComponent: () => ReactNode;
  renderSecondComponent: () => ReactNode;
  renderThirdComponent: () => ReactNode;
}

export const ThreeTitle: React.FC<ThreeTitleProps> = (props) => (
  <>
    {props.renderFirstComponent()}
    {props.renderSecondComponent()}
    {props.renderThirdComponent()}
  </>
);

//Option 1
{/* <div className="App">
  <ThreeTitle
    renderFirstComponent={() => <h1>✨ First render prop! ✨</h1>}
    renderSecondComponent={() => <h2>🔥 Second render prop! 🔥</h2>}
    renderThirdComponent={() => <h3>🚀 Third render prop! 🚀</h3>}
  />
</div> */}

