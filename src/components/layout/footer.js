import Link from "next/link";
import styled from "styled-components";

const Footer = styled.footer`
  padding: 16px;
  text-align: center;
  width: 100%;
`;

export default () => {
  return (
    <Footer>
      &copy; 2020 tarent Solutions GmbH |{" "}
      <Link href="/impressum">
        <a>Impressum</a>
      </Link>{" "}
      |{" "}
      <Link href="/presse">
        <a>Presse</a>
      </Link>
    </Footer>
  );
};
