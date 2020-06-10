<template>
    <div id="app">
        <app-generator></app-generator>
    </div>
</template>

<script>
import Generator from '@/components/Generator';

export default {
    name: 'App',

    components: {
        'app-generator': Generator,
    }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap');

#app {
    /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 5vh;
    min-height: 95vh;

    background: linear-gradient(270deg, #dfdfdf, #b7eefb, #fbb8bb);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 9s ease infinite;
    -moz-animation: AnimationName 9s ease infinite;
    animation: AnimationName 9s ease infinite;    
}

body {

}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
</style>
