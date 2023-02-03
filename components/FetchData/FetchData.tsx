import { Data, Item } from "@/Types/Common";







export default function FetchData({ allPostsData }:Data) {
    return (
        <>
            {allPostsData?.map((item:Item) => (
                <div key={item.id}>
                    <h1>{item.name}</h1>

                </div>
            ))}
        </>

    )
}