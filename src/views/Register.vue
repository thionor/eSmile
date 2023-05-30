<template>
    <div class="cmp-register">
		<img src="../assets/logo.png" alt="">
		<div class="cmp-register__wrapper cmp-register__wrapper--white"> Teste </div>
	</div>
</template>

<script>
	export default {
		name:"Register"
	}			
</script>

<style lang="scss">
	.cmp-register{ /*Componente Pai*/
		img{
			width: 100%;
			height: 200px;
			object-fit: cover;
			background: #fff;
		}

		&__wrapper{
			background: #fff;
		}
	}
</style>