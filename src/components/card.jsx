import React from 'react'
import styled from 'styled-components'

import towards from './earrings'



class Card extends React.Component{
	render(){

	const towardsElements = towards.map((towards, index) =>
			<Cards key = {towards.id} towards = {towards} defaultOpen = {index === 0}>
				<p>{towards.text}</p>
			</Cards>
)
		return(
 		<div>
        {towardsElements}
     </div>
			)
	}
}


export default Card