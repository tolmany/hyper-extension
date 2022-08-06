import { useState } from "react";
import axios from "axios";

const RAINFOREST_API_KEY = process.env.RAINFOREST_API_KEY || "07F89F370D484E89BD5EF9985B78EC25";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = async () => {
    try {
      const { data } = await axios.get(
        `https://api.rainforestapi.com/request?api_key=${RAINFOREST_API_KEY}&type=search&amazon_domain=amazon.com&search_term=${searchTerm}&sort_by=price_high_to_low`
      );
      console.log(data);
      setItems(data.search_results);
    } catch (error) {}
  };

  return (
    <div>
      <input
        type={"text"}
        className="w-[420px] text-sm h-9 p-2 border border-gray-300 focus:outline-primary mt-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        required
      />
      <button
        onClick={() => handleSubmit()}
        className={
          (searchTerm.length === 0 ? "bg-gray-500" : "bg-primary") +
          ` w-[420px] h-9 text-white text-sm mt-5`
        }
        disabled={searchTerm.length === 0}
      >
        Search
      </button>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product image</th>
            <th>ASIN</th>
            <th>Amazon Link</th>
            <th>Opportunity Score</th>
            <th>Amazon Buy Box Price</th>
            <th>Average Price</th>
            <th>Monthly Sales</th>
            <th>Monthly Revenue</th>
            <th>FBA fees</th>
            <th>Estimated Profit</th>
            <th>
              Profit Margin percentage(including breakdown…estimated supplier costs, shipping, fba
              fees, etc)
            </th>
            <th>Product Rating</th>
            <th>Total Reviews</th>
            <th>
              Supplier price estimate(SellerApp API response we can parse to average the price
              across sellers)
            </th>
            <th>Alibaba Supplier links for product(SellerApp API will provide this)</th>
            <th>Sales Rank</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.position}</td>
                <td>{item.title}</td>
                <td>
                  <img src={item.image} />
                </td>
                <td>{item.asin}</td>
                <td>
                  <a href={item.link}>link</a>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{item.rating}</td>
                <td>{item.ratings_total}</td>
                <td></td>
                <td></td>
                <td></td>
                <td>{item.categories[0].name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
