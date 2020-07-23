<template>
    <div class="observer"/>
</template>
<script>
export default {
    data: () => ({
        observer: null
    }),
    mounted() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    let id = entry.target.id
                    this.$emit("change_tab", id)
                }
            })
        }, {rootMargin: "0px 0px -99% 0px"})

        let sections = document.querySelectorAll('section[id]')
        for (var i=0; i < sections.length; i++){
            this.observer.observe(sections[i])
        }
    },
    destroyed() {
        this.observer.disconnect()
    }
}
</script>