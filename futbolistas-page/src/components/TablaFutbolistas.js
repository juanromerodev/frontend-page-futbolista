import React from "react";

function TablaFutbolistas({ futbolistas }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Características</th>
                    <th>Posición</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {futbolistas.map((futbolista) => (
                    <tr key={futbolista.id}>
                        <td>{futbolista.id}</td>
                        <td>{futbolista.nombres}</td>
                        <td>{futbolista.apellidos}</td>
                        <td>{futbolista.fechaNacimiento}</td>
                        <td>{futbolista.caracteristicas}</td>
                        <td>{futbolista.posicion.nombre}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TablaFutbolistas;
