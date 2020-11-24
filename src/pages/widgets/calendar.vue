<template>
  <div class="calendar">
    <div class="btns">
      <div class="ybtn" @click="() => getPrev('Y')">◀◀</div>
      <div class="mbtn" @click="() => getPrev()">◀</div>
      <div
        class="now_btn"
        :class="state.isNow ? 'active' : ''"
        @click="getNow"
      >
        {{state.nYear}} • {{`${state.nMonth}`.padStart(2, '0')}}
      </div>
      <div class="mbtn" @click="() => getNext()">▶</div>
      <div class="ybtn" @click="() => getNext('Y')">▶▶</div>
    </div>
    <div class="head">
      <div
        class="week_item item"
        v-for="i in sWeek"
        v-html="i"
        :key="i"
      />
    </div>
    <div class="body">
      <div
        class="day_item item"
        :class="[
          state.isNow && (Number(item) === now.day) ? 'active' : '',
          `week_${index%7}`,
        ]"
        v-for="(item, index) in state.days"
        v-html="item"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { getDays, getCurrentTime } from '/~/utils/date'

type BtnType = 'Y' | 'M'
interface IState {
  isNow: boolean;
  days: string[];
  nYear: number;
  nMonth: number;
}

const sWeek = '🅂 🄼 🅃 🅆 🅃 🄵 🅂'.split(' ')

const state = reactive<IState>({
  isNow: true,
  days: [],
  nYear: 0,
  nMonth: 0,
})

// init
const now = getCurrentTime()
state.days = getDays(now.year, now.month)
state.nYear = now.year
state.nMonth = now.month

function getPrev(type: BtnType = 'M') {
  if (type === 'Y') {
    state.nYear = state.nYear - 1
  } else {
    if (state.nMonth <= 1) {
      state.nYear = state.nYear - 1
      state.nMonth = 12
    } else {
      state.nMonth = state.nMonth - 1
    }
  }
  setNow()
}

function getNext(type: BtnType = 'M') {
  if (type === 'Y') {
    state.nYear = state.nYear + 1
  } else {
    if (state.nMonth >= 12) {
      state.nYear = state.nYear + 1
      state.nMonth = 1
    } else {
      state.nMonth = state.nMonth + 1
    }
  }
  setNow()
}

function getNow() {
  state.nYear = now.year
  state.nMonth = now.month
  state.days = getDays(now.year, now.month)
  state.isNow = true
}

function setNow() {
  if (state.nYear === now.year && state.nMonth === now.month) {
    state.isNow = true
  } else {
    state.isNow = false
  }
  state.days = getDays(state.nYear, state.nMonth)
}

export { sWeek, now, state }
export { getPrev, getNext, getNow }
</script>

<style scoped>
.calendar {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  text-align: left;
}
.head, .btns, .body {
  width: 196px;
}
.btns {
  margin-bottom: 4px;
  user-select: none;
  font-weight: bold;
}
.btns div {
  width: 24px;
  height: 24px;
  line-height: 24px;
  display: inline-block;
  background: #eee;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  color: #3eaf7c;
  vertical-align: middle;
}
.btns .ybtn {
  width: 30px;
  font-size: 14px;
  letter-spacing: -5px;
  text-indent: -5px;
}
.btns .mbtn {
  margin: 0 2px;
}
.btns .now_btn {
  width: 72px;
  color: #000;
  background: #eee;
  font-size: 12px;
  margin: 0 4px;
}
.btns .now_btn.active {
  color: #fff;
  background: #3eaf7c;
}
.item {
  width: 24px;
  height: 24px;
  background: #eee;
  display: inline-block;
  margin: 2px;
  border-radius: 4px;
  text-align: center;
  line-height: 24px;
  font-size: 12px;
  font-weight: bold;
  vertical-align: middle;
}
.day_item {
  border-radius: 50%;
}
.week_item {
  display: inline-block;
  font-size: 24px;
  color: #3eaf7c;
  background: transparent;
}
.week_0, .week_6 {
  background: #e9e9e9;
  color: #999;
}
.active {
  background: #3eaf7c;
  color: #fff;
}
</style>