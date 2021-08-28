<template>
	<div id="tabbar-item" @click="tabchoose">
		<div v-if="!tab"><slot name="tp1"></slot></div>
		<div v-else class="tp2"><slot name="tp2"></slot></div>
		<div :style="text"><slot name="text"></slot></div>
	</div>
</template>

<script>
export default {
	name: "TabbarItem",
	data () {
		return {
			
		}
	},
	props:{
		path: String,
		textcolor: {
      type : String,
      default: 'red'
		}
	},
	comments:{},
	computed:{
		tab () {
			return this.$route.path.indexOf( this.path ) != -1
		},
		text() {
			return this.tab ? { color: this.textcolor } : {}
		}
	},
	methods:{
		tabchoose() {
			this.$router.replace(this.path)
		}
	}
}
</script>

<style>
#tabbar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tp2{
    color: red;
  }
</style>
