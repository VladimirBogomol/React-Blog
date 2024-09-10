import { useState } from "react";
import BlogList from "./BlogList.js";
import useFetch from './useFetch.js';

function Home() {

  const [updateFlag, setUpdateFlag] = useState(false);
  const {data, isLoading, error} = useFetch("http://localhost:8000/posts", updateFlag);

    return (
      <div className="home">
        {error && <div>{error}</div>}
        {isLoading && <h2>Loading...</h2>}
        {data && <BlogList posts={data} updateFlag={updateFlag} setUpdateFlag={setUpdateFlag}/>}
      </div>
    );
}

export default Home;


