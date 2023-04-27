<template>
    <div class="percentages d-flex flex-column gap-4">
        <div v-for="category in categories" class="component">
        <div class="percentage d-flex justify-content-between">
            <div class="title">
                <h2 class="black-title fs-4">{{ category.title }}</h2>
            </div>
            <div class="number"><span class="black-title fs-4">{{ category.percentage }}</span></div>
        </div>
        <div class="line">
            <div :style="{width:category.percentage}" class="lineon"></div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name:'Percentage',
        props:['categories']
    }
</script>

<style lang="scss" scoped>
.percentages {
    width: 50%;
}
.line {
    width: 100%;
    background-color: #eeeeee;
    height: 2px;
    margin-top:10px;
    position: relative;
}

.lineon {
    background-color: $orange;
    height: 5px;
    top:-3px;
    position:absolute;
}
</style>