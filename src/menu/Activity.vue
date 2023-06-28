<template>
    <h3>Activity</h3>
    <div class="first-box">
        <div>
            <h3>Overall trend</h3>
            <span>Particle Users: Users who have used the signature service or opened Particle Wallet</span>
        </div>
        <el-divider />
        <div class="hbox">
            <div class="vbox">
                <table class="activity-tab">
                    <tr>
                        <td align="center"><span>Total Users</span></td>
                    </tr>
                    <tr>
                        <td align="center">
                            <h3>0</h3>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="vbox">
                <table class="activity-tab">
                    <tr>
                        <td align="center"><span>Applications</span></td>
                    </tr>
                    <tr>
                        <td align="center">
                            <h3>0</h3>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <div class="hbox">
        <select class="activity-select">
            <option>All Apps</option>
        </select>
        <select class="activity-select">
            <option>Last Week</option>
        </select>
        <h3>UTC+0</h3>
    </div>
    <div class="second-box">
        <div>
            <h3>Users</h3>
        </div>
        <div class="hbox">
            <el-radio-group v-model="radio1">
                <el-radio-button label="New users" />
                <el-radio-button label="Acitve users" />
            </el-radio-group>
            <div class="space"></div>
            <el-radio-group v-model="radio2">
                <el-radio-button label="Daily" />
                <el-radio-button label="Monthly" disabled />
            </el-radio-group>
        </div>
        <el-divider />
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </div>
    <div class="third-box">
        <div>
            <h3>Verification Message</h3>
        </div>
        <div class="hbox">
            <el-radio-group v-model="radio3">
                <el-radio-button label="Total" />
                <el-radio-button label="SMS" />
                <el-radio-button label="Email" />
            </el-radio-group>
            <div class="space"></div>
            <el-radio-group v-model="radio2">
                <el-radio-button label="Daily" />
                <el-radio-button label="Monthly" disabled />
            </el-radio-group>
        </div>
        <el-divider />
        <br><br><br><br><br><br><br><br><br><br><br>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('New users')
const radio2 = ref('Daily')
const radio3 = ref('Total')
</script>

<style>
.first-box,
.second-box,
.third-box {
    border-radius: 25px;
    background-color: #FFFFFF;
    padding: 20px;
    margin: 20px;
}

.activity-tab {
    margin-left: 330px;
}

.activity-select {
    border-radius: 7px;
    height: 32px;
    width: 250px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 15px;
}


</style>