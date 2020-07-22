<template>
    <div class="side-bar">
        <collab-trigger-button check_box_id="check" />
        <div class="hide-collabs">
            <avatar src="avatar.jpg"/>
            <person-title name="Minh Doan Quang" jobtitle="Web Developer of Wonder Land"/>
            <side-bar-option v-on:onclick=option_click text="About Me"/>
            <side-bar-option v-on:onclick=option_click text="Experiences"/>
            <side-bar-option v-on:onclick=option_click text="Educations"/>
            <side-bar-option v-on:onclick=option_click text="Skills"/>
            <side-bar-option v-on:onclick=option_click text="Activities"/>
            <side-bar-option v-on:onclick=option_click text="Contacts"/>
        </div>
    </div>
</template>
<script>
import Avatar from '../molecules/Avatar'
import CollabTriggerButton from '../molecules/CollabTriggerButton'
import SideBarOption from '../molecules/SideBarOption'
import PersonTitle from '../molecules/PersonTitle'

export default {
    name:'PortfolioSideBar',
    components: {
        Avatar,
        CollabTriggerButton,
        SideBarOption,
        PersonTitle
    },
    methods: {
        option_click() {
            //to be implement
            console.log("option clicked")
        }
    }
}
</script>
<style scoped>
.side-bar {
    padding-top: 55px;
    padding-bottom: 40px;
    background: var(--secondary-bg-color);
    position: fixed;
    left:0px;
    width: 250px;
    height: 100%;
    text-align: center;
    color: var(--hover-hightlight-color);
    transition: left 0.5s;
}

.hide-collabs {
    transition: display 1s;   
}
</style>