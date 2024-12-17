import './FormWeather.css';

export function FormWeather({city, newCity,CallAPI}){

    const clicForm = (e) => {
        e.preventDefault();
        
        CallAPI();
    }

    return(
        <form>
            <input
                type="text"
                placeholder="Escribe una ciudad"
                value={city}
                onChange={ (e) => newCity(e.target.value) }
                className="input"
            />
            <input type="submit" value="Continuar" className="button" onClick={ clicForm } />
        </form>
    );
}