<template>
  <h1>Home</h1>
  <Dialog header="Some Dialog..." v-model:visible="display"> ... with some content 😉 </Dialog>
  <Suspense>
    <template #default>
      <Home />
    </template>
    <template #fallback>
      <div>
        <ProgressSpinner />
        <h3>Calling REST API using axios...</h3>
      </div>
    </template>
  </Suspense>
  <div>
    <Button
      label="Show some dialog"
      icon="pi pi-check"
      iconPos="right"
      @click="showDialog()"
    />
  </div>
</template>
<script>
import Home from "@/views/Home.vue";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import ProgressSpinner from "primevue/progressspinner";

export default {
  name: "HomeWrapper",
  data() {
    return {
      display: false,
    };
  },
  components: {
    Home,
    Dialog,
    Button,
    ProgressSpinner,
  },
  methods: {
    showDialog() {
      this.display = true;
    },
  },
};
</script>