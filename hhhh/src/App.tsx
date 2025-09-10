
import { Container, Title, Footer, FooterText, FooterLogo } from './components/StyledComponents';
import CircuitBackground from './components/CircuitBackground';
import Quiz from './components/Quiz';
import { questions } from './questions';
import DEEELogo from './assets/DEEE Logo with WHITE text- (1).png';
import EEESLogo from './assets/EEES Logo White-02.png';


function App() {
  return (
    <>
      <Container>
        <CircuitBackground />
        <Quiz questions={questions} />
      </Container>
      <Footer>
  <FooterLogo src={DEEELogo} alt="Department Logo" style={{ height: '40px', width: 'auto', marginLeft: '0.001vw' }} />
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginLeft: '0vw' }}>
          <FooterText style={{
            color: '#f3f4f6',
            fontWeight: 700,
            textShadow: '0 2px 8px #6366f1cc',
            letterSpacing: '0.5px',
            textAlign: 'center',
          }}>
            Department of Electrical and Electronic Engineering
          </FooterText>
          <span style={{
            fontSize: '1.05rem',
            color: '#c7d2fe',
            fontWeight: 600,
            textShadow: '0 1px 6px #312e81cc',
            letterSpacing: '0.2px',
            textAlign: 'center',
            display: 'block',
          }}>
            University of Peradeniya
          </span>
        </div>
  <FooterLogo src={EEESLogo} alt="Society Logo" style={{ height: '70px', width: 'auto', marginRight: '4vw' }} />
      </Footer>
    </>
  );
}

export default App;
