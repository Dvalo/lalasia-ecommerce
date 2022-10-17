import Head from "next/head";
import { ReactElement } from "react";

interface IProps {
  title: string;
  children: ReactElement[] | ReactElement;
}

const Page = ({ title, children }: IProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </>
  );
};

export default Page;
