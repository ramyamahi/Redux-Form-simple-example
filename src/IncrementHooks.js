import React, { useState } from 'react';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

function IncrementHooks() {
	const [count, countIncrement] = useState(0);
	return (
		<div>
			Count: {count}<br/>
			<Button onClick={() => countIncrement(count+1)}>Increment</Button>
			<Button onClick={() => countIncrement(count-1)}>Decrement</Button>
			<Button onClick={() => countIncrement(0)}>Reset</Button>
		</div>
	);
}
export default IncrementHooks;