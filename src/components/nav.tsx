import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex p-5 items-center justify-between fixed w-full bg-slate-950 bg-opacity-50 backdrop-blur-xl z-10">
      <div className="text-3xl font-extrabold">
        <Link href="/">Alpha Orionis</Link>
      </div>
      {/* <ul className="flex items-baseline gap-10">
        <li className="">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul> */}
    </nav>
  );
}
