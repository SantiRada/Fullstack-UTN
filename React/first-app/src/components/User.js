export default function User({name, work}){
    return(
        <div className="card">
            <h4>{name}</h4>
            <p>{work}</p>
        </div>
    );
}