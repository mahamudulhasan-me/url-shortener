import { useEffect, useState } from "react";
import shortid from "shortid";

const GenerateURL = () => {
  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [linkHistory, setLinkHistory] = useState([]);

  useEffect(() => {
    const storedURLHistory = localStorage.getItem("linkHistory");

    if (storedURLHistory) {
      setLinkHistory(JSON.parse(storedURLHistory));
    }
  }, []);

  const updateLinkHistory = (newLink) => {
    const updatedHistory = [...linkHistory, newLink];
    setLinkHistory(updatedHistory);
    localStorage.setItem("linkHistory", JSON.stringify(updatedHistory));
  };

  const shortenLink = () => {
    if (longURL) {
      const uniqueId = shortid.generate();
      const shortUniqueId = uniqueId.slice(0, 5);
      const shortenedLink = `https://maha.me/${shortUniqueId}`;
      setShortURL(shortenedLink);
      const newLink = { longURL, shortURL: shortenedLink };
      updateLinkHistory(newLink);
      setLongURL("");
      setShortURL("");
    }
  };

  return (
    <div className="bg-white  border-x border-b -mt-2 py-4 px-8 w-full">
      <h2 className="font-semibold text-3xl text-gray-700 text-center my-5">
        Paste the URL to be shortened
      </h2>

      <div className="flex justify-between items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-md">
        <input
          type="url"
          name="url"
          id="url"
          value={longURL}
          placeholder="Example: http://super-long-link.com/shorten-it"
          className="w-4/5 border h-14 rounded-l-md px-2 text-xl  outline-blue-600 transition-all focus:duration-300"
          onChange={(e) => setLongURL(e.target.value)}
        />
        <button
          onClick={shortenLink}
          type="submit"
          className="bg-blue-700 font-semibold w-1/5 h-12  rounded-r-md ring text-white"
        >
          Shorten URL
        </button>
      </div>
      <p className="text-center mt-3 text-gray-600">
        ShortURL is a free tool to shorten URLs and generate short links <br />
        URL shortener allows creating a shortened link making it easy to share
      </p>
      <div>
        {linkHistory.map((link, index) => (
          <div key={index}>
            <p className="flex justify-between items-center border mb-5 p-4 rounded-md mt-5 font-medium text-gray-600 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] ">
              <span>{link?.longURL?.slice(0, 30)}...</span>{" "}
              <a
                href={`${link?.longURL}`}
                target="_blank"
                rel="noreferrer"
                className="hover:underline hover:text-blue-600 hover:transition-all"
              >
                {link.shortURL}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerateURL;
