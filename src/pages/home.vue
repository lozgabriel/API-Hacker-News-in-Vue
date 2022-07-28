<template>
    <main>
        <section class="container">
            <h1>Top Trends</h1>
            <item v-for="story in stories" :key="story.data.id" :story="story"/>
            <!-- <section class="news" v-for="(listaStories, index) in stories" :key="index">
                <h1>{{ listaStories.data.title }}</h1>
                <p>{{ listaStories.data.url }}</p>
                <p>Comments: {{ listaStories.data.descendants }}</p>
                <p>Score: {{ listaStories.data.score }}</p>
            </section> -->
        </section>
    </main>
</template>

<script>
    import {api, apiId} from '@/services/api';
    import Item from '@/components/Item';
    export default {
        name: 'Home-App',
        components: {
            'item': Item
        },
        data() {
            return {
                err: '',
                stories: []
            }
        },
        mounted() {
            api.get('topstories.json').then(response => {
                let results = response.data.slice(0, 100)
                results.forEach(id => {
                    apiId.get(id + '.json').then(response => {
                        this.stories.push(response)
                    })
                    .catch(err => {
                        this.err = err
                    })
                })
            })
        }
    }
</script>

<style scoped>
    main {
        align-items: center;
    } 
</style>