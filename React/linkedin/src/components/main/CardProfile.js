import { HiBookmark } from "react-icons/hi";

export function CardProfile(){
    return(
        <div className="card">
            <div className="banner-card">
                <img src="images/banner.jfif" alt="Imagen de Banner"></img>
            </div>
            <div className="img-card">
                <img src="images/icon.jpg" alt="Imagen del usuario"></img>
            </div>
            <div className="info-card">
                <h2>Santiago Rada</h2>
                <p className="subtitle">CEO & Founder at BetaDev: Digital Platform of education in GameDev</p>
            </div>
            <div className="stats-card">
                <p className="text">Visualizaciones del perfil <a>89</a></p>
                <p className="text">Impresiones de la publicación <a>32</a></p>
            </div>
            <a className="save-button">
                <HiBookmark color="404040" />
                Elementos guardados
            </a>
        </div>
    );
}