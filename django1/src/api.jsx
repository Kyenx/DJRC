const url = 'http://127.0.0.1:8000/api/v1/notes/'

export const fetchNotes = async () => {
    return fetch(url, {})
        .then(res => res.json())
        .then(data => {
            return data
        })
}

export const fetchNote = async (id) => {
    return fetch(url, {})
        .then(res => res.json())
        .then(data => {
            return data
        }) 
}

export const addNote = (note) => {
    fetch(url, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(note)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

    return note
}

export const updateNote = (note) => {
    console.log("Updateing note")
}