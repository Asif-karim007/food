// import axios from "axios";
// import { useEffect , useState} from "react";
// // import yelp from "../api/yelp";

// export default () => {
// const [results, setResults] = useState([]);
// const [errorMessage, setErrorMessage] = useState("");

// const searchApi = (searchTerm) => {
//     console.log("Hello there I'm fetching data...")
//     axios.get("https://catalog-reader.dhamakashopping.com/api/campaigns").then(response => {
//         console.log('Fetching data...');
//         setResults(response.data);
//         console.log(response.data);
//     }).catch(err => console.log(err));
//     console.log('hei', results);
// };
// //postman kivabe use korte hoy
// //call search api when componet is first rendered

// // searchApi("pasta")
// // useEffect(() => {
// // searchApi("pasta");
// // },[]);

// return [searchApi, results, errorMessage]

// };



import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async searchTerm => {
    console.log("Hi!");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });
      setResults(response.data.businesses);
      console.log(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
    
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};