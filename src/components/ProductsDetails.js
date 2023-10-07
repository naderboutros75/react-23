import { useParams } from "react-router-dom";

export function ProductsDetails() {
  const params = useParams();

  return (
    <>
      <h1>Products Details</h1>
      <p>The product ID is {params.id}</p>
    </>
  );
}
