import Link from "next/link";

export default function TOC() {
  return (
    <div>
      <h4>Shelly Xu</h4>
      <ul>
        <li>
          <Link href="/labs">Home</Link>
        </li>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>
        <li>
          <Link href="/labs/lab4">Lab 4</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
        <li>
          <a
            href="https://webdev-client.vercel.app/book/ch1"
            id="wd-toc-book-link"
          >
            Chapter 1
          </a>
        </li>
        <li>
          <Link href="/account/signin">Kambaz</Link>
        </li>
      </ul>
    </div>
  );
}
