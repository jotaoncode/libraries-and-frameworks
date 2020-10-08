import Link from 'next/link'

export default function Schools ({
    schools
}) {
    console.log(schools)
    return (
        <div>
            <h2>Schools</h2>
            {
                schools.map((school, id) => (
                    <div key={id}>
                        <Link href={`/schools/${id}`}>
                            <p>
                                {school.name} detail
                            </p>
                        </Link>
                        <br />
                    </div>
                ))
            }
            <Link href="/">Home</Link>
        </div>
    )
}

export async function getServerSideProps() {
    const schools = await Promise.resolve([{
        name: 'School 1'
    }, {
        name: 'School 2'
    }, {
        name: 'School 3'
    },])
    return  {
        props: {
            schools
        }
    }
}