import "./card.css"

interface CardPops {
  price: number,
  title: string,
  image: string
}

export function Card({ price, image, title} : CardPops){
  return (
    <div className="card">
      <img/>
      <h2></h2>
      <p><b>Valor:</b></p>
    </div>
  )
}