import React from 'react'

export default function Tabla({ inventarios, borrar, obtener, usuarios, estados, marcas, tiposEquipos }) {
 
    //obtener el nombre del usuario de acuerdo a usuarios
    const obtenerUsuario = (id) => {
        const usuario = usuarios.find((usuario) => usuario.id === id);
        return usuario ? usuario.nombre : '';
    }

    //obtener el nombre del estado de acuerdo a estados
    const obtenerEstado = (id) => {
        const estado = estados.find((estado) => estado.id === id);
        return estado ? estado.nombre : '';
    }

    //obtener el nombre de la marca de acuerdo a marcas
    const obtenerMarca = (id) => {
        const marca = marcas.find((marca) => marca.id === id);
        return marca ? marca.nombre : '';
    }

    //obtener el nombre del tipo de equipo de acuerdo a tiposEquipos
    const obtenerTipoEquipo = (id) => {
        const tipoEquipo = tiposEquipos.find((tipoEquipo) => tipoEquipo.id === id);
        return tipoEquipo ? tipoEquipo.nombre : '';
    }


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
                {inventarios.map((inventario) => (
                    <tr key={inventario.id}>
                        <td>{inventario.serial}</td>
                        <td>{inventario.modelo}</td>
                        <td>{inventario.descripcion}</td>
                        <td>{inventario.foto}</td>
                        <td>{inventario.color}</td>
                        <td>{inventario.fechaCompra}</td>
                        <td>{inventario.precio}</td>
                        <td>{obtenerUsuario(inventario.usuarioId)}</td>
                        <td>{obtenerMarca(inventario.marcaId)}</td>
                        <td>{obtenerEstado(inventario.estadoId)}</td>
                        <td>{obtenerTipoEquipo(inventario.tipoEquipoId)}</td>
                        <td>
                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modalInventarios" onClick={() => obtener(inventario._id)}>
                        Editar </button>
                        <span> </span>
                        <button type="button" className="btn btn-outline-danger" onClick={() => { if (window.confirm('¿Estás seguro de eliminar el tipo de equipo?')) borrar(inventario.id)}}>
                        Eliminar <i className="fa-solid fa-user-minus"></i>
                        </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}

            