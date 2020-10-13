<template>
<div class="block">
    <div class="block-name">
        <a :href="blockUrl" target="_blank">{{ block }} Block</a>
    </div>
    <div class="sets">
        <SetCard v-for="set in sets" :key="set" :set="set" />
    </div>
</div>
</template>

<script>
import { blocks } from '../shared/format.js'
import SetCard from './SetCard.vue'

export default {
    name: 'BlockCard',
    components: {
        SetCard,
    },
    props: {
        block: String
    },
    data() {
        return {
            sets: blocks[this.block],
            blockUrl: `https://scryfall.com/search?q=${blocks[this.block].map(e => `set:${e}`).join(' or ')}`,
        }
    }
}
</script>

<style>
.block {
    width: auto;
    border: 1px solid black;
    border-radius: 25px;
    padding: 1em;
    text-align: center;
}

.block-name {
    font-weight: 600;
    font-size: 120%;
    padding-bottom: 0.5em;
}

.block-name:hover {
    color: grey;
}

.block-name a {
    text-decoration: none;
    color: unset;
}

.block .sets {
    display: flex;
    flex-direction: row;
}
</style>