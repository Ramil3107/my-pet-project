import React from "react"
import { Outlet } from "react-router-dom"


function Notes () {
    return (
        <div>
            Notes Page
            <Outlet />
        </div>
    )
}

export default Notes