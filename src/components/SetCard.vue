<template>
<div class="set">
    <a class="set-link" :href="setUrl" target="_blank">
        <i :class="[
            'set-symbol',
            'ss ss-4x ss-fw',
            'ss-' + setCode,
            ]"></i>
        <div class="set-name">{{ setName }}</div>
    </a>
</div>
</template>

<script>
import { sets } from '../shared/format.js'

export default {
    name: 'BlockCard',
    props: {
        set: String
    },
    data() {
        return {
            setCode: this.set,
            setName: sets[this.set],
            setUrl: `https://scryfall.com/sets/${this.set}`,
        }
    }
}
</script>

<style>
.set {
    width: 120px;
    max-width: 120px;
    text-align: center;
}

.set-link {
    color: var(--color-8);
    text-decoration: none;
}

.set-link:hover {
    color: var(--color-10);
}

.set-symbol {
    padding-bottom: 0.125em;
}

.set-name {
    word-wrap: normal;
    overflow-x: wrap;
}
</style>