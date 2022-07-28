<template>
    <section class="story">
        <span class="score">Score: {{ story.data.score }}</span>
        
        <div class="box-top">
          <h2>
            <router-link :to="{ path: '/story/' + story.data.id }">{{ story.data.title }}</router-link>
          </h2>
        </div>

        <div class="box-bottom">
          <a :href="story.data.url" target="_blank" class="story-url">Website Link</a>
          <span class="meta">
            by {{ story.data.by }} | {{ story.data.time }} Ago | {{
            story.data.descendants }} comments
          </span>
        </div>
    </section>
</template>   

<script>
    export default {
        name: 'Item-App',
        props: ['story']
    }
</script>

<style scoped>
  .story {
    background-color: #fff;
    padding: 20px 30px;
    margin: 20px 0;
  }

  .story h2, .story .story-url {
    margin-bottom: 10px;
  }

  .story .story-url {
    text-decoration: underline;
  }

  .story .box-top, .story .box-bottom {
    display: flex;
  }

  .story .box-bottom {
    flex-direction: column;
  } 

  .score {
    margin-bottom: 5px;
    display: block;
    color: var(--color-text-score);
    font-weight: 700;
  }

  .story a {
    font-weight: 600;
    text-decoration: none;
  }

  .story a span {
    margin-left: 10px;
  }

  .story .meta {
    font-size: var(--font-text-author);
    color: var(--color-text-author);
  }
</style>