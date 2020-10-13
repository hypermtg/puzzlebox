<template>
  <div id="header">
    <h1>Teferi's Puzzle Box</h1>
  </div>
  <div id="intro" class="section">
    <div>Teferi's Puzzle Box is a Build-Your-Own-Standard constructed format.</div>
    <ul>
      <li>The current Legacy banned list is in effect, along with present day rules.</li>
      <li>Decks are 60 cards minimum, with a 15 card sideboard.</li>
      <li>Decks are constructed using a choice of <b>1 Core Set</b> between 6th Edition and 10th Edition.</li>
      <li>Decks are constructed using a choice of <b>2 Blocks</b> between Ice Age and Time Spiral.</li>
      <li>Ice Age Block includes Coldsnap, but not Homelands.</li>
      <li>Time Spiral Block is only the cards from the main set and does not include Timeshifted cards.</li>
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
// import HelloWorld from './components/HelloWorld.vue'
import BlockCard from './components/BlockCard.vue'
import SetCard from './components/SetCard.vue'
import { blocks, core } from './shared/format.js'

export default {
  name: 'App',
  components: {
    // HelloWorld,
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;

  padding: 0 0.5em;
  margin: 0 auto;
  max-width: 1200px;
}

.section {
  margin-bottom: 2em;
}

.section .title {
  text-align: left;
}

.section .subtitle {
  font-weight: 200;
  color: grey;
}

.set-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 0.5em;
}
</style>
