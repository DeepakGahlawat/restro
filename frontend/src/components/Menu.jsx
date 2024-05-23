import {data} from '../restApi.json'

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            illum facere aspernatur animi quisquam excepturi nemo, officiis
            pariatur iure! Facere dolorem, ex nisi velit aut tenetur, aliquam
            hic fugiat facilis earum tempore quae, nulla aspernatur possimus
            quaerat molestiae nam atque. Numquam ut rem voluptatibus dicta
            mollitia temporibus tempora cum dolor!
          </p>
        </div>
        <div className="dishes_container">
            {
                data[0].dishes.map(element =>{
                    return (
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title} />
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  );
};

export default Menu;
