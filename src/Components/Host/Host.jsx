import "./host.css";

function Host({name, img}) {
    const nameParts = name.split(' ');

    return (
        <div className="host">
            {nameParts.map((part, index) => (
                <>
                    {part}
                    {index < nameParts.length - 1 && <br />}
                </>
            ))}
            <img src={img} alt={"photo de " + name}/>
        </div>
    )
}

export default Host;



