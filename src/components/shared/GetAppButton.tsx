import Link from 'next/link'

type props = {
    name: string,
    url: string
}

const GetAppButton = ({ name, url }: props) => {
    return(
        <button className={"border-[1px] border-white p-3 px-10 text-[20px] rounded-[156px]"}>
            <Link href={url}>
                {name}
                </Link>
        </button>
    )
}

export default GetAppButton;