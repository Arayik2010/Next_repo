import Link from 'next/link';

export default function Navigation() {
    return (
        <div>
            <Link href="/posts/first-post">About Us</Link>
            <Link href="/posts/second-post">first post</Link>
        </div>

    )
}