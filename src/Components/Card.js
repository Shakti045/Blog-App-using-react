
function Card({title,author,date,content,tags,category}){
    return <div className=" w-[90vw] lg:w-[60vw] md:w-[80vw] flex flex-col gap-1">
    <h1 className=" font-bold text-lg">{title}</h1>
    <p>By {author} on {category}</p>
    <p>{date}</p>
    <p>{content}</p>
    <div className="  lg:flex text-[15px] gap-4 text-blue-500">
        {
            tags.map((data)=>{
                return <p key={data.id}>{`#${data}`}</p>
            })
        }
    </div>
    </div>
}

export default Card;