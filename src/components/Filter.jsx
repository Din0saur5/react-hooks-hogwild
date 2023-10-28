import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Filter = ({ handleSorting, hogs}) => {
    const [isGreasi, setIsGreasi] = useState(false)
    const [sortby, setSortby] = useState('name')

const onSortChange = (e) => {
    e.preventDefault()
    setSortby(e.target.value)
}
 
//     

//     handleSorting(sortedHogs)
    
//  }
 const onSort = (e) => {
   e.preventDefault()
   let greasiBois = hogs
   console.log(isGreasi)
	isGreasi? 	
        greasiBois= hogs.filter(hog=>
        hog.greased === true) 
        :
        greasiBois = hogs
		
			
		
    let totalPorkage
    console.log(sortby)
    if(sortby==="weight")
    {totalPorkage = greasiBois.sort((a, b) => a.weight - b.weight);}
    else{ totalPorkage = greasiBois.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });}
      handleSorting(totalPorkage)

	}
	

   


  return (
   
        <>
           
            <form onSubmit={(e)=>onSort(e)} className='pig-form'>
            <div className='filter'>
            <label htmlFor='greased' >Greased &nbsp;</label>
            <input  type='checkbox' onChange={()=>{setIsGreasi(!isGreasi)}} value={isGreasi} name='greased'></input>
            </div>
           <div className='filter'>
            <label htmlFor='sort'>Sort By:</label>
            <select  onChange={(e)=>{onSortChange(e)}} value={sortby} name='sort'>
                <option value='name'>Name</option>
                <option value='weight'>Weight</option>
            </select>
            <input type='submit'></input>
            </div>
            </form>
      </>
   
  )
}

export default Filter
