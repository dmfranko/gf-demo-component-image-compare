import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

import '@cloudfour/image-compare'

const view = (state, { updateState }) => {
	return (
		<div>
			<image-compare label-text="Screen Reader Label Text">
				<img slot="image-1" alt="Alt Text" src={state.properties.image1} />
				<img slot="image-2" alt="Alt text" src={state.properties.image2} />
			</image-compare>
		</div>
	);
};

createCustomElement('x-784437-image-compare-demo', {
	renderer: { type: snabbdom },
	view,
	styles,
	properties: {
		image1: {
			default: 'https://github.com/dmfranko/gf-demo-component-external-url/blob/main/src/x-784437-demo-component-external-url/left.png?raw=true'
		},
		image2: {
			default: 'https://github.com/dmfranko/gf-demo-component-external-url/blob/main/src/x-784437-demo-component-external-url/right.png?raw=true'
		}
	},
});
