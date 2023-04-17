import {Link} from 'react-router-dom';

export default function ExpertList({posts}){ 
 
  const ListItems = posts.map(val => {
    return (
      <div className='cards'>
        <div className='container my-5 bg-white shadow rounded-lg' key = {val.id}>
              <div className='row'>
                  <div className='col-md-4'>
                    <Link to = {`/ExpertProfile/${val.id}`} style={{textDecoration: "none"}}>
                      <img src={`${val.imageUrl}`} alt={val.Name} className='img-fluid rounded-circle mb-3' />
                    </Link>
                  </div>
                  <div className='col-md-8 text-wrap'>
                      <h2 className='mb-4 my-4'>{val.Name}</h2>
                      <p className='text-muted'>{val.Description}</p>
                      <Link to = {`/ExpertProfile/${val.id}`} style={{textDecoration: "none"}}>
                        <button  className='btn mt-3' style={{backgroundColor: "#FFD93D", color: "#454545", fontFamily:"Arial, sans-serif", fontWeight: "bold"}}>View Profile</button>
                      </Link>
                  </div>
              </div>
        </div>
      </div>
    );
  });
  
  return (
    <div className='container'>
      <h1 className='text-center my-5  '>Meet Our Experts</h1>
        {ListItems}
    </div>
  );
}
