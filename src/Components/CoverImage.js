let coverImage = require('../Images/favicon.ico')

export default function CoverImage(props) {

    return (
        <div className="cover-image">
            <img src={require("../Images/favicon.ico")} alt={props.alt} style={{maxHeight : '200px'}}/>
        </div>
    )
}