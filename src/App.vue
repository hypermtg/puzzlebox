<template>
  <div id="header">
    <h1>Teferi's Puzzle Box</h1>
  </div>
  <div id="intro" class="section">
    <div>Teferi's Puzzle Box is a Build-Your-Own-Standard constructed format.</div>
    <ul class="rules">
      <li>The current <b>Legacy banned list</b> is in effect, along with present day rules.</li>
      <li>Decks are <b>60 cards</b> at minimum, with a 15 card sideboard.</li>
      <li>Decks are constructed using a choice of <b>1 Core Set</b> between 6th Edition and 10th Edition.</li>
      <li>Decks are constructed using a choice of <b>2 Blocks</b> between Ice Age Block and Time Spiral Block.</li>
      <li>Ice Age Block includes Coldsnap, but does not include Homelands.</li>
      <li>Time Spiral Block includes only the cards from the main set and does not include Timeshifted cards.</li>
    </ul>
  </div>
  <div id="core" class="section">
    <h2 class="title">Core Sets <span class="subtitle">(Choose 1)</span></h2>
    <div class="set-list">
      <SetCard set="6ed"/>
      <SetCard set="7ed"/>
      <SetCard set="8ed"/>
      <SetCard set="9ed"/>
      <SetCard set="10e"/>
    </div>
  </div>
  <div id="blocks" class="section">
    <h2 class="title">Blocks <span class="subtitle">(Choose 2)</span></h2>
    <div class="set-list">
      <BlockCard v-for="(_, id) in blocks" :key="id" :block="id"/>
    </div>
  </div>
</template>

<script>
import BlockCard from './components/BlockCard.vue'
import SetCard from './components/SetCard.vue'
import { blocks, core } from './shared/format.js'

export default {
  name: 'App',
  components: {
    BlockCard,
    SetCard
  },
  data() {
    return {
      blocks,
      core,
    }
  }
}
</script>

<style>
body {
  background-color: var(--color-0);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;

  padding: 0 0.5em;
  margin: 0 auto;
  max-width: 1200px;

  color: var(--color-4);
}

#header {
  color: var(--color-6);
  font: 'Sans Serif';
}

.section {
  margin-bottom: 2em;
}

.section .title {
  text-align: left;
}

.section .subtitle {
  font-weight: 200;
  color: var(--color-7);
}

.rules {
  color: var(--color-4);
}

.set-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 0.5em;
}
</style>
