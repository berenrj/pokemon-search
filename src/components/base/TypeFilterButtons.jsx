import getTypeBgColour from "../../utils/getTypeBgColour";

export default function TypeFilterButtons({selectedTypes, toggleType}) {
    const types = [
        'normal', 
        'fighting', 
        'flying', 
        'poison', 
        'ground', 
        'rock', 
        'bug', 
        'ghost', 
        'fire', 
        'water',
        'grass', 
        'electric', 
        'psychic', 
        'ice', 
        'dragon'
    ];           

    return (
        <>
        <div className="filter-button-container">
        {types.map(type => (
            <button className={
                `type-button 
                ${getTypeBgColour(type)}
                ${selectedTypes.includes(type) ? 'selected' : ''}
            `} 
            key={type} 
            onClick={() => toggleType(type)}>
                {type.toUpperCase()}
            </button>
        ))}            
        </div>
        </>
    )
}