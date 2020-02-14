<template>
  <b-container fluid>
    <h2 class="page-title mb-4">{{ $t("nav.users") }}</h2>
    <b-row class="d-flex justify-content-end mb-3">
      <b-button variant="success">{{ $t("btn.new_user") }}</b-button>
    </b-row>
    <b-row>
      <b-table
        striped
        hover
        :busy="loading"
        :fields="fields"
        :items="items"
        :current-page="current_page"
        :per-page="per_page"
      >
        <!-- Loading -->
        <template v-slot:table-busy>
          <div class="text-center text-secondary my-5">
            <b-spinner class="align-middle mr-2"></b-spinner>
            <strong>Loading...</strong>
          </div>
        </template>

        <template v-slot:cell(role_id)="row">
          <b-badge v-if="row.value === 1" pill variant="dark">Root</b-badge>
          <b-badge v-else-if="row.value === 2" pill variant="warning">Admin</b-badge>
          <b-badge v-else-if="row.value === 3" pill variant="primary">Standard</b-badge>
        </template>

        <template v-slot:cell(is_enabled)="row">
          <b-badge v-if="row.value === 'Yes'" href="#" variant="success">Enabled</b-badge>
          <b-badge v-else href="#" variant="secondary">Disabled</b-badge>
        </template>

        <template v-slot:cell(actions)="row">
          <b-button-group>
            <b-button size="sm" variant="outline-dark">
              {{ $t("btn.details") }}
            </b-button>
            <b-button v-if="row.item.role_id !== 1" size="sm" variant="outline-danger">
              {{ $t("btn.delete") }}
            </b-button>
            <!-- <b-button v-if="row.item.is_enabled" size="sm" variant="outline-danger">
              {{ $t("btn.disable") }}
            </b-button>
            <b-button v-else size="sm" variant="outline-success">
              {{ $t("btn.enable") }}
            </b-button> -->
          </b-button-group>
        </template>
      </b-table>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          key: "id",
          label: "ID",
          sortable: true
        },
        {
          key: "username",
          label: "賬號/Username",
          sortable: false
        },
        {
          key: "email",
          label: "郵箱/Email",
          sortable: false
        },
        {
          key: "role_id",
          label: "角色/Role",
          // formatter: value => {
          //   return value ? "Yes" : "No";
          // },
          // sortable: true,
          // sortByFormatted: true,
          // filterByFormatted: true
        },
        {
          key: "created_time",
          label: "創建日期/Created Date",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "loggedin_time",
          label: "上次登入/Last Loggedin",
          sortable: true,
          sortDirection: "desc"
        },
        {
          key: "is_enabled",
          label: "是否啟用/is Enabled",
          formatter: value => {
            return value ? "Yes" : "No";
          }
          // sortable: true,
          // sortByFormatted: true,
          // filterByFormatted: true
        },
        { key: "actions", label: "操作/Actions" }
      ],
      items: [],
      loading: false,
      total_items: null,
      per_page: null,
      current_page: null,
      total_pages: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        this.items = [
          {
            id: 1,
            username: "root",
            email: "root@gmail.com",
            role_id: 1,
            is_enabled: true,
            created_time: "2020-01-12",
            modified_time: null,
            loggedin_time: "2020-02-01 09:00:00"
          },
          {
            id: 2,
            username: "criss",
            email: "criss@gmail.com",
            role_id: 2,
            is_enabled: true,
            created_time: "2020-01-27",
            modified_time: "2020-01-31",
            loggedin_time: "2020-02-12 15:39:54"
          },
          {
            id: 3,
            username: "zavin",
            email: "zavin@gmail.com",
            role_id: 3,
            is_enabled: true,
            created_time: "2020-01-30",
            modified_time: "2020-01-30",
            loggedin_time: "2020-02-05 11:14:03"
          },
          {
            id: 4,
            username: "leo",
            email: "leo@gmail.com",
            role_id: 3,
            is_enabled: false,
            created_time: "2020-02-03",
            modified_time: null,
            loggedin_time: "2020-02-11 21:46:13"
          }
        ];
        this.total_items = this.items.length;
        this.loading = false;
      }, 500); // simulate IO
    }
  }
};
</script>
