<template>
    <div>
        <p class="p-info"><b><span class="role">{{role}}</span></b> at <b><span class="company">{{company}}</span></b></p>
        <p class="p-meta"><span class="location">{{location}}</span> | {{period}}</p>
    </div>
</template>

<script>
export default {
    name: 'ExperienceHeader',
    props: {
        role: String,
        company: String,
        location: String,
        period: String
    }
}
</script>

<style scoped>
div {
    margin-bottom: 35px;
}

p {
    color: var(--default-text-color);
}

.p-info {
    font-size: 18px;
    margin-bottom: 0px;
}

.p-meta {
    font-size: 16px;
}

.role {
    color: var(--header-secondary-text-color);
}

.company {
    color: var(--header-third-text-color);
}

.location {
    color: var(--header-primary-text-color);
}
</style>