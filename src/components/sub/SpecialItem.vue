<template>
    <div v-for="card in cards" class="col-12 col-lg-3 pe-4 text-center d-flex flex-column gap-2">
        <div class="svg">
            <img :src="'/svg/'+ card.image" :alt="card.title">
        </div>
        <h3 class="black-title fs-4">{{ card.title }}</h3>
        <p class="subtext fs-5">{{ card.text }}</p>
    </div>
</template>

<script>
export default {
    name: 'SpecialItem',
    props: ['cards']
}
</script>

<style lang="scss" scoped></style>