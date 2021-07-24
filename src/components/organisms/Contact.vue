<template>
    <div class="contact-box">
        <div class='contact-container'>
            <p class="contact-header">Contact:</p>
            <p>+84888610998</p>
            <p>dquangminh98@gmail.com</p>
            <a href="https://github.com/minhwood" class="contact-icons" target="_blank"><font-awesome-icon :icon="[ 'fab', 'github-square' ]"/></a>
            <a href="https://www.linkedin.com/in/doanquangminh/" class="contact-icons" target="_blank"><font-awesome-icon :icon="[ 'fab', 'linkedin' ]"/></a>
            <a href="https://www.facebook.com/taksraj/" class="contact-icons" target="_blank"><font-awesome-icon :icon="[ 'fab', 'facebook-square' ]"/></a>
        </div>
        <div class='cv-btn-container'>
            <a href="https://github.com/minhwood/minhwood/raw/master/Doan%20Quang%20Minh_CV.pdf"><div class="cv-button">View my CV</div></a>
        </div>
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
    display: flex;
    justify-content: space-between;
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

.cv-btn-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.cv-button {
  transition: 0.2s;
  text-decoration: none;
  border: 2px solid white;
  padding: 10px 25px;
  color: white;
  display: inline-block;
  text-align:center;
  margin-bottom: 10px;
}

.cv-button:hover {
  background-color: darkgray;
}

@media(max-width:768px) {
    .contact-box  {
        flex-direction: column;
        
    }

    .contact-container {
        width: 100%;
        margin-bottom: 10px;
    }

    .cv-btn-container {
        width: 100%;
    }
}
</style>