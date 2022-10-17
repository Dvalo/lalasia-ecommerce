import type { NextPage } from "next";
import Page from "../components/Page";
import ProductListing from "../components/Products/ProductListing";
import { allProducts } from "../mocks/productsMock";

const Products: NextPage = () => {
  return (
    <Page title="Lalasia - Products | Furniture Store">
      <ProductListing slides={allProducts} />
    </Page>
  );
};

export default Products;
