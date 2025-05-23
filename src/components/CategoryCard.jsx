export default function CategoryCard({ text, image }) {
    return (<>
        <div className=" hover:scale-110 duration-300 m-4 rounded-lg border hover:bg-black active:bg-black active:scale-110">
            <img src={image} alt="" className="m-3 mx-auto rounded-2xl " />
            <h1 className="  flex items-center justify-center text-2xl text-white font-semibold ">
                {text}
            </h1>
        </div>
    </>)
}