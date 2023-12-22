import { useSelector } from 'react-redux';
import { getError } from '../../redux/selectors';
import { ErrorStyled } from '../App/App.styled';

export const Error = () => {
  const error = useSelector(getError);

  return (
    <ErrorStyled>
      <p>Sorry... {error}</p>
    </ErrorStyled>
  );
};
