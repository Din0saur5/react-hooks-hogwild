import React, { useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import {GiBatteredAxe} from 'react-icons/gi'
import {AiOutlineDown} from 'react-icons/ai'
const PiggyCard = ({hog, handleSlaughter}) => {
    
    const {name, specialty, greased, weight, image}= hog
    const [showDeets, setShowDeets] = useState(false)
    let deets ='none'
    const handleDeets = () => {
        setShowDeets(!showDeets)
        console.log(showDeets)
        showDeets? deets="block": deets = 'none'
        console.log(deets)
    }
    
   
   
  return (
    <>
    
      <Card  className="ui four wide column pigTile" style={{"marginBlockStart": 14, "marginBlockEnd": 5, "marginRight":15}}>
      
        <Card.Img className='piggycons' variant='top' src={image}/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <button onClick={()=>handleSlaughter(hog)} >Slaughter <GiBatteredAxe/> </button> <br/>
            <button onClick={handleDeets}> Show Deetz <AiOutlineDown/> </button> 
            <ListGroup className={`list-group-flush ${showDeets? "showCard":''}`}  >
                <hr />
                <ListGroup.Item>Known for {specialty}</ListGroup.Item>
                <ListGroup.Item>Greased: {greased? "Greasi boi":"No"}</ListGroup.Item>
                <ListGroup.Item>Weight: {weight}</ListGroup.Item>
                <ListGroup.Item>medal achieved: {hog["highest medal achieved"]}</ListGroup.Item>
            </ListGroup>
            
        </Card.Body>
      </Card>
    </>
  )
}

export default PiggyCard
