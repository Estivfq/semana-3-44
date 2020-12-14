<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <home />
    </div>
</template>
<script>
    // @ is an alias to /src
    import home from "@/components/home.vue";
    export default {
        name: "Home",
        components: {
            home
        }
    };

</script>
