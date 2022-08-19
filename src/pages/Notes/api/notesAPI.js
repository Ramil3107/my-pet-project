import { instance } from "../../../api/api"



export const notesAPI = {

    createNote(title, details, category) {
        return instance.post("notes", {
            title,
            details,
            category
        })
    },

    getNotes() {
        return instance.get("notes")
            .then(response => response.data)
    },

    deleteNote(id) {
        return instance.delete(`notes/${id}`)
    }


}