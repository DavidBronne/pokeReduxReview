import React from 'react'
import Rainbow from '../hoc/Rainbow'

const Contact = (props) => {
/*     console.log('props :>> ', props);
    setTimeout(()=> {
        props.history.push('/')
    }, 2000) */

    return (

        <div className="container">
        <h4 className="center">Contact</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut iste esse velit a nostrum unde corrupti, ipsa autem quae voluptates quaerat dolore repellendus libero officiis obcaecati quia? Corrupti, non quas.</p>
    </div>
        )
}

export default Rainbow(Contact )