<template>
  <router-view/>
 <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
	<tabbar>
		<tabbar-item v-for="item in tablist" :key="item.name" :path="item.path">
			<template v-slot:tp1><div>{{item.img1}}</div></template>
			<template v-slot:tp2><div>{{item.img2}}</div></template>
			<template v-slot:text><div>{{item.name}}</div></template>
		</tabbar-item>
	</tabbar>
</template>

<script>
import tabbar from './components/tabbar/Tabbar';
import tabbarItem from './components/tabbar/TabbarItem';
	
export default{
  name: 'App',
  data () {
    return {
      tablist:[
        {name : "首页" ,img1 : "图片1" ,img2 : "图片2" ,ys : "blue" ,path : "/home"},
        {name : "分类" ,img1 : "图片1" ,img2 : "图片2" ,ys : "blue" ,path : "/class"},
        {name : "购物车" ,img1 : "图片1" ,img2 : "图片2" ,ys : "blue" ,path : "/car"},
        {name : "我的" ,img1 : "图片1" ,img2 : "图片2" ,ys : "blue" ,path : "/about"}
      ]
    }
  },
  components:{
		tabbar,
		tabbarItem
	}
}
</script>

<style>
@import url("assets/css/style.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
