import { FirmFacts } from './components/FirmFacts';
import { FirmFactCard } from './components/FirmFactCard';
import { Button } from './components/Button';
import './styles/App.scss';
import CloseImg from './assets/close_icon.svg';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className="app">
      <img src={CloseImg} alt="Close Icon" className="close-button" />
      <h2 className="title">Firm Facts</h2>
      <FirmFacts>
        <FirmFactCard>
          <Button iconName={faSearch} variant="icon">
            This is a two line button that terminates with making this text
            larger to test elipsis
          </Button>
        </FirmFactCard>
        <FirmFactCard>
          <Button iconName={faSearch} variant="icon">
            This is a two line button that terminates with making this text
            larger to test elipsis
          </Button>
        </FirmFactCard>
        <FirmFactCard>
          <Button>This is a one line button</Button>
        </FirmFactCard>
        <FirmFactCard>
          <Button iconName={faSearch} variant="icon">
            This is a two line button that terminates with making this text
            larger to test elipsis
          </Button>
        </FirmFactCard>
        <FirmFactCard variant="border">
          <Button iconName={faSearch} variant="icon">
            This is a two line button that terminates with making this text
            larger to test elipsis
          </Button>
        </FirmFactCard>
        <FirmFactCard variant="border">
          <Button iconName={faSearch} variant="icon" disabled>
            This is a two line button that terminates with making this text
            larger to test elipsis
          </Button>
        </FirmFactCard>
        <FirmFactCard variant="border">
          <Button iconName={faSearch} variant="icon">
            This is a two line button that terminates with making this text
            larger to test elipsis
          </Button>
        </FirmFactCard>
      </FirmFacts>
    </div>
  );
};

export default App;
