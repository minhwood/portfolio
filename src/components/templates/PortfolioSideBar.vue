<template>
    <div class="side-bar">
        <collab-trigger-button check_box_id="check" />
        <div class="hide-collabs">
            <avatar src="myavatar.png"/>
            <!-- <flipping-avatar src="myavatar.png" /> -->
            <person-title name="Minh Doan Quang" jobtitle="Just a Casual Developer"/>
            <side-bar-option :current_active_tab=active_tab section_id="about" text="About"/>
            <side-bar-option :current_active_tab=active_tab section_id="skills" text="Skills"/>
            <side-bar-option :current_active_tab=active_tab section_id="educations" text="Educations"/>
            <side-bar-option :current_active_tab=active_tab section_id="experiences" text="Experiences"/>
            <!-- <side-bar-option :current_active_tab=active_tab section_id="playground" text="Playground"/> -->
            <side-bar-option :current_active_tab=active_tab section_id="projects" text="Projects"/>
        </div>
    </div>
</template>
<script>
import Avatar from '../molecules/Avatar'
// import FlippingAvatar from '../molecules/FlippingAvatar'
import CollabTriggerButton from '../molecules/CollabTriggerButton'
import SideBarOption from '../molecules/SideBarOption'
import PersonTitle from '../molecules/PersonTitle'

export default {
    name:'PortfolioSideBar',
    props: {
        active_tab: String
    },
    components: {
        Avatar,
        // FlippingAvatar,
        CollabTriggerButton,
        SideBarOption,
        PersonTitle,
    },
}
</script>
<style scoped>
.side-bar {
    padding-top: 55px;
    padding-bottom: 40px;
    background-color: var(--secondary-bg-color);
    position: fixed;
    width: 250px;
    height: 100%;
    text-align: center;
    color: var(--hover-hightlight-color);
    transition: left 0.5s ease-in;
    animation: transitionIn 1s;
    left:0px;
}

.side-bar::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url('../../assets/melbourne.jpg') !important;
    background-size: 100vh;
    opacity: 0.1;
    z-index: -1;
}

.hide-collabs {
    transition: display 1s;   
}

.vertical-centralize {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

@keyframes transitionIn {
    from {
        left: -250px;
    }
    to {
        left: 0px;
    }
}

@media(max-width:768px) {
    .side-bar {
        left: -200px !important;
    }

    .hide-collabs {
        display:none;
    }
}
</style>