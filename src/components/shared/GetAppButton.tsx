import Link from 'next/link'

type props = {
    name: string,
    url: string
}

const GetAppButton = ({ name, url }: props) => {
    return(
        <button className={"border-[1px] border-white p-3 text-2xl rounded-[156px] lg:text-5xl"}>
            <Link href={url}>
                {name}
                </Link>
        </button>
    )
}

export default GetAppButton;