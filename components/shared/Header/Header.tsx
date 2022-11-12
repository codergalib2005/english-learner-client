import Link from "next/link";

export default function Header() {
    return (
        <div className="header_parent_class">
            This is Header
            <Link className="header_link" href='/numberSignIn/Number'>
                Sign In
            </Link>
        </div>
    )
}