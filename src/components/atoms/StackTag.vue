<template>
  <span class="stack-tag" :style="styleClass">{{stack}}</span>
</template>

<script>
export default {
    name:"StackTag",
    props: {
        stack: String
    },
    methods: {
        stringToColour(str) {
            var hash = 0;
            for (let i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            var colour = '#';
            for (let i = 0; i < 3; i++) {
                var value = (hash >> (i * 8)) & 0xFF;
                colour += ('00' + value.toString(16)).substr(-2);
            }
            return colour;
        },
        stackToColour(stack) {
            switch(stack) {
                case "Python": return "#3776ab"
                case "Vue": return "#42b883"
                case "C#": return "#005776"
                case ".NET": return "#005776"
                case "Wordpress": return "#21759b"
                case "HTML": return "#FF4500"
                case "CSS": return "#1E90FF"
                case "SCSS": return "#FF69B4"
                case "Django": return "#092e20"
                case "Javascript": return "#F0DB4F"
                case "PHP": return "#787CB5"
                case "Scrapy": return "#60a839"
                case "MySQL": return "#00758F"
                case "Heroku": return "#6567a5"
                case "Scala": return "#DE3423"
                case "React": return "#61DBFB"
                case "Flutter": return "#A8D0DB"
                default: return this.stringToColour(this.stack)
            }
        }
    },
    computed:{
        styleClass() {
            return {
                backgroundColor: this.stackToColour(this.stack),
                color: this.stack=="Javascript" ? "var(--secondary-bg-color)":"var(--default-text-color);"
            }
        }
    }
}
</script>

<style scoped>
.stack-tag {
    padding: 5px;
    border-radius: 4px;
    margin: 5px;
    display: inline-block;
    font-size: 13px;
    font-weight: bold;
}
</style>