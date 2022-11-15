import Link from "next/link";
import { useRouter } from "next/router";
import { tabs } from "../../../fakeData/tabs";

export default function InformationTabs() {
  const router = useRouter();
  const active = router.query.tabs;
  return (
    <div className="information_tabs">
      {tabs.map((tab) => (
        <Link href={`/?tabs=${tab}`} key={tab}>
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
}
