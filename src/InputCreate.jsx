import {useState} from "react"

const InputCreate = ()=> {
    const[title, setTitle]= useState("")
    const handleSubmit = async (e)=>{
        e.preventDefault()

        if (!title.trim()) return

        try {
            const response =await fetch("http://localhost:3000/create",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringyfy({title}),
            })

            const data = await response.json()
            console.log("tarea creada", data)

            setTitle("")
        } catch(error) {
            console.error("Error al crear la tarea")
        }
    }

    return(
        <>
        <div>
            <h2>Crear tarea</h2>
            <form onSubmit={handleSubmit}>
                <   input type="text"
                    placeholder="escribe la tarea"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
        </>
    )
}
export default InputCreate