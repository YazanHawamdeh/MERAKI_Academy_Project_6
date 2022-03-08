
import 'bootstrap/dist/css/bootstrap.min.css'

const Home=()=>{


    return (
        <div>

            <h1>mohammmad</h1>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.prismic.io/frameworkmarketplace/5dc5fc06-aec5-4f28-a924-0230aa91a360_Pre-Marketplace+-+image_02.jpg?auto=compress,format" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/I/711jgF2LHPL._AC_SY450_.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/I/711jgF2LHPL._AC_SY450_.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

 export default Home