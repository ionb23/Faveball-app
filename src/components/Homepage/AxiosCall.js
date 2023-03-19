import axios from "axios";
import { useState, useEffect } from "react";
import HomeNewsCard from '../HomeNewsCard/HomeNewsCard'

function GenerateNews({temaName}) {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://bing-news-search1.p.rapidapi.com/news/search",
          {
            params: {
              q: `${teamName} football`,
              setLang: "en",
              freshness: "Month",
              textFormat: "Raw",
              safeSearch: "Moderate"
            },
            headers: {
              "X-BingApis-SDK": "true",
              "X-RapidAPI-Key":
                "f72b817560msh85096028e95a534p1b3f97jsn0259ea03ef55",
              "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com"
            }
          }
        );
        if (response.data.value.length > 0) {
          setNewsData(response.data.value);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="d-flex  mt-5 container-fluid justify-content-center align-items-center flex-wrap">
      {newsData.map((news) => (
        <HomeNewsCard
          key={news.url}
          url={news.image?.thumbnail?.contentUrl}
          title={news.name}
          snippet={news.description}
        />
      ))}
    </div>
  );
}

export default GenerateNews;
