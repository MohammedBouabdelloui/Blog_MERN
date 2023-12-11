import './App.css';
import postImage from './images/post1.jpg';
function App() {
  return (
    <>
     <main>
        <header>
          <a href='#' className='logo'>logo</a>
          <nav>
            <a href='#'>Login</a>
            <a href='#'>Register</a>
          </nav>
        </header>
        <div className="post">
          <div>
            <img src={postImage}></img>
          </div>
          <div className="texts">

            <h2>Filmer banque d'images libres de droit</h2>
            <p className="info">
              <a className="author">mohammed simo</a>
              <time>2023-12-20 16:45</time>
            </p>
            <p className="sumary">Parcourez 139 673 photos et images disponibles de filmer, ou utilisez les mots-clés camera ou tournage pour trouver plus de photos et images d’exception.</p>
          </div>
        </div>


        <div className="post">
          <div>
            <img src={postImage}></img>
          </div>
          <div className="texts">

            <h2>Filmer banque d'images libres de droit</h2>
            <p className="info">
              <a className="author">mohammed simo</a>
              <time>2023-12-20 16:45</time>
            </p>
            <p className="sumary">Parcourez 139 673 photos et images disponibles de filmer, ou utilisez les mots-clés camera ou tournage pour trouver plus de photos et images d’exception.</p>
          </div>
        </div>


        <div className="post">
          <div>
            <img src={postImage}></img>
          </div>
          <div className="texts">

            <h2>Filmer banque d'images libres de droit</h2>
            <p className="info">
              <a className="author">mohammed simo</a>
              <time>2023-12-20 16:45</time>
            </p>
            <p className="sumary">Parcourez 139 673 photos et images disponibles de filmer, ou utilisez les mots-clés camera ou tournage pour trouver plus de photos et images d’exception.</p>
          </div>
        </div>


        <div className="post">
          <div>
            <img src={postImage}></img>
          </div>
          <div className="texts">

            <h2>Filmer banque d'images libres de droit</h2>
            <p className="info">
              <a className="author">mohammed simo</a>
              <time>2023-12-20 16:45</time>
            </p>
            <p className="sumary">Parcourez 139 673 photos et images disponibles de filmer, ou utilisez les mots-clés camera ou tournage pour trouver plus de photos et images d’exception.</p>
          </div>
        </div>
     </main>
    
    </>
  );
}

export default App;
