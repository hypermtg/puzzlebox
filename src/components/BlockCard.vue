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
    border: 1px solid var(--color-9);
    border-radius: 25px;
    padding: 1em;
    text-align: center;
    background: var(--color-1);
}

.block-name {
    font-weight: 600;
    font-size: 120%;
    padding-bottom: 0.5em;
    color: var(--color-8);
}

.block-name:hover {
    color: var(--color-10);
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