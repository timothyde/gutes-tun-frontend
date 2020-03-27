import styled from "styled-components";

const Footer = styled.footer`
  padding: 16px;
  text-align: center;
  width: 100%;
`;

export default () => {
  return (
    <Footer>
      &copy; 2020 tarent Solutions GmbH | Impressum | Presse | AGB
    </Footer>
  );
};
