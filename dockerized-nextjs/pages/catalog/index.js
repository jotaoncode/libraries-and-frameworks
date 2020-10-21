import Link from 'next/link'

export default function Users () {
    return (
        <div>
            <h2>Catalog</h2>
            <Link href="/catalog/1">Book Detail</Link>
            <br />
            <Link href="/">Home</Link>
        </div>
    )
} 