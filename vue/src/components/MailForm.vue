<template>
  <form @submit.prevent="handleSubmit">
    <fieldset>
      <label>first name</label>
      <!-- <input :value="user.firstName" @input="handleFirstNameChange" /> -->
      <input :value="firstName" @input="handleFirstNameChange" />
    </fieldset>
    <!-- <fieldset><label>email</label><input v-model="user.mail" /></fieldset> -->
    <fieldset><label>email</label><input v-model="mail" /></fieldset>
    <fieldset>
      <label>frequency</label>
      <!-- <select v-model="user.frequency"> -->
      <select v-model="frequency">
        <option>weekly</option>
        <option>monthly</option>
      </select>
    </fieldset>
    <fieldset>
      <button type="submit">subscribe to newsletter</button>
    </fieldset>
  </form>
</template>

<script setup lang="ts">
import { onUpdated, reactive, toRefs } from "vue";

console.log("render <MailForm />");

onUpdated(() => {
  console.log("updated <MailForm />");
});

type User = {
  firstName: string;
  mail: string;
  frequency: "weekly" | "monthly";
};

const user = reactive<User>({ firstName: "", mail: "", frequency: "weekly" });

const { firstName, mail, frequency } = toRefs(user);

const handleFirstNameChange = (evt: Event) => {
  // user.firstName = (evt.target as HTMLInputElement).value;
  firstName.value = (evt.target as HTMLInputElement).value;
};

const emit = defineEmits(["subscribe-newsletter"]);

const handleSubmit = () => {
  emit("subscribe-newsletter", user.firstName);
};
</script>

<style scoped lang="scss">
$gap: 5px;

form {
  color: white;
  background: #6e7582;
  display: flex;
  padding: $gap;
  width: 100%;
}

fieldset {
  border: 0;
  padding: 0;

  input {
    max-width: 100px;
  }

  + fieldset {
    margin-left: $gap;
  }

  &:last-child {
    flex: 1;
    text-align: right;
  }
}

label {
  margin-right: $gap;
}

@media (max-width: 767px) {
  form {
    flex-wrap: wrap;
  }
}
</style>
