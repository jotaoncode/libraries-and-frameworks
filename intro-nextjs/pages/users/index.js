import Link from 'next/link'

export default function Users () {
    return (
        <div>
            <h2>Users</h2>
            <Link href="/users/1">User detail</Link>
            <br />
            <Link href="/">Home</Link>
        </div>
    )
} 