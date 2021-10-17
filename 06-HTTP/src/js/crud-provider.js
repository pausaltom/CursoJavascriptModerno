const urlCRUD = 'https://reqres.in/api/users';


const getUsuario = async (id) => {
    const resp = await fetch(`${urlCRUD}/${id}`);
    const { data } = await resp.json();

    return data;
}

const crearUsuario = async (usuario) => {
    const resp = await fetch(urlCRUD, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();


}

const updateUsuario = async (id, usuario) => {
    try {
        const resp = await fetch(`${urlCRUD}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('id: ', id);

        return await resp.json();

    } catch (err) {
        console.error(err)
    }
}

const deleteUsuario = async (id) => {
    try {
        const resp = await fetch(`${urlCRUD}/${id}`, {
            method: 'DELETE'
        });
        return (resp.ok) ? 'Borrado correctamente' : 'No se puedo borrar el usuario';
    } catch (err) {
        throw err;
    }

}

export {
    getUsuario,
    crearUsuario,
    updateUsuario,
    deleteUsuario
}