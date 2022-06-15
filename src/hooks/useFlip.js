import { useState } from 'react';

const useFlip = (initialState = true) => {
	const [isFlipped, setFlipped] = useState(initialState);
	const toggleFlip = () => {
		setFlipped((flip) => !flip);
	};
	return [isFlipped, toggleFlip];
};

export default useFlip;
