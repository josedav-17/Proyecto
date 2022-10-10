import React, { useEffect, useState } from 'react'
import { obtenerInventarios, crearInventario, obtenerInventarioPorID, borrarInventarioPorID, editarInventarioPorID } from '../../services/InventarioService';
import { obtenerUsuarios } from '../../services/UsuarioService';
import { obtenerMarcas } from '../../services/MarcaService';
import { obtenerEstados } from '../../services/EstadoService';
import { obtenerTiposEquipos } from '../../services/TipoEquipoService';
import Modal from './Modal';
import Tabla from './Tabla'

export default function Inventario() {
  const [usuarios, setUsuarios] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [estados, setEstados] = useState([]);
  const [tiposEquipos, setTiposEquipos] = useState([]);
  const [inventarios, setInventarios] = useState([]);
  const [inventario, setInventario] = useState([]);

  useEffect(() => {
    obtenerInventarios().then((res) => {
      setInventarios(res.data);
    });
    //obtener usuarios por id y poder asignarlos a un equipo
    obtenerUsuarios().then((res) => {
      setUsuarios(res.data);
    });
    //obtener marcas por id y poder asignarlos a un equipo
    obtenerMarcas().then((res) => {
      setMarcas(res.data);
    });
    //obtener estados por id y poder asignarlos a un equipo
    obtenerEstados().then((res) => {
      setEstados(res.data);
    });
    //obtener tipos de equipos por id y poder asignarlos a un equipo
    obtenerTiposEquipos().then((res) => {
      setTiposEquipos(res.data);
    });
  }, []);
  

  //funcion get para obtener el inventario por id
  const obtener = async (inventarioId) => {
    try {
      const { data } = await obtenerInventarioPorID(inventarioId);
      setInventario(data);
    } catch (e) {
      console.log(e);
    }
  }

  //borrar un inventario por id
  const borrar = (id) => {
    borrarInventarioPorID(id).then((res) => {
      setInventarios(inventarios.filter((inventario) => inventario._id !== id));
    });
  };


  //funcion post para crear un inventario
  const crear = async () => {
    const { data } = await crearInventario(inventario);
    setInventarios([...inventarios, data]);
    setInventario([]);
  }
  

  //actualizar un inventario por id
  const editar = (inventarioId) => {
    try{
      const { data } = editarInventarioPorID(inventarioId, data);
      setInventarios(inventarios.map((inventario) => inventario._id === inventarioId ? data : inventario));
    }
    catch(e){
      console.log(e);
    }
  }




  return (
<div class="container-fluid">
      <div class="row">
        <div class="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 bg-dark text-white border-bottom">
          <h1 class="h2">Modulo Inventarios <i class="fa-solid fa-users"></i> </h1>
          <span> </span>
        </div>
      </div>

      <div className="col-12">
          <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#modalInventarios" onClick={() => setInventario({})}>
            Crear nuevo inventario <i className="fa-solid fa-user-plus"></i>
      </button>
      </div>
      <br></br>
      <span></span>


      {/* Tabla */}
      <Tabla inventarios={inventarios} borrar={borrar} obtener={obtener}
      usuarios={usuarios} marcas={marcas} estados={estados} tiposEquipos={tiposEquipos} />

      {/* Modal */}
      <Modal inventario={inventario} crear={crear} editar={editar}
      usuarios={usuarios} marcas={marcas} estados={estados} tiposEquipos={tiposEquipos} />

    </div>
  )
}
