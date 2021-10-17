
const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios= 'https://reqres.in/api/users?page=2';

// Cloudinary
const cloudPreset = 'nzvf9idu';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dgfqp09yj/upload';

const obtenerJoke = async() => {
    try {
        const resp =  await fetch(jokeUrl);
        
        if (!resp.ok) throw 'No se pudo realizar la petición';
        
       const {icon_url, id, value} = await resp.json();
    
        return {
            icon_url:icon_url,
            id:id,
            value:value
        };
        
    } catch (error) {
        throw error;
    }


}
const obtenerUsuarios= async() => {
    try {
        const resp =  await fetch(urlUsuarios);
        
        if (!resp.ok) throw 'No se pudo realizar la petición';
        
       const {data:usuarios} = await resp.json();        
        return usuarios;
        
    } catch (error) {
        throw error;
    }


}

//ArchivoSubir :: File
const subirImagen = async( archivoSubir ) =>{
    const formData = new FormData();
    formData.append('upload_preset',cloudPreset);
    formData.append('file',archivoSubir);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            console.log(cloudResp);
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }
    } catch (err) {
        throw err
    }
}



export {
    obtenerJoke,
    obtenerUsuarios,
    subirImagen
}