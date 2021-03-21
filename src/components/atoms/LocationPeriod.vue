<template>
  <p class="p-meta"><span class="location">{{location}}</span> | {{period}}</p>
</template>

<script>
export default {
    name:"LocationPeriod",
    props: {
        location: String,
        period: String
    }
}
</script>

<style>

.p-meta {
    font-size: 16px;
}


.location {
    color: var(--header-primary-text-color);
}
</style>