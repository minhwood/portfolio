<template>
    <div class="contact-box">
        <p class="contact-header">Contact:</p>
        <p>+84888610998</p>
        <p>dquangminh98@gmail.com</p>
        <a href="https://www.linkedin.com/in/doanquangminh/" class="contact-icons" target="_blank"><font-awesome-icon :icon="[ 'fab', 'linkedin' ]"/></a>
        <a href="https://www.facebook.com/taksraj/" class="contact-icons" target="_blank"><font-awesome-icon :icon="[ 'fab', 'facebook-square' ]"/></a>
        <a href="https://github.com/minhdq1998" class="contact-icons" target="_blank"><font-awesome-icon :icon="[ 'fab', 'github-square' ]"/></a>
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
    margin-bottom: 15px;
    font-size: 16px;
}
.contact-box {
    width: 100%;
    color: var(--secondary-text-color);
    font-size: 16px;
}

.contact-icons {
    color: var(--secondary-text-color);
    margin: 0px 20px 0px 0px;
}

.contact-icons svg {
    height: 22px;
    width: 22px;
    transition: 0.3s;
}

.contact-icons svg:hover {
    transform: scale(1.1);
    color: var(--default-text-color);
}
</style>