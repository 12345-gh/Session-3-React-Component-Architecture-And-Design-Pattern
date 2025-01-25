import './App.css'
import { Notes, Controlled, Fahrenheit, Fahrenheit2, GeolocationContainer, HOCComponent, Input, Input2, Kelvin, Kelvin2, SearchInput, SearchInput2, StarWarsPeople, TabsContainer, ThreeTitle, Title, Uncontrolled, Uncontrolled2, Uncontrolled3, ToDo } from '@examples/index.ts';
function App() {

  return (
    <>
      {/* <div>
        <GeolocationContainer />
      </div> */}

      {/* <div>
        <StarWarsPeople />
      </div> */}

      {/* <div>
        <HOCComponent />
      </div> */}

      {/* <div>
        <div>
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
        </div>
        <div className="App">
          <Title render={() => <h1>✨ First render prop! ✨</h1>} />
          <Title render={() => <h2>🔥 Second render prop! 🔥</h2>} />
          <Title render={() => <h3>🚀 Third render prop! 🚀</h3>} />
        </div>
        <div className="App">
          <ThreeTitle
            renderFirstComponent={() => <h1>✨ First render prop! ✨</h1>}
            renderSecondComponent={() => <h2>🔥 Second render prop! 🔥</h2>}
            renderThirdComponent={() => <h3>🚀 Third render prop! 🚀</h3>}
          />
        </div>
      </div> */}

      {/* <div className="App">
        <h1>☃️ Temperature Converter 🌞</h1>
        <Input
          render={(value) => (
            <>
              <Kelvin value={value} />
              <Fahrenheit value={value} />
            </>
          )}
        />
      </div> */}

      {/* <div className="App">
        <h1>☃️ Temperature Converter 🌞</h1>
        <Input2>
          {(value) => (
            <>
              <Kelvin2 value={value} />
              <Fahrenheit2 value={value} />
            </>
          )}
        </Input2>
      </div> */}

      {/* <div>
        <TabsContainer />
      </div> */}

      {/* <div>
        <SearchInput />
      </div> */}

      {/* <div>
        <SearchInput2 />
      </div> */}

      {/* <div>
        <span>Controlled: </span>
        <Controlled />
      </div>

      <div>
        <span>Uncontrolled: </span>
        <Uncontrolled />
      </div>

      <div>
        <span>Uncontrolled2: </span>
        <Uncontrolled2 />
      </div>

      <div>
        <span>Uncontrolled3: </span>
        <Uncontrolled3 />
      </div> */}

      {/* <div>
        <Notes />
      </div> */}

      {/* <div>
        <ToDo />
      </div> */}
    </>
  )
}

export default App
