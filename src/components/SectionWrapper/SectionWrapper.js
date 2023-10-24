import { Wrapper } from './SectionWrapper.styled';

export const SectionWrapper = ({ title, children }) => {
  return (
    <Wrapper title={title}>
      <h2>{title}</h2>
      {children}
    </Wrapper>
  );
};
