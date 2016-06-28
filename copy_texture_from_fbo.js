
const createTexture = require('@lfdoherty/gl-texture2d')


module.exports = function(srcFbo){
	const gl = srcFbo.gl;
	const srcTex = srcFbo.color[0];

	srcFbo.bind()
	const newTex = createTexture(gl, srcTex.shape, srcTex.format, srcTex.type);
	newTex.bind(0);
	gl.copyTexImage2D(gl.TEXTURE_2D, 0, srcTex.format, 0, 0, srcTex.shape[0], srcTex.shape[1], 0);

	newTex.minFilter = srcTex.minFilter;
	newTex.magFilter = srcTex.magFilter;
	newTex.mipSamples = srcTex.mipSamples;
	newTex.wrap = srcTex.wrap;
	
	return newTex;
}
