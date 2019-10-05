import React from 'react';
import "./Item.styles.css";

const Item = ({task}) => {
	return (
		<p className = "item">{task}</p>
	)
}

export default Item;