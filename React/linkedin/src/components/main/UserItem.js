import { HiPlus } from "react-icons/hi";

export function UserItem(){
    return(
        <div className="user">
            <img src="images/icon.jpg" alt="imagen del usuario"></img>
            <div class="right-content">
                <p className="name">Jordan Carver</p>
                <p className="text">Talent Partnet @ a 16z and Angel</p>
                <p className="text">Investor (ex-Riot Games)</p>
                <a className="button"><HiPlus color="404040" /> Seguir</a>
            </div>
        </div>
    );
}