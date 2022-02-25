import { Container, Row } from 'reactstrap';
import { useModal } from 'src/providers/hooks/context';
import { Routes } from './routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  const { modal } = useModal();
  const someModalIsActive = Object.values(modal).some(item => item.isOpen);

  return (
    <Container>
      <Routes>
        <GlobalStyles modalIsActive={someModalIsActive} />
      </Routes>
    </Container>
  );
};
export default App;
