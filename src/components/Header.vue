<template>
    <header>
        <nav class="container">
            <a href="/">
                <img id="logo" src="../assets/neoway.png" alt="Neoway News">
            </a>
            <img id="menu-button" v-on:click="openMenu" src="../assets/hamburger-menu-icon.png" alt="Abrir Menu">
            <div id="menu-overlay" v-on:click="closeMenu" v-if="menuActive"></div>
            <div id="menu-items" :class="{active:menuActive}">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/single">News</a></li>
                    <li><a href="/">Favoritos</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Header-App',
        data() {
            return {
                menuActive: false
            }
        },
        methods: {
            openMenu: function() {
                this.menuActive = true;
            },
            closeMenu: function() {
                this.menuActive = false;
            }
        }
    }
</script>

<style scoped>
    header {
        background-color: var(--color-background-nav);
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav {
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
    }

    #logo {
        width: 130px;
    }

    #menu-button {
        width: 35px;
        height: 35px;
    }

    #menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color: #000000;
        opacity: 0.8;
    }

    #menu-items {
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-background);
        width: 60%;
        height: 100vh;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    #menu-items.active {
        display: flex;
    }

    ul {
        list-style: none;
        text-align: center;
        margin-top: 5px;
    }

    ul li {
        margin: 20px 0;
    }

    ul li a {
        color: var(--color-text-light);
    }

    @media (min-width:700px) {
        #menu-button,
        #menu-overlay {
            display: none;
        }

        #menu-items {
            background-color: var(--color-background-nav);
            display: flex;
            position: static;
            width: auto;
            height: 60px;
        }

        ul {
            display: flex;
            height: 60px;
            align-items: center;
        }

        ul li {
            margin: 0;
            margin-left: 20px;
        }

        ul li a {
            color: var(--color-text-dark);
        }
    }
</style>