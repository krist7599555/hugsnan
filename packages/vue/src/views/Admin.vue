<template lang="pug">
  section.section(style='max-width: 750px; margin: auto; margin-top: 2rem;')
    h1.title สวัสดี {{$store.getters.user.nameTH}} 🌺
    pre(style='height: 9rem')
      span(v-if='!users.length') loading ...
      span(v-else) {{filter}}

    br
    .help * กดเลือก คณะ, เพศ เพื่อ filter ข้อมูล
    br
    table#table_summary.table.is-striped.is-narrowed(v-if='users.length')
      thead
        tr
          td
          td รวม ({{users.length}})
          td(@click='searchToggle("gender", "male")' :class='activeClass("gender", "male")') ชาย ({{summary2.male}})
          td(@click='searchToggle("gender", "female")' :class='activeClass("gender", "female")') หญิง ({{summary2.female}})
          td(@click='searchToggle("year", 62)' :class='activeClass("year", 62)') ปี 1 ({{summary2[62]}})
          td(@click='searchToggle("year", 61)' :class='activeClass("year", 61)') ปี 2 ({{summary2[61]}})
          td(@click='searchToggle("year", 60)' :class='activeClass("year", 60)') ปี 3 ({{summary2[60]}})
          td(@click='searchToggle("year", 59)' :class='activeClass("year", 59)') ปี 4 ({{summary2[59]}})
      tbody
        tr(v-for='g, f in summary' :key='f')
          td(@click='searchToggle("faculty", +f)' :class='activeClass("faculty", +f)') {{faculty[f].nameABBR}}
          td {{(g.male || 0) + (g.female || 0)}}
          td {{g.male}}
          td {{g.female}}
          td {{g[62]}}
          td {{g[61]}}
          td {{g[60]}}
          td {{g[59]}}

    br
    br
    br
    b-table#table_records(
      :data="users2"
      detailed detail-key="_id"
      @details-open="(row, idx) => fetchDetail(row, idx)"
      :paginated="true"
      :per-page="25"
    )
      template(slot-scope="u" v-show='isVisible(u.row)')
        b-table-column(key='name' label='ชื่อ' sortable field='nameTH')
          | {{u.row.nameTH}} {{u.row.surnameTH}}
        b-table-column(key='nickname' label='ชื่อเล่น' custom-key='nickname' sortable field='nickname')
          | {{u.row.nickname}}
        b-table-column(key='faculty' label='คณะ' sortable field='faculty')
          | {{faculty[u.row.faculty].nameABBR}}
        b-table-column(key='year' label='ปี' sortable field='year')
          | {{63 - u.row.year}}
        b-table-column(key='gender' label='เพศ')
          template(v-if='u.row.gender == "male"')
            b-icon(icon='mars' style='color: #2c81ec' key='male-icon')
          template(v-else-if='u.row.gender == "female"')
            b-icon(icon='venus' style='color: #e875be' key='female-icon')
          template(v-else) -
        b-table-column(key='lastUpdate' label='แก้ไข' sortable field='lastUpdate')
          template(v-if='u.row.lastUpdate')
            .tag
              .is-size-7 {{dayjs(u.row.lastUpdate).fromNow()}}
      template(slot="detail" slot-scope="u")
        .content(style='line-height: 1.7rem; max-width: 500px; margin: auto')
          User(:user='u.row' :quiz='quiz')

</template>


<script>
import Vue from 'vue'
import axios from 'axios';
import dayjs from 'dayjs';
import _ from 'lodash';
import {users, quiz} from '../store/actions'
import User from './../components/User.vue'

export default {
  components: {User},
  data() {
    return {
      users: [],
      faculty: require('../info/faculty.json'),
      dayjs,
      quiz: [],
      filter: {}
    }
  },
  async created() {
    this.quiz = await quiz();
    this.users = await users();
  },
  computed: {
    summary() {
      return _.mapValues(_.groupBy(this.users, "faculty"), l => ({..._.countBy(l, 'gender'), ..._.countBy(l, 'year')}))
    },
    summary2() {
      // @ts-ignore
      const gender = _.countBy(this.users, "gender")
      // @ts-ignore
      const faculty = _.countBy(this.users, "faculty")
      // @ts-ignore
      const year = _.countBy(this.users, "year")
      return {...gender, ...faculty, ...year}
    },
    users2() {
      // @ts-ignore
      return this.users.filter(u => this.isVisible(u))
    }
  },
  methods: {
    isActive(k, v) {
      return this.filter[k] === v;
    },
    activeClass(k, v) {
      return {"is-active": this.isActive(k, v)}
    },
    searchToggle(k, v) {
      if (this.isActive(k, v)) {
        this.$delete(this.filter, k)
      } else {
        this.$set(this.filter, k, v)
      }
    },
    isVisible(u) {
      return _.isMatch(u, this.filter)
    },
    async fetchDetail(row) {
      await axios.get(`/api/users/${row._id}`).then(res => {
        this.users = this.users.map(u => {
          // @ts-ignore
          return u._id === row._id ? res.data : u
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/variables";
@include mobile {

  .section {
    padding: 0;
  }
  .title, .help {
    margin-left: 1rem;
  }
  #table_summary {
    // transform: scale(0.9);
    font-size: 0.9rem;
    td {
      // padding: 0.5em 0.7em;
      text-align: right;
    }
  }
}
#table_summary {
  margin: auto;
}
td.is-active {
  background-color: #ffebf6;
}
td.point {
  cursor: pointer;
  font-style: italic;
}
</style>
