<template>
	<div id="tabbar">
		<slot></slot>
	</div>
</template>

<script>
export default{
	name: 'Tabbar',
	data () {
		return {
			
		}
	},
	components:{}
}
</script>

<style>
	#tabbar{
		display: flex;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #f6f6f6;
		box-shadow: 0px 1px 3px rgba(0,0,0,.4);
	}
</style>
