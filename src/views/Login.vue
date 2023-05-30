<template>
    <div class="cmp-login">
        <img src="../assets/dglogin.jpg" alt="">
        <div class="cmp-login__wrapper cmp-login__wrapper--white">Teste</div>
    </div>
</template>

<script>
    export default {
        name:"Login"
    }
</script>

<style lang="scss">
    .cmp-login{ /*Componente Pai*/
        img{
            width: 100%;
            height: 427px;
            object-fit: cover;
        }

        &__wrapper{
            background: #fff;
        }

        &__wrapper--white{
            background: white;
        }

        &__wrapper--red{
            background: red;
        }
    }
</style>