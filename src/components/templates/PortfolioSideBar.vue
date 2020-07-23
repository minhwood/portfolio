<template>
    <div class="side-bar">
        <collab-trigger-button check_box_id="check" />
        <div class="hide-collabs">
            <avatar src="avatar.jpg"/>
            <person-title name="Minh Doan Quang" jobtitle="Web Developer of Wonder Land"/>
            <side-bar-option v-on:onclick=option_click section_id="#about" class="active" text="About"/>
            <side-bar-option v-on:onclick=option_click section_id="#experiences" text="Experiences"/>
            <side-bar-option v-on:onclick=option_click section_id="#educations" text="Educations"/>
            <side-bar-option v-on:onclick=option_click section_id="#skills" text="Skills"/>
            <side-bar-option v-on:onclick=option_click section_id="#activities" text="Activities"/>
            <side-bar-option v-on:onclick=option_click section_id="#contacts" text="Contacts"/>
            <side-bar-option v-on:onclick=option_click section_id="#playground" text="Playground"/>
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
    width: 250px;
    height: 100%;
    text-align: center;
    color: var(--hover-hightlight-color);
    transition: left 0.5s ease-in;
    animation: transitionIn 1s;
    left:0px;
}

.hide-collabs {
    transition: display 1s;   
}

@keyframes transitionIn {
    from {
        left: -250px;
    }
    to {
        left: 0px;
    }
}

@media(max-width:568px) {
    .side-bar {
        left: -200px !important;
    }

    .hide-collabs {
        display:none;
    }
}
</style>