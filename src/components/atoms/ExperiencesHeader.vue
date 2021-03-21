<template>
    <div>
        <p class="p-info"><b><span class="role">{{role}}</span></b> at <b><span class="company">{{company}}</span></b></p>
        <location-period :period="period" :location="location"></location-period>
    </div>
</template>

<script>
import LocationPeriod from './LocationPeriod'

export default {
    name: 'ExperienceHeader',
    components: {LocationPeriod},
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


.role {
    color: var(--header-secondary-text-color);
}

.company {
    color: var(--header-third-text-color);
}

</style>