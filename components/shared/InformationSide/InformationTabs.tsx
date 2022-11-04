import Link from "next/link";
import { tabs } from "../../../fakeData/tabs";

export default function InformationTabs() {
  const active = "all";
  return (
    <div className="information_tabs">
      {tabs.map((tab) => (
        <Link href={`/?tabs=${tab}`} key={tab}>
          <button
            className={
              active.toLocaleLowerCase() === tab.toLocaleLowerCase()
                ? "active_tab_btn"
                : "tab_btn"
            }
          >
            {tab}
          </button>
        </Link>
      ))}
    </div>
  );
}
