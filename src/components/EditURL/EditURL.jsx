import { useState } from "react";
import { MdClose } from "react-icons/md";

const EditURL = () => {
  const [linkHistory, setLinkHistory] = useState(
    JSON.parse(localStorage.getItem("linkHistory")) || []
  );

  const handleRemove = (index) => {
    // Create a copy of the linkHistory array
    const updatedLinkHistory = [...linkHistory];

    // Remove the item at the specified index
    updatedLinkHistory.splice(index, 1);

    // Update the linkHistory in state
    setLinkHistory(updatedLinkHistory);

    // Update the linkHistory in localStorage
    localStorage.setItem("linkHistory", JSON.stringify(updatedLinkHistory));
  };

  return (
    <div className="bg-white border-x border-b -mt-2 py-4 px-8 w-full">
      <h2 className="font-semibold text-3xl text-gray-700 text-center my-5">
        Edit URL
      </h2>
      <div>
        {linkHistory.map((link, index) => (
          <div key={index}>
            <p className="flex justify-between items-center border mb-5 p-4 rounded-md mt-5 font-medium text-gray-600 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] ">
              <span>{link?.longURL?.slice(0, 30)}...</span>
              <span className="cursor-pointer flex items-center gap-2">
                <a
                  href={`${link?.longURL}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline hover:text-blue-600 hover:transition-all"
                >
                  {link.shortURL}
                </a>
                <MdClose
                  size={24}
                  color="#FF1F1F"
                  onClick={() => handleRemove(index)}
                />
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditURL;
