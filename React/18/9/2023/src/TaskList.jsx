import React, { useState } from 'react';
import './Appp.css';

function TaskList() {
  const [formulario, setTasks] = useState([]);
  const [newForm, setnewForm] = useState('');

  const addFormulario = () => {
    if (newForm.trim() !== '') {
      setTasks([...formulario, newForm]);
      setnewForm('');
    }
  };

  const editFormulario = (index) => {
    const actualizarform = prompt('Editar form:', formulario[index]);
    if (actualizarform !== null) {
      const actualizarforms = [...formulario];
      actualizarforms[index] = actualizarform;
      setTasks(actualizarforms);
    }
  };

  const deleteFormulario = (index) => {
    const actualizarform = [...formulario];
    actualizarform.splice(index, 1);
    setTasks(actualizarform);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Agregar Nuevo Formulario"
        value={newForm}
        onChange={(e) => setnewForm(e.target.value)}
      />
      <div className="button-container">
        <button className="add" onClick={addFormulario}>
          Agregar
        </button>
      </div>
      {formulario.map((form, index) => (
        <div key={index} className="card">
          {form}
          <div className="button-container">
            <button className="edit" onClick={() => editFormulario(index)}>
              Edit
            </button>
            <button className="delete" onClick={() => deleteFormulario(index)}>
              Delete
            </button>
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
