import Link from "next/link";
import InformationTabs from "./InformationTabs";
import {ImHome} from "react-icons/im";

export default function InformationSide() {

    return (
        <div className="information_sidebar">
            <Link className="information_link" href="/">
            <button className="information_btn">
                <ImHome />
                <span>Home</span>
            </button>
            </Link>
            <hr />
            <InformationTabs />
        </div>
    )
}