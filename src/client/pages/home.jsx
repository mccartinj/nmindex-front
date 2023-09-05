import * as React from "react";
import { Link } from "wouter";


export default function Home() {

  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    let query = search;
    query = query.replace(' ',' <-> ')
    

    fetch(`/api/search/${query}`)
      .then((response) => response.json())
      .then((data) => {
        let results = JSON.parse(data);
        setSearchResults(results);
        console.log(results);
      })
      
      .catch((error) => console.log(error));
  }

  React.useEffect(()=>{
    console.log('searchResults changed')
  },[searchResults])

  return (
    <>
      <h1>New Models Index</h1>
      <form onSubmit={handleSubmit}>
        <input name="queryString" className="queryString" type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
        <br />
        <button type="submit">Search</button>
      </form>
      
      <ul>
        {searchResults.map((r)=>(<li key={r.page_url}><a href={r.page_url} target="_blank">{r.title}</a></li>))}
      </ul>
      
    </>
  );
}
