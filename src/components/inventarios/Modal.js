import React from 'react'

export default function Modal({ inventario, setInventario, crear, editar, usuarios, marcas, estados, tiposEquipos }) {
    
    return (
    <div className="modal fade" id="modalInventarios" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Agregar Inventario</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="serial" className="form-label">Serial</label>
                            <input type="text" className="form-control" id="serial" name="serial" value={inventario.serial} onChange={(e) => setInventario({ ...inventario, serial: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="modelo" className="form-label">Modelo</label>
                            <input type="text" className="form-control" id="modelo" name="modelo" value={inventario.modelo} onChange={(e) => setInventario({ ...inventario, modelo: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descripcion" className="form-label">Descripcion</label>
                            <input type="text" className="form-control" id="descripcion" name="descripcion" value={inventario.descripcion} onChange={(e) => setInventario({ ...inventario, descripcion: e.target.value })} />
                        </div>
                        {/*subir foto inventario*/}
                        <div className="mb-3">
                            <label htmlFor="foto" className="form-label">Foto</label>
                            <input type="file" className="form-control" id="foto" name="foto" value={inventario.foto} onChange={(e) => setInventario({ ...inventario, foto: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="color" className="form-label">Color</label>
                            <input type="text" className="form-control" id="color" name="color" value={inventario.color} onChange={(e) => setInventario({ ...inventario, color: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fechaCompra" className="form-label">Fecha de Compra</label>
                            <input type="date" className="form-control" id="fechaCompra" name="fechaCompra" value={inventario.fechaCompra} onChange={(e) => setInventario({ ...inventario, fechaCompra: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="precio" className="form-label">Precio</label>
                            <input type="number" className="form-control" id="precio" name="precio" value={inventario.precio} onChange={(e) => setInventario({ ...inventario, precio: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="usuario" className="form-label">Usuario</label>
                            {/* para crear un usuario esto recibe el metodo crear: inventario.usuario = { "_id": inventario.usuario }; */}
                            <select className="form-select" aria-label="Default select example" id="usuario" name="usuario" value={inventario.usuario} onChange={(e) => setInventario({ ...inventario, usuario: e.target.value })}>
                                <option value="">Seleccione un usuario</option>
                                {usuarios.map((usuario) => (
                                    <option key={usuario._id} value={usuario._id}>{usuario.nombre}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="marca" className="form-label">Marca</label>
                            <select className="form-select" id="marca" name="marca" value={inventario.marca} onChange={(e) => setInventario({ ...inventario, marca: e.target.value })}>
                                <option value="">Seleccione una marca</option>
                                {/*el campo marca debe enviarse así: "marca": { "_id": "634391d43d0377ee33d73667" },*/}
                                {marcas.map(marca => (
                                    <option key={marca._id} value={marca._id}>{marca.nombre}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="estado" className="form-label">Estado</label>
                            <select className="form-select" id="estado" name="estado" value={inventario.estado} onChange={(e) => setInventario({ ...inventario, estado: e.target.value })}>
                                <option value="">Seleccione un estado</option>
                                {/*el campo estado debe enviarse así: "estado": "6340ac6f36fd69764809d646" */}
                                {estados.map(estado => (
                                    <option key={estado._id} value={estado._id}>{estado.nombre}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tipoEquipo" className="form-label">Tipo de Equipo</label>
                            <select className="form-select" id="tipoEquipo" name="tipoEquipo" value={inventario.tipoEquipo} onChange={(e) => setInventario({ ...inventario, tipoEquipo: e.target.value })}>
                                <option value="">Seleccione un tipo de equipo</option>
                                {/*el campo tipo equipo debe enviarse así: "tipoEquipo": "6340ad0a36fd69764809d658" */}
                                {tiposEquipos.map(tipoEquipo => (
                                    <option key={tipoEquipo._id} value={tipoEquipo._id}>{tipoEquipo.nombre}</option>
                                ))}
                            </select>
                        </div>
                    </form>
                </div>
                {/*obtener los datos del formulario*/}
                <div className="modal-footer">
                <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">
                Close <i className="fa-sharp fa-solid fa-xmark" />  </button>
                <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal" onClick={() => crear(inventario)}>Guardar <i className="fa-sharp fa-solid fa-checkmark" /></button>
                <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal" onClick={() => editar(inventario._id)}>
                Editar <i className="fa-sharp fa-solid fa-pen-to-square" />  </button>
                </div>
            </div>
        </div>
    </div>
    )
}