<template>
    <BaseContainer>
        <h2>Interested? Coach : {{ this.$route.params.id }} Reach out now</h2>
        <form v-on:submit.prevent="onSubmit">
            <div>
                <label for="name">Your Email</label>
                <input type="email" id="name" v-model="email" required>
            </div>
            <div>
                <label for="message" >Your Message</label>
                <textarea id="message" rows="5" v-model="message" required></textarea>
            </div>
            <BaseButton mode="#3d008d">Send Message</BaseButton>
        </form>
    </BaseContainer>
</template>

<script>
    export default {
        data() {
            return {
                email : '',
                message : ''
            }
        },
        methods : {
            onSubmit() {
                this.$store.commit('addRequest',{
                    coachId : this.$route.params.id,
                    email : this.email,
                    message : this.message,
                    id : Math.random().toString(),
                })

                console.log(this.$store.getters.getRequests);
            }
        }

    }
</script>

<style scoped>

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    border : solid gray 1.5px;
    padding: 2rem;
    margin: 1rem 0;
    border-radius: 15px;
}

form div {

    display: flex;
    flex-direction: column;

}


label {
    font-weight: bold;
}

input, textarea {
    border-radius: 6px;
    border: 1px solid #ccc;
    padding: 0.5rem;
}

input:focus, textarea:focus {
    outline: none;
    border-color: #2c974b;
}
input[type="email"] {
    border-radius: 6px;
    border: 1px solid #ccc;
    padding: 0.5rem;
}

input[type="email"]:focus {
    outline: none;
    border-color: #2c974b;
}

input[type="email"]:invalid {
    border-color: #dc3545;
}


</style>