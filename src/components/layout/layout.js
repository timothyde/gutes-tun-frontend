import { useRouter } from "next/router";
import { Layout, Breadcrumb } from "antd";
import stylesheet from "antd/dist/antd.min.css";

import Header from "./header";
import Footer from "./footer";

const getBreadcrumb = path => {
  switch (path) {
    case "/requests":
      return "Vergangene Gesuche";
    case "/new":
      return "Neues Gesuch aufgeben";
    case "/faq":
      return "FAQ";
    default:
      return "Aktuelle Gesuche";
  }
};

export default ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Layout>
          <Layout
            style={{
              padding: "0 24px 24px",
              minHeight: "calc(100vh - 64px)"
            }}
          >
            <Breadcrumb style={{ margin: "12px 0" }}>
              <Breadcrumb.Item>GutesTun</Breadcrumb.Item>
              <Breadcrumb.Item>
                {getBreadcrumb(router.pathname)}
              </Breadcrumb.Item>
            </Breadcrumb>
            {children}
          </Layout>
        </Layout>
        <Footer />
      </Layout>
    </>
  );
};
