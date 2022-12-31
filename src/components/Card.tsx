
interface CardInterface {
    title: string,
    description: string,
    thumbnail: string,
    link: string
  }
const Card = ({ title, description, thumbnail, link }: CardInterface) => {
  return (

    <article className="bg-red-700 rounded-br-xl rounded-tr-xl rounded-bl-xl rounded-tl-xl w-[300px]">
      <figure>
        <img className="rounded-b-full rounded-t-full" src={thumbnail} />
      </figure>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link}>Ler sobre...</a>
    </article>
  )
}

export default Card