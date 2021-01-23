<template>
    <div id="profile">
        <div class="container">
            <button class="btn">
                <i class="fa fa-plus-circle mt-5"></i>
            </button>
            <b-tabs class="mt-5" content-class="mt-3" fill>
                <b-tab title="Resumes" active>
                    <p>I'm the first tab</p>
                </b-tab>
                <b-tab title="Account Settings">
                    <p>I'm the second tab</p>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
@import '../styles/_variables.scss';
.container {
    height: 100vh;
    button {
        font-size: 50px;
        margin-left: 90%;
    }
}
</style>