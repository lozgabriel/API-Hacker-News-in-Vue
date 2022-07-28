<template>
    <div class="single">
        <div class="container">
            <h1>{{ story.title }}</h1>
            <p class="score">Score: {{ story.score }}</p>
            <p class="single-url">{{ story.url }}</p>
            <div v-for="comment in comments" :key="comment">
                <div class="comment-wrap">
                    <div class="comment-block">
                        <p class="comment-text">{{ comment.text }}</p>
                        <div class="bottom-comment">
                            <span class="comment-author">by {{ comment.by }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>   

<script>
    import {apiId} from '@/services/api';
    export default {
        name: 'Single-App',
        data() {
            return {
                story: {},
                comments: []
            }
        },
        created() {
            apiId.get(+ this.$route.params.id + '.json')
                .then(res => {
                    this.story = res.data
                    this.story.comments = []
                    this.story.kids.forEach(id => {
                        apiId.get(+ id + '.json')
                            .then(res => {
                                this.comments.push(res.data)
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    })
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
</script>

<style scoped>
    .single {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .single .container {
        width: 90%;
    }    

    .single .score, .single .single-url {
        margin: 15px 0 0 0;
        color: var(--color-text-light);
        word-break: break-all;
    }

    .comment-wrap {
        width: 100%;
        font-size: var(--font-text-author);
        margin: 15px 0;
    }

    .comment-block {
        padding: 20px;
        background-color: var(--color-background-item);
        border-radius: 5px;
        word-break: break-all;
    }

    .comment-text {
        margin-bottom: 15px;
    }

    .bottom-comment {
        color: var(--color-text-author);
    }

</style>