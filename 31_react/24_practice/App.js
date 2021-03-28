import React from "react";
import Product from "./Product.js";

import vSchoolProducts from "./vschoolProducts";

function App() {
  const productComponents = vSchoolProducts.map((item) => (
    <Product key={item.id} product={item} />
  ));

  return (
    <div>
      {productComponents}
    </div>
  )
}

export default App;
