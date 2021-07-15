import { useState } from "react";
import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add, selectedProduct, setProducts } from "../redux/actions/productsActions";

const Add = () => {
  const [product, setproduct] = useState([{id:'',category:'',description:'',image:'',price:'',title:''}]);

const dispatch=useDispatch()
    const handleSubmit = e => {
      e.preventDefault();
      console.log({product})
      axios.post("https://fakestoreapi.com/products",product).then(response=>dispatch(setProducts(response.data)))
    setproduct([])
    };
    const handleChange = e =>
      setproduct({ id: Math.random(), [e.target.name]: e.target.value });
    return (
      
      <div >
        <form onSubmit={handleSubmit} className="a">
        category   <input type="text" name="category"  onChange={handleChange} />
        description  <input type="text" name="description"  onChange={handleChange} />
        image   <input type="text" name="image"  onChange={handleChange} />
        price  <input type="text" name="price"  onChange={handleChange} />
        title <input type="text" name="title"   onChange={handleChange} />

          <button type="submit">Add</button>
        </form>     
      </div>
    );
   };
   export default Add;