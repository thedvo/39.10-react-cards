import React, { useState } from 'react';
import backOfCard from './back.png';
import useFlip from './hooks/useFlip';
import './PlayingCard.css';

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
	const [isFacingUp, toggleFlip] = useFlip(true);

	return (
		<img
			src={isFacingUp ? front : back}
			alt="playing card"
			onClick={toggleFlip}
			className="PlayingCard Card"
		/>
	);
}

export default PlayingCard;
