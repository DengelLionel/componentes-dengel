import "../index.css"
interface CardInterface {
    title: string,
    description: string,
    thumbnail: string,
    link: string
  }
const Card = ({ title, description, thumbnail, link }: CardInterface) => {
  return (

    <article className="bg-red-700 rounded-br-xl rounded-tr-xl rounded-bl-xl rounded-tl-xl w-[300px]">
      
        <img className="rounded-b-full rounded-t-full w-[250px] h-[250px]" src={thumbnail} />
     
      <h2 className="text-white font-extrabold text-2xl text-center ">{title}</h2>
      <p className="text-white font-semibold text-2xl text-center ">{description}</p>
      <a className="text-sky-500 font-normal text-xl text-center " href={link}>Ler sobre...</a>
    </article>
  )
}

export default Card