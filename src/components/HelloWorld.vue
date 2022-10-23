<template>
	<svg-map :map="USA" />
</template>

<script>

import { SvgMap } from "vue-svg-map";
import USA from '@svg-maps/usa';

export default {
  name: 'HelloWorld',
	components: {
		SvgMap,
	},
	data() {
		return {
			USA,
			pointedLocation: null,
			tooltipStyle: null,
		}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
