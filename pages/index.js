import Link from 'next/link'
import { fetchPets, fetchFoo } from '../lib/services'
const Index = ({ pets }) => (
  <>
    {/* Create a card for each pet */}
    {pets.map((pet) => (
      <div key={pet._id}>
        <div className="card">
          <img src={pet.image_url} />
          <h5 className="pet-name">{pet.name}</h5>
          <div className="main-content">
            <p className="pet-name">{pet.name}</p>
            <p className="owner">Owner: {pet.owner_name}</p>

            {/* Extra Pet Info: Likes and Dislikes */}
            <div className="likes info">
              <p className="label">Likes</p>
              <ul>
                {pet.likes.map((data, index) => (
                  <li key={index}>{data} </li>
                ))}
              </ul>
            </div>
            <div className="dislikes info">
              <p className="label">Dislikes</p>
              <ul>
                {pet.dislikes.map((data, index) => (
                  <li key={index}>{data} </li>
                ))}
              </ul>
            </div>

            <div className="btn-container">
              <Link href="/[id]/edit" as={`/${pet._id}/edit`}>
                <button className="btn edit">Edit</button>
              </Link>
              <Link href="/[id]" as={`/${pet._id}`}>
                <button className="btn view">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
)

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {

  const pets = await fetchPets();

  return { props: { pets: pets } }
}

export default Index
