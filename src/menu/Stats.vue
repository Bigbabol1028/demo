<template>
    <div class="vbox">
        <div class="first-box">
            <div class="first-header">
                <h4>Stats</h4>
                <div class="space"></div>
                <el-cascader v-model="value" :options="options" class="first-drop" />
                <el-cascader v-model="value" :options="options" class="first-drop2" />
            </div>
            <el-divider />
            <div class="first-body">
                <div class="body-1">
                    Total Request Count
                    <br>
                    <h3>0</h3>
                </div>
                <div class="body-1">
                    Error Request Count
                    <br>
                    <h3>0</h3>
                </div>
                <div class="body-1">
                    Success Rate
                    <br>
                    <h3>0%</h3>
                </div>
            </div>
        </div>
        <div class="second-box">
            <div class="second-title">
                <h4>Method Call</h4>
            </div>
            <div class="second-header">
                <el-cascader v-model="value" :options="options" class="second-drop" />
                <button class="second-btn">Hour</button>
                <button disabled class="second-btn">Day</button>
                <button disabled class="second-btn">Week</button>
                <div class="space"></div>
                <el-checkbox v-model="checked1">Http</el-checkbox>
                <el-checkbox v-model="checked2">WebSocket</el-checkbox>
            </div>
            <el-divider />
            <div class="second-body">
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            </div>
        </div>
        <div class="third-box">
            <div class="third-body">
                <h4>Response status (Success)</h4>
                <el-divider />
            </div>
            <div class="third-body">
                <h4>Response status (Success)</h4>
                <el-divider />
            </div>
        </div>
        <div class="help-box hbox">
            <h4>Need help?</h4>
            <div class="space"></div>
            <el-icon size="28px" class="stats-icon">
                <Wallet />
            </el-icon>
            <p class="icon-name">Open Demo Wallets</p>
            <el-icon size="28px" class="stats-icon">
                <Tickets />
            </el-icon>
            <p class="icon-name">Read Docs</p>
            <el-icon size="28px" class="stats-icon">
                <VideoCamera />
            </el-icon>
            <p class="icon-name">View Demos</p>
            <el-icon size="28px" class="stats-icon">
                <Phone />
            </el-icon>
            <p class="icon-name">Go to Support</p>
        </div>
    </div>
</template>
  
<script lang="ts" setup>

const value = ref([])
const options = [
    {
        value: 'a',
        label: 'A',
    },
    {

        value: 'b',
        label: 'B',
    },
    {
        value: 'c',
        label: 'C',
    }
]
import { ref } from 'vue'
const checked1 = ref(true)
const checked2 = ref(true)
</script>
<style>
.first-box,
.second-box,
.third-body,
.help-box {
    border-radius: 25px;
    background-color: #FFFFFF;
    padding: 20px;
    margin: 20px;
}

.first-header,
.second-header {
    display: flex;
    height: 30px;
}

.first-drop {
    margin-right: 30px;
}

.first-drop2 {
    margin-right: 50px;
}

.first-body {
    display: flex;
}

.body-1 {
    width: 600px;
}

.second-drop {
    width: 300px;
}

.second-btn {
    margin-left: 15px;
    border-radius: 7px;
    border: unset;
    height: 32px;
    width: 57px;
}


.third-box {
    display: flex;
}

.third-body {
    width: 1100px;
    height: 500px;
}

.stats-icon {
    margin-top: 16px;
    margin-left: 30px;
}

.icon-name {
    margin-top: 21px;
    margin-left: 5px;
}
</style>