import React from 'react'

export default function Tabla({ inventarios, borrar, obtener, usuarios, estados, marcas, tiposEquipos }) {
 
    //obtener el nombre del usuario
    const obtenerNombreUsuario = (id) => {
        const usuario = usuarios.find((usuario) => usuario.id === id);
        return usuario.nombre;
    };

    //obtener el nombre del estado
    const obtenerNombreEstado = (id) => {
        const estado = estados.find((estado) => estado.id === id);
        return estado.nombre;
    };

    //obtener el nombre de la marca
    const obtenerNombreMarca = (id) => {
        const marca = marcas.find((marca) => marca.id === id);
        return marca.nombre;
    };

    //obtener el nombre del tipo de equipo
    const obtenerNombreTipoEquipo = (id) => {
        const tipoEquipo = tiposEquipos.find((tipoEquipo) => tipoEquipo.id === id);
        return tipoEquipo.nombre;
    };


  return (
    <div>
        <table className="table table-responsive">
            <thead>
                <tr className='table-dark table-responsive'>
                    <th>Serial</th>
                    <th>Modelo</th>
                    <th>Descripcion</th>
                    <th>Foto</th>
                    <th>Color</th>
                    <th>Fecha Compra</th>
                    <th>Precio</th>
                    <th>Usuario</th>
                    <th>Marca</th>
                    <th>Estado</th>
                    <th>Tipo Equipo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    inventarios.map(inventario => {
                        return (
                            <tr key={inventario.id}>
                                <td>{inventario.serial}</td>
                                <td>{inventario.modelo}</td>
                                <td>{inventario.descripcion}</td>
                                <td>{inventario.foto}</td>
                                <td>{inventario.color}</td>
                                <td>{inventario.fechaCompra}</td>
                                <td>{inventario.precio}</td>
                                <td>{obtenerNombreUsuario(inventario.usuarioId)}</td>
                                <td>{obtenerNombreMarca(inventario.marcaId)}</td>
                                <td>{obtenerNombreEstado(inventario.estadoId)}</td>
                                <td>{obtenerNombreTipoEquipo(inventario.tipoEquipoId)}</td>
                                <td>
                                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modalInventarios" onClick={() => obtener(inventario._id)}>
                                Editar <i className="fa-solid fa-user-edit"></i>
                                </button>
                                    <span> </span>
                                    <button type="button" className="btn btn-outline-danger" onClick={() => borrar(inventario._id)}>
                                    Eliminar <i className="fa-solid fa-user-minus"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
)
}

