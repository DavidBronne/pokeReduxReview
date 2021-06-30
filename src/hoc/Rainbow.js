import React from 'react'

const Rainbow = (wrappedComponent) => {


return (props) => {

        return (
            <div className={className}>
                <wrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow