export default function Footer(props) {
    const { celular, direccion, referencia, correo, linkedin } = props;
    return (
        <div>
            <h3>Footer</h3>
            <p>{celular}</p>
            <p>{direccion}</p>
            <p>{correo} {linkedin}</p>
        </div>
    );
}