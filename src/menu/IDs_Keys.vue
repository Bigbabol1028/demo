<template>
    <div class="ids">
        <h2>Project Information</h2>
        <div class="formback">
            <span>Project Name</span>
            <br><br>
            <span>Project ID</span>
            <input type="text" id="input1" readonly>
            <el-icon class="key-copy1" @click="copy1">
                <CopyDocument />
            </el-icon>
            <br><br>
            <span>Client Key</span>
            <input type="text" id="input2" readonly>
            <el-icon class="key-copy2" @click="copy2">
                <CopyDocument />
            </el-icon>
            <br><br>
            <span>Server Key</span>
            <input type="text" id="input3" readonly>
            <el-icon class="key-copy3" @click="copy3">
                <CopyDocument />
            </el-icon>
            <br><br>
            <a href="https://docs.particle.network/developers/auth-service/sdks" id="how-use"
                style="font-size: small;">How to use Client Key & Server Key?</a>
        </div>
        <br>
        <h2>Your Apps</h2>
        <div class="formback">
            <h3>There are no apps in your project</h3>
            <br>
            Select a platform to get started
            <br><br>
        </div>
        <div class="formback">
            <p>Need help?</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
function copy1() {
    navigator.clipboard.writeText(input1.value)
    ElMessage({
        message: 'Copy successfully!',
        type: 'success',
    })
}
function copy2() {
    navigator.clipboard.writeText(input2.value)
    ElMessage({
        message: 'Copy successfully!',
        type: 'success',
    })
}
function copy3() {
    navigator.clipboard.writeText(input3.value)
    ElMessage({
        message: 'Copy successfully!',
        type: 'success',
    })
}

import { ref, onMounted } from 'vue'
    
    const data = {
        project_info: {
            project_id: "d82f7042-c9d7-4ec5-a372-61afbcec46d2",
            client_key: "cMv5AKUGyoWtZHw56gAXvzK9k7lA0Y0upVAop4wT",
            server_key: "s5RHklbbsnvGqm1hAwo07I6gnigVxQe5DPQGsdKt",
        }
    };

    onMounted(() => {
        input1.value = data.project_info.project_id;
        input2.value = data.project_info.client_key;
        input3.value = data.project_info.server_key;
    })
  
</script>

<style>
.formback {
    border-radius: 25px;
    background-color: #FFFFFF;
    padding: 20px;
    margin: 20px;
}

#input1 {
    margin-left: 200px;
    width: 400px;
    height: 30px;
    border-radius: 8px;
    border: unset;
    background-color: #F6F7F9;
    color: #86899D;
}

#input2 {
    margin-left: 197px;
    width: 400px;
    height: 30px;
    border-radius: 8px;
    border: unset;
    background-color: #F6F7F9;
    color: #86899D;
}

#input3 {
    margin-left: 193px;
    width: 400px;
    height: 30px;
    border-radius: 8px;
    border: unset;
    background-color: #F6F7F9;
    color: #86899D;
}

.inputimg {
    height: 18.92px;
    width: 14px;
    margin-top: 4px;
    margin-bottom: -3px;
}

#how-use {
    color: #5177F9;
}

.key-copy1 {
    position: absolute;
    left: 935px;
    top: 270px;
    font-size: large;
    cursor: pointer;
}

.key-copy2 {
    position: absolute;
    left: 935px;
    top: 325px;
    font-size: large;
    cursor: pointer;
}

.key-copy3 {
    position: absolute;
    left: 935px;
    top: 378px;
    font-size: large;
    cursor: pointer;
}
</style>