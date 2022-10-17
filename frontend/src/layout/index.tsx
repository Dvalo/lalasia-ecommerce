import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

interface IProps {
  children: ReactNode;
}

const PageLayout = ({ children }: IProps) => {
  return (
    <div className="l-page">
      <Header />
      <main className="l-main">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
