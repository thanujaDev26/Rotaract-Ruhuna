import Form from './form'
import Address from "./Address";


export default function Contact(props) {


    return (
        <div className="blogs">
            <Address/>
            <Form user={props.user}/>
        </div>
    )
}