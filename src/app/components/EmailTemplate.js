export default function emailTemplateContext(name, mensaje){
    <div>
        <h3>{`Hola ${name}, hemos recivido el siguiente mensaje: `}</h3>
        <p>{mensaje}</p>
        <p>Nos pondremos en contacto contigo con la mayor brevedad. Un saludo!</p>
    </div>
}