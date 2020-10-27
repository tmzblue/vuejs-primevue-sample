<template>
  <div>
    <DataTable :value="data">
      <Column field="code" header="Code"></Column>
      <Column field="description" header="Description"></Column>
      <Column header="Symbol">
        <template #body="item">
          <span v-html="item.data.symbol"></span>
        </template>
      </Column>
      <Column field="rate" header="Rate"></Column>
    </DataTable>
  </div>
  <TabMenu :model="items" />
  <router-view />
</template>

<script lang="ts">
import axios from "axios";
import TabMenu from "primevue/tabmenu";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default {
  props: {
    msg: String,
  },
  components: {
    DataTable,
    Column,
    TabMenu,
  },
  data() {
    return {
      items: [
        { label: "Subhome", icon: "pi pi-fw pi-home", to: "/home/subhome" },
      ],
    };
  },
  async setup() {
    let data: any = await getPrices();
    // Format data
    data = Object.entries(data).map((x: any) => x[1]);
    return { data };
  },
};

async function getPrices() {
  let data: any;

  // Force delay to show the use of <Suspense>
  await new Promise((resolve) => setTimeout(resolve, 3000));
  var r = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");

  if (r.status == 200) {
    data = r.data.bpi;
  }
  return data;
}
</script>

<style scoped>
@import url(../scss/global.scss);
</style>
