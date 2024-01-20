import { Container, LoadingContainer, LoadingDot } from "../styles/LoadingIndicator";


const LoadingIndicator = () => {
  return (
    <Container>
      <LoadingContainer>
        <LoadingDot />
        <LoadingDot />
        <LoadingDot />
        <LoadingDot />
      </LoadingContainer>
    </Container>
  );
};

export default LoadingIndicator;
