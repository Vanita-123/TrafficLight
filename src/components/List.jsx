import { useEffect, useState } from "react";
import axios from 'axios';

function List() {
  const [list, setList] = useState('');
  const [products, setProducts] = useState([]);

  const handleData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products); 

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  const handleChange = (e) => {
    setList(e.target.value);
  };

  return (
    <div>
      <h1>List</h1>
      <div>
        <input value={list} onChange={handleChange} type="text" placeholder="search" />
      </div>
      <div>
        {products.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    </div>
  );
}

export default List;
