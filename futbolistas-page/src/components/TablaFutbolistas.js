import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TablaFutbolistas({ futbolistas }) {

    const mostrarDetalle = (futbolista) => {
        const detalle = `
            ID: ${futbolista.id}
            Nombres: ${futbolista.nombres}
            Apellidos: ${futbolista.apellidos}
            Fecha de Nacimiento: ${futbolista.fechaNacimiento}
            Características: ${futbolista.caracteristicas}
            Posición: ${futbolista.posicion.nombre}
        `;
        alert(detalle);
    };

    return (
        <table className="table">
            <thead className="thead-dark">
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
                        <td><button className="btn btn-primary" onClick={() => mostrarDetalle(futbolista)}>Detalle</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TablaFutbolistas;
