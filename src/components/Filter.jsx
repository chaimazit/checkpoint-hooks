import React from 'react'

const Filter = ({title,setTitle}) => {
  return (
    <div>
      <input type="text" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" value={title} onChange={e =>setTitle(e.target.value)}/>

    </div>
  )
}

export default Filter

