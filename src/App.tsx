import Calculator from './components/calculator';
import styled from 'styled-components';

const AppContainer = styled.div`
  height: 100vh;
  padding-top: 5px;
  background-color: #1b1b32;
  font-family: Lato, sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <AppContainer >
      <Calculator />
    </AppContainer>
  );
}

export default App;
