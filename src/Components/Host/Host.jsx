import "./host.css";

function Host({name, img}) {
    const html = name.split(' ').join('<br>');

    return (
        <div className="host">
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <img src={img} alt="" />
        </div>
    )
}

export default Host;