import { FaEdit, FaLink, FaListUl } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EditURL from "./EditURL/EditURL";
import GenerateURL from "./GenerateURL/GenerateURL";
import LinkList from "./LinkList/LinkList";
const Main = () => {
  return (
    <div className=" w-1/2  mx-auto  py-10">
      <div>
        <h2 className="text-4xl font-bold text-blue-700 text-center uppercase">
          URl Shortener
        </h2>

        <div className="mt-10 w-full">
          <Tabs>
            <TabList>
              <Tab>
                <span className="font-semibold text-lg flex items-center gap-2 text-gray-800">
                  <FaLink /> Generate Short URL
                </span>
              </Tab>
              <Tab>
                <span className="font-semibold text-lg flex items-center gap-2 text-gray-800">
                  <FaEdit /> Edit URL
                </span>
              </Tab>
              <Tab>
                <span className="font-semibold text-lg flex items-center gap-2 text-gray-800">
                  <FaListUl /> Link List
                </span>
              </Tab>
            </TabList>

            <TabPanel>
              <GenerateURL />
            </TabPanel>
            <TabPanel>
              <EditURL />
            </TabPanel>
            <TabPanel>
              <LinkList />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Main;
