import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
function Element( id, x, y, z, ry ) {

	const div = document.createElement( 'div' );
	div.style.width = '480px';
	div.style.height = '360px';
	div.style.backgroundColor = '#000';

	const iframe = document.createElement( 'iframe' );
	iframe.style.width = '480px';
	iframe.style.height = '360px';
	iframe.style.border = '0px';
	iframe.src = [ 'https://www.youtube.com/embed/', id, '?rel=0' ].join( '' );
	div.appendChild( iframe );

	const object = new CSS3DObject( div );
	object.position.set( x, y, z );
	object.rotation.y = ry;

	return object;

}
export {Element}