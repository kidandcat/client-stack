<template>
    <div class="navbar">
      LEft navigation {{ message }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "paneeel"
            }
        },
        hello: function(){
          console.log('hello');
        }
    }
</script>
