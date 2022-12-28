import React, { useEffect, useState } from "react";
import { axiosInstance } from "./axiosInstance/index";
import BasicModal from "./components/BasicModal";
import ProductTable from "./components/ProductTable";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("suppliers");
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <BasicModal getData={getData} />
      <ProductTable
        data={data}
        loading={loading}
        error={error}
        getData={getData}
      />
    </>
  );
};

export default App;