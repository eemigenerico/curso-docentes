import { useParams } from 'react-router-dom';

function ModuleView() {
    const { id } = useParams(); // Captura el número del módulo de la URL

    return (
        <div>
            <h2>Estás viendo el Módulo {id}</h2>
            <p>Aquí iría el contenido de los submódulos correspondientes al tema {id}.</p>
            {/* Aquí podrías poner una lista de los 3-5 submódulos */}
        </div>
    );
}
export default ModuleView;