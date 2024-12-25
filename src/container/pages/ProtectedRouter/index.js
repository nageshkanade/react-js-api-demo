import React from 'react'

const ProtectedRouter = (props) => {
    const {Comp} = props;

  return (
    <div>
        <Comp/>
    </div>
  )
}

export default ProtectedRouter
