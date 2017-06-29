<template>
  <div class="loader">
		<transition name="fade">
			<div class="cssload-clock" v-if="visible"></div>
		</transition>
  </div>
</template>

<script>
export default {
  name: 'loader',
  props: [
    'visible'
  ]
}
</script>

<style>
.loader {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 5000;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

.cssload-clock {
	border-radius: 58px;
	border: 3px solid rgb(0,0,0);
	height: 78px;
	width: 78px;
	position: relative;
	left: 35%;
	left: calc(50% - 42px);
		left: -o-calc(50% - 42px);
		left: -ms-calc(50% - 42px);
		left: -webkit-calc(50% - 42px);
		left: -moz-calc(50% - 42px);
}

.cssload-clock:after {
	content: "";
	position: absolute;
	background-color: rgb(0,0,0);
	top:2px;
	left: 48%;
	height: 37px;
	width: 4px;
	border-radius: 5px;
	transform-origin: 50% 97%;
		-o-transform-origin: 50% 97%;
		-ms-transform-origin: 50% 97%;
		-webkit-transform-origin: 50% 97%;
		-moz-transform-origin: 50% 97%;
	animation: grdAiguille 2.3s linear infinite;
		-o-animation: grdAiguille 2.3s linear infinite;
		-ms-animation: grdAiguille 2.3s linear infinite;
		-webkit-animation: grdAiguille 2.3s linear infinite;
		-moz-animation: grdAiguille 2.3s linear infinite;
}

.cssload-clock:before {
	content: "";
	position: absolute;
	background-color: rgb(0,0,0);
	top:6px;
	left: 48%;
	height: 34px;
	width: 4px;
	border-radius: 5px;
	transform-origin: 50% 94%;
		-o-transform-origin: 50% 94%;
		-ms-transform-origin: 50% 94%;
		-webkit-transform-origin: 50% 94%;
		-moz-transform-origin: 50% 94%;
  animation: ptAiguille 27.6s linear infinite;
		-o-animation: ptAiguille 27.6s linear infinite;
		-ms-animation: ptAiguille 27.6s linear infinite;
		-webkit-animation: ptAiguille 27.6s linear infinite;
		-moz-animation: ptAiguille 27.6s linear infinite;
}

@keyframes grdAiguille {
		0% { transform:rotate(0deg); }
		100% { transform:rotate(360deg); }
}

@-o-keyframes grdAiguille {
		0% { -o-transform:rotate(0deg); }
		100% { -o-transform:rotate(360deg); }
}

@-ms-keyframes grdAiguille {
		0% { -ms-transform:rotate(0deg); }
		100% { -ms-transform:rotate(360deg); }
}

@-webkit-keyframes grdAiguille {
		0% { -webkit-transform:rotate(0deg); }
		100% { -webkit-transform:rotate(360deg); }
}

@-moz-keyframes grdAiguille {
		0% { -moz-transform:rotate(0deg); }
		100% { -moz-transform:rotate(360deg); }
}

@keyframes ptAiguille {
		0%{ transform:rotate(0deg); }
		100%{ transform:rotate(360deg); }
}

@-o-keyframes ptAiguille {
		0%{ -o-transform:rotate(0deg); }
		100%{ -o-transform:rotate(360deg); }
}

@-ms-keyframes ptAiguille {
		0%{ -ms-transform:rotate(0deg); }
		100%{ -ms-transform:rotate(360deg); }
}

@-webkit-keyframes ptAiguille {
		0%{ -webkit-transform:rotate(0deg); }
		100%{ -webkit-transform:rotate(360deg); }
}

@-moz-keyframes ptAiguille {
		0%{ -moz-transform:rotate(0deg); }
		100%{ -moz-transform:rotate(360deg); }
}
</style>
