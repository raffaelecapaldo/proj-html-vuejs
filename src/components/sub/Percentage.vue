<template>
    <div class="percentages">
        <div class="percentage d-flex justify-content-between">
            <div class="title">
                <h2 class="black-title fs-4">Mentorship</h2>
            </div>
            <div class="number"><span class="black-title fs-4">30%</span></div>
        </div>
        <div class="line">
            <div class="lineon"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Percentage'
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
    width: 50%;
    background-color: $orange;
    height: 5px;
    top:-3px;
    position:absolute;
}
</style>