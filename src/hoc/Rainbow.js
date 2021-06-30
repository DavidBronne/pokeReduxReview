import React from 'react'

const Rainbow = (WrappedComponent) => {
    const color = ["red", "pink", "orange", "blue"]
    const randomColour = color[Math.floor(Math.random()*5)]
    const className= randomColour + "-text"

return (props) => {

        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow