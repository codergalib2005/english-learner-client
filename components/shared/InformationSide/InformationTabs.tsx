import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { tabs } from "../../../fakeData/tabs";

const InformationTabs: React.FC = () => {
  const router = useRouter();
  const active = router.query.tabs;
  return (
    <div className="information_tabs">
      {tabs.map((tab, index) => (
        <Link href={`/?tabs=${tab}`} key={index}>
          <button
            className={
              active === tab.toLocaleLowerCase() ? "active_tab_btn" : "tab_btn"
            }
          >
            {tab}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default InformationTabs;
