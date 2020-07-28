<template>
    <div class="contact-box">
        <p class="contact-header">Contact:</p>
        <p>+84888610998</p>
        <p>dquangminh98@gmail.com</p>
        <span><font-awesome-icon icon="linkedin"/></span>
        <a href="#" class="contact-icons"><font-awesome-icon :icon="[ 'fab', 'linkedin' ]"/></a>
        <a href="#" class="contact-icons"><font-awesome-icon :icon="[ 'fab', 'facebook-square' ]"/></a>
        <a href="#" class="contact-icons"><font-awesome-icon :icon="[ 'fab', 'github-square' ]"/></a>
    </div>
</template>

<script>
export default {
    name: 'Contract'
}
</script>

<style scoped>
.contact-header {
    text-decoration: underline;
    margin-bottom: 10px;
    font-size: 16px;
}
.contact-box {
    position: absolute;
    bottom: 0px;
    left: 0px;
    text-align: center !important;
    width: 100%;
    padding: 10px;
    color: var(--secondary-text-color);
    font-size: 14px;
}

.contact-icons {
    color: var(--secondary-text-color);
    margin: 0px 20px 0px 20px
}
</style>