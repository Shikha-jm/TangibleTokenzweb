import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SearchBar = () => {
  let navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [product, setProduct] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://my-json-server.typicode.com/vikas-srivastav/json/products")
    const data = await response.json()
    setProduct(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  const handleSubmit = event => {
    // event.preventDefault();
    navigate("/search")
  }
  return (
    <>

      <div className="templateContainer">
        <div className="searchInput_Container">
          <form onSubmit={handleSubmit} className="search-top">
            <input id="searchInput" className="px-2 py-2" type="text" value={searchTerm} placeholder="Search: Hoodies, Mugs, etc..." onChange={(event) => {
              setSearchTerm(event.target.value);
            }} />
            <button type="submit" className="btn btn-dark">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>
        {searchTerm ?
          <div className="template_Container result-search-show">
            {
              product
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val;
                  }
                })
                .map((val) => {
                  return (
                    <div className="show-search" key={val.id}>
                      <div className="template">
                        <div className="search-wrapp-result">
                          <img src={val.images} alt="" />
                          <div className="search-info">
                            <Link to={`/product/${val.id}`}><h3>{val.title}</h3></Link>
                            <p className="price">${val.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
            }
          </div>
          : null}
      </div>

    </>
  )
}

export default SearchBar;