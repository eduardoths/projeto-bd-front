import Link from "next/link";

export default function Board({name, id}) {
    return (
        <Link href={`/boards/${id}`}>
            <div className="board">
                <div>
                    {name}
                </div>
            </div>
        </Link>
    )
}